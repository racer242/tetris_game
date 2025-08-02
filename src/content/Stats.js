class Stats {
  constructor(stats_changeHandler) {
    this.level = 1;
    this.time = 0;
    this.apm = 0;
    this.lines = 0;
    this.score = 0;
    this.puzzles = 0;
    this.actions = 0;

    this.stats_changeHandler = stats_changeHandler;

    this.timerId = null;

    this.incTime = this.incTime.bind(this);
  }

  /**
   * Start counting statistics, reset stats, turn on the timer
   */
  start() {
    this.reset();
    this.timerId = setInterval(this.incTime, 1000);
  }

  /**
   * Stop counting statistics, turn off the timer
   */
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  /**
   * Reset statistics - update html
   */
  reset() {
    this.stop();
    this.level = 1;
    this.time = 0;
    this.apm = 0;
    this.lines = 0;
    this.score = 0;
    this.puzzles = 0;
    this.actions = 0;

    this.stats_changeHandler(this);
  }

  /**
   * Increase time, update apm - update html
   * This func is called by setInterval()
   */
  incTime() {
    this.time++;
    this.apm = parseInt((this.actions / this.time) * 60);
    this.stats_changeHandler(this);
  }

  /**
   * Set score - update html
   */
  setScore(i) {
    this.score = i;
    this.stats_changeHandler(this);
    // console.log("score changed:", this.score);
  }

  /**
   * Set level - update html
   */
  setLevel(i) {
    this.level = i;
    this.stats_changeHandler(this);
    // console.log("level changed:", this.level);
  }

  /**
   * Set lines - update html
   */
  setLines(i) {
    this.lines = i;
    this.stats_changeHandler(this);
    // console.log("lines filled:", this.lines);
  }

  /**
   * Number of puzzles created on current level
   */
  setPuzzles(i) {
    this.puzzles = i;
    // console.log("puzzles created:", this.puzzles);
  }

  /**
   */
  setActions(i) {
    this.actions = i;
  }

  /**
   */
  getScore() {
    return this.score;
  }

  /**
   */
  getLevel() {
    return this.level;
  }

  /**
   */
  getLines() {
    return this.lines;
  }

  /**
   * Number of puzzles created on current level
   */
  getPuzzles() {
    return this.puzzles;
  }

  /**
   */
  getActions() {
    return this.actions;
  }
}

export default Stats;
