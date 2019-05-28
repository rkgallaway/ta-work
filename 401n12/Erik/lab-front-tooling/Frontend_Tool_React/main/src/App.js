import React from 'react';
import {say} from 'cowsay-browser';

const faker = require('faker');

export default class App extends React.Component {

  constructor(props) {
    super(props); //React.Comp
    this.state = {};
    this.state.content = say({text: `Ms. ${faker.name.findName()}`}) ;
  }; // eveything you need to successfully add to react

  handleCowFakerUpdate = () => {
    this.setState((prevState) => {
      return {
        content: say({text: `Ms. ${faker.name.findName()}`}),
      };
    });
  };

  render() {
    //render will return JSX
    return(
      <main>
        <h1>Generate Cowsay Lorem</h1>
        <pre>{this.state.content}</pre>
        <button onClick={this.handleCowFakerUpdate}>click me</button>
      </main>
    );
  };
}

// export default App; // exporting only one item
