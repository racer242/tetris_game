import React, { Component } from "react";
import Game1Page from "../content/Game1Page";
import Main1Page from "../content/Main1Page";
import TestPad from "../content/TestPad";
import Animate from "../content/Animate";
import SoundControl from "../components/SoundControl";
import StatsPage from "../content/StatsPage";

class PageStack extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    if (this.store) {
      this.state = {
        ...this.store.getState(),
      };
    } else this.state = { currentPage: "main" };
    this.soundControl = new SoundControl({});
  }

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
    this.soundControl.globalStop();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  onStoreChange() {
    if (this.mounted) {
      let state = this.store.getState();
      this.setState({
        ...this.state,
        ...state,
      });
      this.soundControl.setParams(
        state?.gameData?.sound,
        state?.gameData?.soundParameters
      );
    }
  }

  render() {
    let animation =
      this.state.gameData?.animation &&
      ((this.state.currentPage === "main" &&
        this.state.gameData?.animationOnMainScreen) ||
        (this.state.currentPage === "game" &&
          this.state.gameData?.animationOnGameScreen));

    return (
      <div className="pageContainer">
        {!animation && <div className="pageBg"></div>}
        {!animation && <div className="logo"></div>}

        {this.state.gameData?.animation && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: animation ? "block" : "none",
            }}
          >
            <div className="animate">
              <Animate></Animate>
            </div>
          </div>
        )}

        {this.state.currentPage === "main" && this.state.gameIndex == 1 && (
          <Main1Page
            bounds={this.props.bounds}
            store={this.store}
            soundControl={this.soundControl}
          />
        )}

        {this.state.currentPage === "test-pad" && (
          <TestPad bounds={this.props.bounds} store={this.store} />
        )}

        {this.state.currentPage === "stats" && (
          <StatsPage bounds={this.props.bounds} store={this.store} />
        )}

        {this.state.currentPage === "empty" && <div />}

        {this.state.currentPage === "game" && this.state.gameIndex == 1 && (
          <Game1Page
            bounds={this.props.bounds}
            store={this.store}
            soundControl={this.soundControl}
          />
        )}
      </div>
    );
  }
}

export default PageStack;
