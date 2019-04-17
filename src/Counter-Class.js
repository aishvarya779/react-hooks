import React, { Component } from 'react';

class CounterClass extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  // if below is commented title wil not update
  //   componentDidUpdate() {
  //     document.title = `Clicked ${this.state.count} times`;
  //   }
  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <button className="btn btn-raised btn-primary" onClick={this.increment}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default CounterClass;
