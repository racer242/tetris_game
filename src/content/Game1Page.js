import React from "react";
import "../css/game1.css";
import GamePage from "./GamePage";
import Tetris from "./Tetris";
import Input from "./Input";
import { setStoreData } from "../actions/appActions";
import LineCollapse from "./LineCollapse";
import { callLater } from "../core/helpers";

class Game1Page extends GamePage {
  constructor(props) {
    super(props);

    this.stats = {
      score: 0,
      nextPuzzleType: -1,
      isPaused: false,
      gameOver: false,
      isStarting: true,
      collapses: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    };

    this.state = {
      ...this.state,
      stats: this.stats,
    };
    this.gameAreaRef = React.createRef();

    this.nextPuzzle_updateHandler = this.nextPuzzle_updateHandler.bind(this);
    this.placeHandler = this.placeHandler.bind(this);
    this.score_updateHandler = this.score_updateHandler.bind(this);
    this.gameOverHandler = this.gameOverHandler.bind(this);
    this.fullLines_clearedHandler = this.fullLines_clearedHandler.bind(this);
    this.lineCollapse_endHandler = this.lineCollapse_endHandler.bind(this);
    this.input = new Input({
      startDelay: this.state.gameData.startDelay,
      stepDelay: this.state.gameData.stepDelay,
    });
  }

  destroy() {
    this.stopGame();
    this.input.destroy();
    clearTimeout(this.restartTimeout);
    clearTimeout(this.startTimeout);
    clearTimeout(this.startHideTimeout);
    clearTimeout(this.startCountdownTimeout);

    this.tetris.reset();
  }

  updateState() {
    this.setState({ ...this.state, stats: this.stats });
  }

  doStart() {
    this.input.start();
    this.input.registerAction(
      this.state.gameData.leftKey,
      this.state.gameData.leftButton,
      () => {
        if (this.stats.gameOver || this.stats.isStarting || this.stats.isPaused)
          return;
        if (this.tetris.left()) this.soundControl.play("move");
      },
      true
    );
    this.input.registerAction(
      this.state.gameData.rightKey,
      this.state.gameData.rightButton,
      () => {
        if (this.stats.gameOver || this.stats.isStarting || this.stats.isPaused)
          return;
        if (this.tetris.right()) this.soundControl.play("move");
      },
      true
    );
    this.input.registerAction(
      this.state.gameData.rotateKey,
      this.state.gameData.rotateButton,
      () => {
        if (this.stats.gameOver || this.stats.isStarting || this.stats.isPaused)
          return;
        if (this.tetris.up()) this.soundControl.play("rotate");
      }
    );
    this.input.registerAction(
      this.state.gameData.downKey,
      this.state.gameData.downButton,
      () => {
        if (this.stats.gameOver || this.stats.isStarting || this.stats.isPaused)
          return;
        if (this.tetris.down()) this.soundControl.play("down");
      },
      true
    );
    this.input.registerAction(
      this.state.gameData.dropKey,
      this.state.gameData.dropButton,
      () => {
        if (this.stats.gameOver || this.stats.isStarting || this.stats.isPaused)
          return;
        this.tetris.space();
        this.soundControl.play("down");
      }
    );
    this.input.registerAction(
      this.state.gameData.resetKey,
      this.state.gameData.resetButton,
      () => {
        if (this.stats.isStarting || this.stats.isPaused) return;
        this.soundControl.globalStop();
        if (this.stats.gameOver) {
          this.store.dispatch(
            setStoreData({
              currentPage: "main",
              reset: true,
            })
          );
          this.destroy();
          return;
        }

        if (this.stats.isStarting || this.stats.isPaused) return;

        this.start();
      }
    );
    this.input.registerAction(
      this.state.gameData.pauseKey,
      this.state.gameData.pauseButton,
      () => {
        if (this.stats.gameOver || this.stats.isStarting) return;
        if (this.stats.isPaused) {
          this.tetris.resume();
          this.stats = { ...this.stats, isPaused: false };
          this.updateState();
          this.soundControl.play("music");
        } else {
          this.tetris.pause();
          this.stats = { ...this.stats, isPaused: true };
          this.updateState();
          this.soundControl.globalStop();
        }
        this.soundControl.play("pause");
      }
    );

    this.tetris = new Tetris(
      this.gameAreaRef.current,
      this.nextPuzzle_updateHandler,
      this.score_updateHandler,
      this.fullLines_clearedHandler,
      this.gameOverHandler,
      this.placeHandler,
      {
        score: this.state.gameData.score,
        speed: this.state.gameData.speed,
        level: this.state.gameData.level,
      }
    );

    this.start();
    return true;
  }

  start() {
    this.startTimeout = setTimeout(() => {
      this.stats = { ...this.stats, isStarting: true };
      this.updateState();

      this.soundControl.play("countdown");

      this.startHideTimeout = setTimeout(() => {
        this.stats = {
          ...this.stats,
          score: 0,
          nextPuzzleType: -1,
          isPaused: false,
          gameOver: false,
          collapses: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
        };
        this.updateState();
        this.tetris.reset();
      }, 1000);
      this.startCountdownTimeout = setTimeout(() => {
        this.tetris.start();
        this.soundControl.play("music");
        this.stats = { ...this.stats, isStarting: false };
        this.updateState();
      }, 3000);
    }, 100);
  }

  nextPuzzle_updateHandler(nextPuzzleType) {
    this.stats = { ...this.stats, nextPuzzleType };
    this.updateState();
  }

  placeHandler() {
    this.soundControl.play("place");
  }

  score_updateHandler(score) {
    this.stats = { ...this.stats, score };
    this.updateState();
  }

  lineCollapse_endHandler(n) {
    let collapses = this.state.stats.collapses;
    collapses[n] = null;
    this.stats = { ...this.stats, collapses };
    this.updateState();
  }

  fullLines_clearedHandler(lines) {
    let collapses = this.state.stats.collapses;
    for (let i = 0; i < lines.length; i++) {
      let n = lines[i];
      collapses[n] = new LineCollapse(n, 1000, this.lineCollapse_endHandler);
    }
    this.stats = { ...this.stats, collapses };
    this.updateState();
    this.soundControl.play("clear");
  }

  gameOverHandler(gameOver) {
    this.stats = { ...this.stats, gameOver };
    this.updateState();

    if (gameOver) {
      this.soundControl.globalStop();
      this.soundControl.play("gameover");

      callLater(() => {
        this.store.dispatch(
          setStoreData({
            saveStorageData: { score: this.state.stats.score },
          })
        );
      });

      this.restartTimeout = setTimeout(() => {
        this.store.dispatch(
          setStoreData({
            currentPage: "main",
            reset: true,
          })
        );
        this.destroy();
      }, this.state.gameData.restartTimeout);
    }
  }

  render() {
    return (
      <div className="gamePage g1">
        <div className="gameScene">
          <div
            className="game-container"
            style={{ opacity: this.state.stats.gameOver ? 0 : 1 }}
          >
            <div className="frame"></div>
            <div className="game-area-bg">
              <div
                className="game-area-columns"
                style={{ opacity: this.state.stats.isStarting ? 0 : 1 }}
              >
                <div
                  className="game-area-column lights"
                  style={{ left: 0 * 100, animationDelay: "0ms" }}
                ></div>
                <div
                  className="game-area-column lights"
                  style={{ left: 75 * 2, animationDelay: "1000ms" }}
                ></div>
                <div
                  className="game-area-column lights"
                  style={{ left: 75 * 4, animationDelay: "2000ms" }}
                ></div>
                <div
                  className="game-area-column lights"
                  style={{ left: 75 * 6, animationDelay: "3000ms" }}
                ></div>
                <div
                  className="game-area-column lights"
                  style={{ left: 75 * 8, animationDelay: "4000ms" }}
                ></div>
              </div>
            </div>
            <div
              className="game-area"
              ref={this.gameAreaRef}
              style={{ opacity: this.state.stats.isStarting ? 0 : 1 }}
            ></div>

            <div className="clear-area">
              {this.state.stats.collapses.reduce((a, v, i) => {
                if (v)
                  a.push(
                    <div
                      key={`clear${i}`}
                      className="clear-line"
                      style={{ top: i * 75 }}
                    >
                      <div className="clear-line-bg explode"></div>
                      <div className="clear-line-glow collapse"></div>
                    </div>
                  );
                return a;
              }, [])}
            </div>

            <div
              className="top-area"
              style={{ opacity: this.state.stats.isStarting ? 0 : 1 }}
            >
              <div className="score-area">
                <h3>{this.state.stats.score}</h3>
              </div>
              {this.state.stats.nextPuzzleType >= 0 && (
                <>
                  <div className="next-title-area">
                    <p>ДАЛЬШЕ:</p>
                  </div>
                  <div
                    className="next-area"
                    style={{
                      backgroundImage: `url(${
                        this.state.game1.puzzleSources[
                          this.state.stats.nextPuzzleType
                        ]
                      })`,
                    }}
                  ></div>
                </>
              )}
            </div>
          </div>

          {this.state.stats.isPaused && (
            <div className="pause-plate">
              <h1>Пауза</h1>
            </div>
          )}

          <div
            className="finish-area"
            style={{ opacity: this.state.stats.gameOver ? 1 : 0 }}
          >
            <h2>ИТОГОВЫЙ СЧЕТ:</h2>
            <div
              className="final-score"
              style={{
                fontSize:
                  this.state.stats.score < 1000
                    ? 320
                    : this.state.stats.score < 10000
                    ? 240
                    : this.state.stats.score < 100000
                    ? 200
                    : this.state.stats.score < 1000000
                    ? 165
                    : 120,
              }}
            >
              {this.state.stats.score}
            </div>
          </div>
        </div>
        {this.state.stats.isStarting && (
          <>
            <div
              className="start-countdown-area appear-countdown-1"
              style={{ animationDelay: "0ms" }}
            >
              <div className="start-countdown">3...</div>
            </div>
            <div
              className="start-countdown-area appear-countdown-1"
              style={{ animationDelay: "1000ms" }}
            >
              <div className="start-countdown">2...</div>
            </div>
            <div
              className="start-countdown-area appear-countdown-1"
              style={{ animationDelay: "2000ms" }}
            >
              <div className="start-countdown">1...</div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Game1Page;
