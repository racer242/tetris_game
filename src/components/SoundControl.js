import { Howl, Howler } from "howler";

const sources = {
  clear: [require("../sounds/game1/clear/1.mp3")],
  countdown: [require("../sounds/game1/countdown/1.mp3")],
  down: [require("../sounds/game1/down/1.mp3")],
  gameover: [require("../sounds/game1/gameover/1.mp3")],
  move: [require("../sounds/game1/move/1.mp3")],
  music: [require("../sounds/game1/music/1.mp3")],
  pause: [require("../sounds/game1/pause/1.mp3")],
  place: [require("../sounds/game1/place/1.mp3")],
  rotate: [require("../sounds/game1/rotate/1.mp3")],
  title: [require("../sounds/game1/title/1.mp3")],
};

const settings = {
  clear: {},
  countdown: {},
  down: {},
  gameover: {},
  move: {},
  music: { loop: true },
  pause: {},
  place: {},
  rotate: {},
  title: { loop: true },
};

class SoundControl {
  constructor(props) {
    this.props = props ?? {};

    this.instances = {};
    for (let key in sources) {
      let sound = {
        sources: sources[key],
        params: {
          autoplay: false,
          ...(settings[key] ?? {}),
          ...(this.props[key] ?? {}),
        },
      };
      let variants = [];
      for (let i = 0; i < sound.sources.length; i++) {
        let src = sound.sources[i];
        let howl = new Howl({
          src,
          ...sound.params,
        });
        variants.push(howl);
      }
      this.instances[key] = variants;
    }

    this.uid = Math.random();
  }

  setParams(sounds, params) {
    if (sounds)
      for (const key in this.instances) {
        let variants = this.instances[key];
        for (let i = 0; i < variants.length; i++) {
          let variant = variants[i];
          let param = sounds[key];
          if (param) {
            if (param.volume) variant.volume(param.volume);
            if (param.loop) variant.volume(param.loop);
          }
        }
      }
    if (params) {
      if (params.volume) {
        Howler.volume(params.volume);
      }
    }
  }

  play(id) {
    let instance = this.instances[id];
    if (!instance) return;
    let variant = instance[Math.floor(instance.length * Math.random())];
    variant.play();
  }

  globalStop() {
    for (const key in this.instances) {
      let variants = this.instances[key];
      for (let i = 0; i < variants.length; i++) {
        let variant = variants[i];
        variant.stop();
      }
    }
    Howler.stop();
  }

  setGlobalVolume(volume) {
    Howler.volume(volume);
  }
}

export default SoundControl;
