import React, {Component} from 'react';

export default class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    const inc = this.props.increment || 1;
    this.setState({
      counter: this.state.counter + inc
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const inc = this.props.increment || 1;
    return (
      <h1>
        Counter ({inc}): {this.state.counter}
      </h1>
    );
  }
}
