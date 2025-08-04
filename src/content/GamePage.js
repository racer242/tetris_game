import React, { Component } from "react";

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    if (this.store) {
      this.state = {
        ...this.store.getState(),
      };
    } else this.state = {};

    this.soundControl = props.soundControl;

    this.ref = React.createRef();
    this.state = {
      ...this.state,
    };
  }

  componentDidMount() {
    if (!this.mounted) {
      this.unsubscribe = this.store.subscribe(() => {
        this.onStoreChange();
      });
      this.startGame();
    }
    this.mounted = true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted = false;
    this.destroy();
  }

  destroy() {
    this.input.destroy();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  onStoreChange() {
    if (this.mounted) {
      let state = this.store.getState();
      this.setState({
        ...this.state,
        ...state,
      });
    }
  }

  startGame() {
    if (!this.started) {
      this.started = true;
      this.doStart();
    }
  }

  stopGame() {
    this.started = false;
  }

  doStart() {}

  render() {
    let children = [];
    children.push(this.props.children);

    return (
      <div className="gamePage" ref={this.ref}>
        {children}
      </div>
    );
  }
}

export default GamePage;
