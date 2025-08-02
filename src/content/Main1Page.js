import React, { Component } from "react";
import { setStoreData } from "../actions/appActions";
import Input from "./Input";

class Main1Page extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    if (this.store) {
      this.state = {
        ...this.store.getState(),
      };
    } else this.state = {};
    this.soundControl = props.soundControl;
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
          this.soundControl.globalStop();
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
      this.soundControl.play("title");
    }
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    this.destroy();
  }

  destroy() {
    this.input.destroy();
    this.soundControl.globalStop();
  }

  render() {
    let children = [];
    children.push(this.props.children);
    return (
      <div className="mainPage g1">
        {this.state.gameData?.videoIntro?.show && (
          <video
            autoPlay
            loop
            muted={this.state.gameData?.videoIntro?.muted ?? false}
            playsInline
            className="videoIntro"
          >
            <source src={this.state.gameData?.videoIntro?.src} />
          </video>
        )}

        {!this.state.gameData?.videoIntro?.show && (
          <>
            {this.state.gameData?.videoCover?.show && (
              <div
                className="contentBox"
                style={{
                  ...(this.state.gameData.videoCover.blur
                    ? {
                        filter:
                          "blur(" + this.state.gameData.videoCover.blur + "px)",
                      }
                    : {}),
                  opacity: this.state.gameData.videoCover.opacity ?? 1,
                }}
              >
                <div className="frame"></div>
                <video autoPlay loop muted playsInline className="videoBox">
                  <source
                    src={this.state.game1.videoSource.src}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
            <div className="message-plate">
              <h1>Начать игру</h1>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Main1Page;
