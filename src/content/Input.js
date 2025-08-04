import gameControl, { GCGamepad } from "esm-gamecontroller.js";
import {
  clearGamepadEvents,
  registerGamepadEvents,
} from "../utils/gamepadTools";

class Input {
  constructor(props) {
    this.startDelay = props?.startDelay ?? 100;
    this.stepDelay = props?.stepDelay ?? 20;

    this.keyHandler = this.keyHandler.bind(this);
    this.keys = {};
    this.buttons = {};
    this.keyHandler = this.keyHandler.bind(this);

    this.gamepad = null;
    this.gamepadConnectedHandler = this.gamepadConnectedHandler.bind(this);
    this.gamepadDisconnectedHandler =
      this.gamepadDisconnectedHandler.bind(this);
    this.gamepadEventHandler = this.gamepadEventHandler.bind(this);
  }

  start() {
    window.addEventListener("keydown", this.keyHandler);

    // console.log("init isReady", gameControl.isReady);
    // console.log("init getGamepads", gameControl.getGamepads());
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
  }

  destroy() {
    window.removeEventListener("keydown", this.keyHandler);
    gameControl.off("connect");
    gameControl.off("disconnect");
    if (this.gamepad) clearGamepadEvents(this.gamepad);
    this.gamepad = null;
  }

  registerKey(key, action) {
    this.keys[key] = action;
  }

  registerButton(button, action, cycling) {
    this.buttons[button] = { action, start: 0, step: 0, cycling };
  }

  registerAction(key, button, action, cycling) {
    this.keys[key] = action;
    if (button) this.buttons[button] = { action, start: 0, step: 0, cycling };
  }

  keyHandler(event) {
    if (this.keys[event.code]) this.keys[event.code]();
  }

  gamepadConnectedHandler(gamepad) {
    console.log("connected isReady", gameControl.isReady);
    console.log("connected getGamepads", gameControl.getGamepads());
    console.log("connected gamepad", gamepad);
    registerGamepadEvents(gamepad, this.gamepadEventHandler);
    this.gamepad = gamepad;
  }

  gamepadDisconnectedHandler(gamepad) {
    console.log("disconnected isReady", gameControl.isReady);
    console.log("disconnected getGamepads", gameControl.getGamepads());
    console.log("disconnected gamepad", gamepad);
    this.gamepad = null;
  }

  gamepadEventHandler(button, event) {
    if (this.buttons[button])
      switch (event) {
        case "pressed":
          if (this.buttons[button].cycling)
            if (this.buttons[button].start > this.startDelay) {
              if (this.buttons[button].step > this.stepDelay) {
                if (this.buttons[button].action) this.buttons[button].action();
                this.buttons[button].step = 0;
              } else {
                this.buttons[button].step++;
              }
            } else {
              this.buttons[button].start++;
            }
          break;

        case "down":
          this.buttons[button].start = 0;
          this.buttons[button].step = 0;
          if (this.buttons[button].action) this.buttons[button].action();
          break;

        case "up":
          this.buttons[button].start = 0;
          this.buttons[button].step = 0;
          break;

        default:
          break;
      }
  }
}

export default Input;
