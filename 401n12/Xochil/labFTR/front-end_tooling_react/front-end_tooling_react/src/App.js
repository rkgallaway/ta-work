import React from 'react';
import './App.css';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {//props are HTML attributes
    super(props);
    this.state = {};
    this.state.content= '';


  }
  cowsayRender = () => {
    this.setState ({
        content: cowsay.say({
          text: faker.lorem.sentence(),
          cow: '',
          e : "oO",
          T : "u "
        })

    })

  };
  render() {

    return(<main>
      <h1>Generate Cowsay Lorem</h1>
      <pre>{this.state.content}</pre>
      <button onClick={this.cowsayRender}>click me</button>


    </main>);
  };
}


export default App;
