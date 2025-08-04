import React, { Component } from "react";
import gameControl, { GCGamepad } from "esm-gamecontroller.js";
import { registerGamepadEvents } from "../utils/gamepadTools";

class TestPad extends Component {
  constructor(props) {
    super(props);

    this.gamepadState = {
      connected: false,
      pressed: {},
      down: "",
      up: "",
    };

    this.store = this.props.store;
    if (this.store) {
      this.state = {
        ...this.store.getState(),
        gamepadState: this.gamepadState,
      };
    } else this.state = {};

    this.gamepadConnectedHandler = this.gamepadConnectedHandler.bind(this);
    this.gamepadDisconnectedHandler =
      this.gamepadDisconnectedHandler.bind(this);
    this.gamepadEventHandler = this.gamepadEventHandler.bind(this);
  }

  componentDidMount() {
    if (!this.mounted) {
      console.log("init gamepads", gameControl.gamepads);
      console.log("init getGamepads", gameControl.getGamepads());
      console.log("init isReady", gameControl.isReady);

      if (gameControl.isReady) {
        let gamepad = null;
        let gamepadsObj = gameControl.getGamepads();
        if (gamepadsObj) {
          for (const key in gamepadsObj) {
            if (gamepadsObj[key]) {
              gamepad = gamepadsObj[key];
              break;
            }
          }
        }
        if (gamepad) this.gamepadConnectedHandler(gamepad);
      }

      gameControl.off("connect");
      gameControl.off("disconnect");
      gameControl.on("connect", this.gamepadConnectedHandler);
      gameControl.on("disconnect", this.gamepadDisconnectedHandler);

      this.unsubscribe = this.store.subscribe(() => {
        this.onStoreChange();
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
      gamepadState: this.gamepadState,
    });
  }

  gamepadConnectedHandler(gamepad) {
    console.log("connected gamepads", gameControl.gamepads);
    console.log("connected getGamepads", gameControl.getGamepads());
    console.log("connected isReady", gameControl.isReady);
    console.log("connected getGamepad", gameControl.getGamepad(1));
    console.log("connected gamepad", gamepad);

    gamepad.vibrate();

    this.gamepadState = {
      ...this.gamepadState,
      connected: true,
    };
    this.updateState();
    registerGamepadEvents(gamepad, this.gamepadEventHandler);
  }

  gamepadDisconnectedHandler(gamepad) {
    console.log("disconnected gamepads", gameControl.gamepads);
    console.log("disconnected getGamepads", gameControl.getGamepads());
    console.log("disconnected isReady", gameControl.isReady);
    console.log("disconnected getGamepad", gameControl.getGamepad(1));
    console.log("disconnected gamepad", gamepad);

    this.gamepadState = {
      ...this.gamepadState,
      connected: true,
    };
    this.updateState();
  }

  gamepadEventHandler(button, event) {
    let pressed = this.gamepadState.pressed;
    let down = this.gamepadState.down;
    let up = this.gamepadState.up;

    switch (event) {
      case "pressed":
        pressed[button] = true;
        break;

      case "down":
        down = button;
        break;

      case "up":
        up = button;
        delete pressed[button];
        break;

      default:
        break;
    }

    this.gamepadState = {
      ...this.gamepadState,
      pressed,
      down,
      up,
    };

    this.updateState();
  }

  render() {
    let children = [];
    children.push(this.props.children);

    let pressedButtons = Object.keys(this.state.gamepadState.pressed).join(" ");

    let topTen = this.state.storageData?.top ?? [];
    let count = this.state.storageData?.count ?? {};
    return (
      <div className="testpad">
        <div className="pageBg"></div>
        <div className="contentBox" style={{ gap: 40 }}>
          <div className="plate appear-top">
            <div className="row">
              <div className="column">
                <h4>Тест геймпада</h4>
              </div>
              <div className="column">
                <p>
                  Состояние:{" "}
                  {this.state.gamepadState.connected ? "Подключен" : "Отключен"}
                </p>
                <p>Нажато: {pressedButtons}</p>
                <p>Нажали: {this.state.gamepadState.down}</p>
                <p>Отжали: {this.state.gamepadState.up}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestPad;
