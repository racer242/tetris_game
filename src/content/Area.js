class Area {
  /**
   * Area consists of blocks (2 dimensional board).
   * Block contains "0" (if empty) or Html Object.
   */
  constructor(unit, x, y, gameAreaContainer, fullLines_clearedHandler) {
    this.unit = unit;
    this.x = x;
    this.y = y;
    this.el = gameAreaContainer;

    this.board = [];

    this.fullLines_clearedHandler = fullLines_clearedHandler;

    // create 2-dimensional board
    for (var y = 0; y < this.y; y++) {
      this.board.push(new Array());
      for (var x = 0; x < this.x; x++) {
        this.board[y].push(0);
      }
    }
  }

  /**
   * Removing html elements from area.
   */
  destroy() {
    for (var y = 0; y < this.board.length; y++) {
      for (var x = 0; x < this.board[y].length; x++) {
        if (this.board[y][x]) {
          this.el.removeChild(this.board[y][x]);
          this.board[y][x] = 0;
        }
      }
    }
  }

  getFullLines() {
    let lines = [];
    for (var y = this.y - 1; y > 0; y--) {
      if (this.isLineFull(y)) {
        lines.push(y);
      }
    }
    return lines;
  }

  /**
   * Searching for full lines.
   * Must go from the bottom of area to the top.
   * Returns the number of lines removed - needed for Stats.score.
   */
  removeFullLines() {
    let fullLines = this.getFullLines();
    if (fullLines.length === 0) return;

    this.fullLines_clearedHandler(fullLines);

    var lines = 0;
    for (var y = this.y - 1; y > 0; y--) {
      if (this.isLineFull(y)) {
        this.removeLine(y);
        lines++;
        y++;
      }
    }
    return lines;
  }

  isLineFull(y) {
    for (var x = 0; x < this.x; x++) {
      if (!this.board[y][x]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Remove given line
   * Remove html objects
   * All lines that are above given line move down by 1 unit
   */
  removeLine(y) {
    for (var x = 0; x < this.x; x++) {
      this.el.removeChild(this.board[y][x]);
      this.board[y][x] = 0;
    }
    y--;
    for (; y > 0; y--) {
      for (var x = 0; x < this.x; x++) {
        if (this.board[y][x]) {
          var el = this.board[y][x];
          el.style.top = el.offsetTop + this.unit + "px";
          this.board[y + 1][x] = el;
          this.board[y][x] = 0;
        }
      }
    }
  }

  /**
   */
  getBlock(y, x) {
    if (y < 0) {
      return 0;
    }
    if (y < this.y && x < this.x) {
      return this.board[y][x];
    } else {
      throw "Area.getBlock(" + y + ", " + x + ") failed";
    }
  }

  /**
   * Add Html Element to the area.
   * Find (x,y) position using offsetTop and offsetLeft
   */
  addElement(el) {
    var x = parseInt(el.offsetLeft / this.unit);
    var y = parseInt(el.offsetTop / this.unit);
    if (y >= 0 && y < this.y && x >= 0 && x < this.x) {
      this.board[y][x] = el;
    } else {
      // not always an error ..
    }
  }
}

export default Area;
