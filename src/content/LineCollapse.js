class LineCollapse {
  constructor(n, delay, endHandler) {
    this.n = n;
    this.endHandler = endHandler;
    console.log("??????????????", this.n);
    this.endTimeout = setTimeout(() => {
      console.log("!!!!!!!!!!!!!!!!!!", this.n);

      this.endHandler(this.n);
    }, delay);
  }

  destroy() {
    clearTimeout(this.endTimeout);
  }
}

export default LineCollapse;
