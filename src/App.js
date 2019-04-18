import React, { Component } from 'react';

import CounterClass from './Counter-Class';

import CounterHooks from './Counter-Hooks';

import HackerNews from './Hacker-News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome To Hooks</h2>
        <CounterClass />
        <CounterHooks />
        <HackerNews />
      </div>
    );
  }
}

export default App;
