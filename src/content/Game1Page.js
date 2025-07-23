import React from "react";
import "../css/game1.css";
import GamePage from "./GamePage";
import Tetris from "./Tetris";
import Input from "./Input";
import { setStoreData } from "../actions/appActions";

class Game1Page extends GamePage {
  constructor(props) {
    super(props);

    this.stats = {
      score: 0,
      nextPuzzleType: -1,
      isPaused: false,
      gameOver: false,
    };

    this.state = {
      ...this.state,
      objects: [],
      bonuses: [],
      // gameDuration: this.state.game1.gameDuration,
      // stopDuration: this.state.game1.stopDuration,
      // stepDuration: this.state.game1.stepDuration,
      stats: this.stats,
      // score: 0,
      // nextPuzzleType: 0,
      // isPaused: false,
      // gameOver: false,
    };
    this.gameAreaRef = React.createRef();

    this.nextPuzzle_updateHandler = this.nextPuzzle_updateHandler.bind(this);
    this.score_updateHandler = this.score_updateHandler.bind(this);
    this.gameOverHandler = this.gameOverHandler.bind(this);

    this.input = new Input();
  }

  destroy() {
    this.stopGame();
    this.input.destroy();
    clearTimeout(this.restartTimeout);
    this.tetris.reset();
  }

  updateState() {
    this.setState({ ...this.state, stats: this.stats });
  }

  doStart() {
    console.log("START");

    this.input.start();
    this.input.registerAction(
      this.state.gameData.leftKey,
      this.state.gameData.leftButton,
      () => {
        this.tetris.left();
      }
    );
    this.input.registerAction(
      this.state.gameData.rightKey,
      this.state.gameData.rightButton,
      () => {
        this.tetris.right();
      }
    );
    this.input.registerAction(
      this.state.gameData.rotateKey,
      this.state.gameData.rotateButton,
      () => {
        this.tetris.up();
      }
    );
    this.input.registerAction(
      this.state.gameData.downKey,
      this.state.gameData.downButton,
      () => {
        this.tetris.down();
      }
    );
    this.input.registerAction(
      this.state.gameData.dropKey,
      this.state.gameData.dropButton,
      () => {
        this.tetris.space();
      }
    );
    this.input.registerAction(
      this.state.gameData.resetKey,
      this.state.gameData.resetButton,
      () => {
        if (this.stats.gameOver) {
          this.store.dispatch(
            setStoreData({
              currentPage: "main",
            })
          );
          this.destroy();
          return;
        }

        this.stats = {
          ...this.stats,
          score: 0,
          nextPuzzleType: -1,
          isPaused: false,
          gameOver: false,
        };
        this.updateState();
        this.tetris.start();
      }
    );
    this.input.registerAction(
      this.state.gameData.pauseKey,
      this.state.gameData.pauseButton,
      () => {
        if (!this.stats.gameOver)
          if (this.stats.isPaused) {
            this.tetris.resume();
            this.stats = { ...this.stats, isPaused: false };
            this.updateState();
          } else {
            this.tetris.pause();
            this.stats = { ...this.stats, isPaused: true };
            this.updateState();
          }
      }
    );

    this.tetris = new Tetris(
      this.gameAreaRef.current,
      this.nextPuzzle_updateHandler,
      this.score_updateHandler,
      this.gameOverHandler
    );

    this.tetris.start();
    return true;
  }

  nextPuzzle_updateHandler(nextPuzzleType) {
    this.stats = { ...this.stats, nextPuzzleType };
    this.updateState();
  }
  score_updateHandler(score) {
    this.stats = { ...this.stats, score };
    this.updateState();
  }
  gameOverHandler(gameOver) {
    this.stats = { ...this.stats, gameOver };
    this.updateState();

    if (gameOver) {
      this.restartTimeout = setTimeout(() => {
        this.store.dispatch(
          setStoreData({
            currentPage: "main",
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
          <div className="pageBg"></div>
          <div className="logo"></div>
          {!this.state.stats.gameOver && (
            <>
              <div className="frame"></div>
              <div className="game-area" ref={this.gameAreaRef}></div>

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
            </>
          )}
          {this.state.stats.isPaused && (
            <div className="pause-plate">
              <h1>Пауза</h1>
            </div>
          )}
          {this.state.stats.gameOver && (
            <div className="finish-area">
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
          )}
        </div>
      </div>
    );
  }
}

export default Game1Page;
