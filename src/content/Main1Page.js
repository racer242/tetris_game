import React, { Component } from "react";
import { setStoreData } from "../actions/appActions";
import Input from "./Input";

// import { ReactComponent as MINUS } from "../images/game1/minus.svg";

class Main1Page extends Component {
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
          this.store.dispatch(
            setStoreData({
              currentPage: "game",
            })
          );
          this.destroy();
        }
      );
      this.input.registerAction(
        this.state.gameData.testScreenKey,
        this.state.gameData.testScreenButton,
        () => {
          this.store.dispatch(
            setStoreData({
              currentPage: "test-pad",
            })
          );
          this.destroy();
        }
      );
    }
    this.mounted = true;
  }

  destroy() {
    this.input.destroy();
  }

  render() {
    let children = [];
    children.push(this.props.children);

    return (
      <div className="mainPage g1">
        <div className="pageBg"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          width="1080"
          height="1920"
          className="videoBox"
        >
          <source src={this.state.game1.videoSource.src} type="video/mp4" />
        </video>
        <div className="head appear-zoom">
          <h2>Градостроительный комплекс Москвы</h2>
        </div>
        <div className="contentBox">
          <div className="plate appear-top delay500ms">
            <h1>Начать игру</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Main1Page;
