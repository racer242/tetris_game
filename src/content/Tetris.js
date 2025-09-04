import Stats from "./Stats";
import Area from "./Area";
import Puzzle from "./Puzzle";

class Tetris {
  constructor(
    gameAreaContainer,
    nextPuzzle_updateHandler,
    score_updateHandler,
    fullLines_clearedHandler,
    gameOverHandler,
    placeHandler,
    params
  ) {
    this.puzzle = null;
    this.area = null;
    this.unit = 75; // unit = x pixels
    this.areaX = 10; // area width = x units
    this.areaY = 20; // area height = y units
    this.paused = false;
    this.params = params;

    this.speedParams = params?.speed ?? { base: 80, level: 700 };
    this.scoreParams = params?.score ?? { fullLine: 1000, moveDown: 5 };

    this.gameAreaContainer = gameAreaContainer;
    this.nextPuzzle_updateHandler = nextPuzzle_updateHandler;
    this.score_updateHandler = score_updateHandler;
    this.gameOverHandler = gameOverHandler;
    this.placeHandler = placeHandler;

    this.fullLines_clearedHandler = fullLines_clearedHandler;

    this.nextPuzzle_changeHandler = this.nextPuzzle_changeHandler.bind(this);
    this.stats_changeHandler = this.stats_changeHandler.bind(this);
  }

  nextPuzzle_changeHandler(type) {
    this.nextPuzzle_updateHandler(type);
  }

  stats_changeHandler(stats) {
    this.score_updateHandler(stats.score);
  }

  /**
   */
  start() {
    this.reset();
    this.stats = new Stats(this.stats_changeHandler);
    this.stats.start();
    this.area = new Area(
      this.unit,
      this.areaX,
      this.areaY,
      this.gameAreaContainer,
      this.fullLines_clearedHandler
    );
    this.puzzle = new Puzzle(
      this,
      this.area,
      this.nextPuzzle_changeHandler,
      this.placeHandler,
      this.params
    );
    if (this.puzzle.mayPlace()) {
      this.puzzle.place();
      this.gameOverHandler(false);
    } else {
      this.gameOver();
    }
  }

  /**
   */
  reset() {
    if (this.puzzle) {
      this.puzzle.destroy();
      this.puzzle = null;
    }
    if (this.area) {
      this.area.destroy();
      this.area = null;
    }
    if (this.stats) {
      this.stats.reset();
    }
    this.paused = false;
  }

  /**
   * Pause
   */
  pause() {
    if (this.puzzle == null) return false;

    if (!this.puzzle.isRunning()) {
      return false;
    }

    if (this.puzzle.fallDownID) clearTimeout(this.puzzle.fallDownID);
    clearTimeout(this.stats.timerId);
    this.paused = true;
    this.puzzle.running = false;
    return true;
  }

  /**
   * Pause / Resume.
   */
  resume() {
    if (this.puzzle == null) return;

    this.puzzle.running = true;
    this.puzzle.fallDownID = setTimeout(
      this.puzzle.fallDown,
      this.puzzle.speed
    );
    this.stats.timerId = setInterval(this.stats.incTime, 1000);
    this.paused = false;
  }

  /**
   * End game.
   * Stop stats, ...
   */
  gameOver() {
    this.stats.stop();
    this.puzzle.stop();
    this.gameOverHandler(true);
  }

  /**
   */
  up() {
    if (this.puzzle && this.puzzle.isRunning() && !this.puzzle.isStopped()) {
      if (this.puzzle.mayRotate()) {
        this.puzzle.rotate();
        this.stats.setActions(this.stats.getActions() + 1);
        return true;
      }
    }
  }

  /**
   */
  down() {
    if (this.puzzle && this.puzzle.isRunning() && !this.puzzle.isStopped()) {
      if (this.puzzle.mayMoveDown()) {
        // this.stats.setScore(this.stats.getScore() + 5 + this.stats.getLevel());
        this.stats.setScore(
          this.stats.getScore() +
            this.scoreParams.moveDown +
            this.stats.getLevel()
        );
        this.puzzle.moveDown();
        this.stats.setActions(this.stats.getActions() + 1);
        return true;
      }
    }
  }

  /**
   */
  left() {
    if (this.puzzle && this.puzzle.isRunning() && !this.puzzle.isStopped()) {
      if (this.puzzle.mayMoveLeft()) {
        this.puzzle.moveLeft();
        this.stats.setActions(this.stats.getActions() + 1);
        return true;
      }
    }
  }

  /**
   */
  right() {
    if (this.puzzle && this.puzzle.isRunning() && !this.puzzle.isStopped()) {
      if (this.puzzle.mayMoveRight()) {
        this.puzzle.moveRight();
        this.stats.setActions(this.stats.getActions() + 1);
        return true;
      }
    }
  }

  /**
   */
  space() {
    if (this.puzzle && this.puzzle.isRunning() && !this.puzzle.isStopped()) {
      this.puzzle.stop();
      this.puzzle.forceMoveDown();
    }
  }
}

export default Tetris;
