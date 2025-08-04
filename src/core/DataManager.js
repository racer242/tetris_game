import { Component } from "react";

import {
  setStorageData,
  setStoreData,
  storageDataSaved,
} from "../actions/appActions";

import LocalStorageManager from "./LocalStorageManager";
import axios from "axios";
import { LOAD_ERROR } from "../utils/texts";
import {
  getCurrentDateDDMMYYYY,
  getCurrentDateTime,
} from "../utils/stringTools";
import { callLater } from "./helpers";

class DataManager extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    if (this.store) {
      this.state = {
        ...this.store.getState(),
      };
    } else
      this.state = {
        localStoreName: "local",
      };
    this.isLoading = false;
  }

  /* ++++ React methods ++++ */

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.onStoreChange();
    });
    this.mounted = true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted = false;
  }

  componentDidUpdate(prevProps, prevState) {}

  onStoreChange() {
    if (this.mounted) {
      let state = this.store.getState();
      this.setState({
        ...this.state,
        ...state,
      });

      if (!this.localStorageManager) {
        this.localStorageManager = new LocalStorageManager({
          name: state.localStoreName,
        });
      }

      if (!this.isLoading) {
        if (state.requestStart) {
          console.log("DataManager requestStart");
          this.requestStart(state.requestStart);
        } else if (state.requestFinish) {
          console.log("DataManager requestFinish");
          this.requestFinish(state.requestFinish);
        }
      }
      if (state.saveStorageData) {
        console.log("DataManager saveStorageData");
        this.saveStorageData(state.saveStorageData);
      }
      if (state.loadStorageData) {
        console.log("DataManager loadStorageData");
        this.loadStorageData();
      }
    }
  }

  async requestStart(action) {
    await this.load(
      action.request,
      action.data,
      {},
      "requestStart",
      "gameCredentials"
    );
  }

  async requestFinish(action) {
    await this.load(
      action.request,
      action.data,
      {},
      "requestFinish",
      "gameScores"
    );
  }

  loadStorageData() {
    let storageData = this.localStorageManager.load();
    this.store.dispatch(
      setStoreData({
        storageData,
        loadStorageData: false,
      })
    );
  }

  saveStorageData(data) {
    let storage = this.localStorageManager.load() ?? {};
    let top = storage.top ?? [];
    top.push({ t: getCurrentDateTime(), s: data.score });
    top.sort((a, b) => b.s - a.s);
    if (top.length > 10) {
      top = top.slice(0, 10);
    }
    let count = storage.count ?? {};
    let date = getCurrentDateDDMMYYYY();
    let games = count[date] ?? 0;
    games++;
    count[date] = games;
    let result = { top, count };
    this.localStorageManager.save(result);
    this.store.dispatch(
      setStoreData({
        saveStorageData: null,
      })
    );
  }

  async load(source, data, headers, processId, dataId) {
    let JWT;

    this.isLoading = true;
    try {
      JWT = window.getJWT();
    } catch (error) {
      console.log("window.getJWT isn't set");
    }

    let response;
    try {
      response = await axios({
        ...source,
        data,
        headers: { ...headers, JWT },
      });
    } catch (e) {
      console.error("Request Error:", e.message, e.response);
      this.store.dispatch(
        setStoreData({
          showError: true,
          errorText: LOAD_ERROR,
          [processId]: false,
        })
      );
      this.isLoading = false;
      return;
    }

    if (response?.data) {
      if (response.data.result === "OK") {
        if (response?.data?.JWT) {
          try {
            window.saveJWT(response?.data?.JWT);
          } catch (error) {
            console.log("window.saveJWT isn't set");
          }
        } else {
          console.log("JWT isn't transferred");
        }
        this.store.dispatch(
          setStoreData({ [dataId]: response.data.data, [processId]: false })
        );
      } else {
        console.log("Error", response.data.errorText);
        this.store.dispatch(
          setStoreData({
            showError: true,
            errorText: response.data.errorText,
            [processId]: false,
          })
        );
      }
    } else {
      console.log("noData");
    }
    this.isLoading = false;
  }

  render() {
    return null;
  }
}
export default DataManager;
