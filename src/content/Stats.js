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

    // this.el = {
    //   level: document.getElementById("tetris-stats-level"),
    //   time: document.getElementById("tetris-stats-time"),
    //   apm: document.getElementById("tetris-stats-apm"),
    //   lines: document.getElementById("tetris-stats-lines"),
    //   score: document.getElementById("tetris-stats-score"),
    // };

    this.timerId = null;
    // var self = this;

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

    // this.el.level.innerHTML = this.level;
    // this.el.time.innerHTML = this.time;
    // this.el.apm.innerHTML = this.apm;
    // this.el.lines.innerHTML = this.lines;
    // this.el.score.innerHTML = this.score;

    this.stats_changeHandler(this);
  }

  /**
   * Increase time, update apm - update html
   * This func is called by setInterval()
   */
  incTime() {
    this.time++;
    // self.el.time.innerHTML = self.time;
    this.apm = parseInt((this.actions / this.time) * 60);
    // self.el.apm.innerHTML = self.apm;
    this.stats_changeHandler(this);
  }

  /**
   * Set score - update html
   */
  setScore(i) {
    this.score = i;
    // this.el.score.innerHTML = this.score;
    this.stats_changeHandler(this);
  }

  /**
   * Set level - update html
   */
  setLevel(i) {
    this.level = i;
    // this.el.level.innerHTML = this.level;
    this.stats_changeHandler(this);
  }

  /**
   * Set lines - update html
   */
  setLines(i) {
    this.lines = i;
    // this.el.lines.innerHTML = this.lines;
    this.stats_changeHandler(this);
  }

  /**
   * Number of puzzles created on current level
   */
  setPuzzles(i) {
    this.puzzles = i;
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
