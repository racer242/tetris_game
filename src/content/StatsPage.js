import React, { Component } from "react";
import { setStoreData } from "../actions/appActions";
import Input from "./Input";
import { callLater } from "../core/helpers";

class StatsPage extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    if (this.store) {
      this.state = {
        ...this.store.getState(),
      };
    } else this.state = {};
  }

  componentDidMount() {
    if (!this.mounted) {
      this.input = new Input();
      this.input.start();
      this.input.registerAction(
        this.state.gameData.nextScreenKey,
        this.state.gameData.nextScreenButton,
        () => {
          window.location.reload();
        }
      );

      this.unsubscribe = this.store.subscribe(() => {
        this.onStoreChange();
      });

      callLater(() => {
        this.store.dispatch(
          setStoreData({
            loadStorageData: true,
          })
        );
      });
    }
    this.mounted = true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted = false;
    this.destroy();
  }

  onStoreChange() {
    if (this.mounted) {
      let state = this.store.getState();
      this.setState({
        ...this.state,
        ...state,
      });
    }
  }

  destroy() {}

  updateState() {
    this.setState({
      ...this.state,
    });
  }

  render() {
    let children = [];
    children.push(this.props.children);

    let topTen = this.state.storageData?.top ?? [];
    let count = this.state.storageData?.count ?? {};
    return (
      <div className="statsPage">
        <div className="pageBg"></div>
        <div className="contentBox" style={{ gap: 40 }}>
          <div className="plate appear-top">
            <div className="row">
              <div className="column">
                <h4>Топ 10</h4>
              </div>
              <div className="column" style={{ gap: 0 }}>
                {topTen.map((v, i) => (
                  <div key={`top${i}`} className="row">
                    <div className="column" style={{ padding: 0 }}>
                      <p className="small">{v.t}</p>
                    </div>
                    <div className="column" style={{ padding: 0 }}>
                      <p className="small">{v.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="plate appear-top delay500ms">
            <div className="row">
              <div className="column">
                <h4>Игры</h4>
              </div>
              <div className="column" style={{ width: "100%" }}>
                <p
                  className="small"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {Object.entries(count).map(([key, value]) => (
                    <span key={`cnt${key}`} style={{ paddingRight: 20 }}>
                      {key}: {value}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsPage;
