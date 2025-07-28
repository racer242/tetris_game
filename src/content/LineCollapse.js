class LineCollapse {
  constructor(n, delay, endHandler) {
    this.n = n;
    this.endHandler = endHandler;
    this.endTimeout = setTimeout(() => {
      this.endHandler(this.n);
    }, delay);
  }

  destroy() {
    clearTimeout(this.endTimeout);
  }
}

export default LineCollapse;
