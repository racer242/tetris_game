import { isMobile, isLocal } from "../core/helpers";

const settings = {
  assetsUrl: ".",
  localStoreName: "appState_120225",

  isMobile: isMobile(),
  isLocal: isLocal(),

  desktopBounds: {
    width: 1080,
    height: 1920,
  },
  mobileBounds: {
    width: 1080,
    height: 1920,
  },
  switchToMobileWidth: 720,
  currentPage: "main",
  particlesCount: 30,
};

export default settings;
