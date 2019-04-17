import React, { Component } from 'react';

import CounterClass from './Counter-Class';

import CounterHooks from './Counter-Hooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome To Hooks</h2>
        <CounterClass />
        <CounterHooks />
      </div>
    );
  }
}

export default App;
