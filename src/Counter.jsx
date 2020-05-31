import React, { Component } from 'react';

import { ThemeContext } from './App';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  setCount(count) {
    this.setState((prev) => ({ count: prev.count + count }));
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(color) => (
          <div>
            <button style={color} onClick={() => this.setCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={color} onClick={() => this.setCount(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
