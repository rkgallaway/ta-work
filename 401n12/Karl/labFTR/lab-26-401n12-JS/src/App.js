// We never have to 'use strict' in frontend any more
import React from 'react'; // same as const React = require('react');
import Header from './Header';
import Faker from 'faker';
import cowsay from 'cowsay-browser';

export default class App extends React.Component{

  constructor(props) {
    // everything we add as an attribute in JSX will come here as a value in the props object
    super(props); // super is React.Component's constructor
    this.state = {};
    this.state.content = ' ';
    this.state.counter = 0;
  }

  // We have to use an arrow function for React. Also setState is an async function.
  clickButton = () => {
    let fakeCon = Faker.fake("{{hacker.phrase}}");
    this.setState((previousState) => {
      return {
        counter: previousState.counter + 1,
        content: fakeCon,
      };
    });
  };

  handleCounterChange = (event) => {
    // this saves the value in a closure
    const value = event.target.value;
    this.setState(() => {
      return {
        counter: event.target.value,
      };
    });
  };

  render() {
    // 04/25 need to change this so it tells the pages to print the state.content onClick
    return(<main>
          <Header/>
          <p>Counter: {this.state.counter}</p>
          <button onClick={this.clickButton}>Click Me!</button>
          <pre>
            {
            cowsay.say({
              text:`${this.state.content}`,
              e: '^^',
              T: ' U'
            })
          }
          </pre>
        </main>
    );
  };
}

// export default App; // same as module.exports = App;