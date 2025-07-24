import { isMobile, isLocal } from "../core/helpers";

const Game1Settings = {
  objectBounds: {
    width: 100,
    height: 100,
  },

  videoSource: {
    src: require("../videos/cover.mp4"),
  },

  puzzleSources: [
    require("../images/game1/puzzle0.png"),
    require("../images/game1/puzzle1.png"),
    require("../images/game1/puzzle2.png"),
    require("../images/game1/puzzle3.png"),
    require("../images/game1/puzzle4.png"),
    require("../images/game1/puzzle5.png"),
    require("../images/game1/puzzle6.png"),
  ],
};

export default Game1Settings;
