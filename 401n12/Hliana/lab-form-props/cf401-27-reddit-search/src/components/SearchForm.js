import React from 'react';
import './App.css';
import superagent from 'superagent';

export default class SearchForm extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
    this.state.class = 'none';
    this.state.display = 'none';
    this.state.topics = this.props.topics;
    this.state.searchName = 'Board Name';
    this.state.searchNumber = 10;
  }

  handleNameChange = (event) => {
    this.setState({searchName: event.target.value})
  };

  handleNumberChange = (event) => {
    this.setState({searchNumber: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let REDDIT_API = `https://www.reddit.com/r/${this.state.searchName}.json?limit=${this.state.searchNumber-1}`;

    return superagent.get(REDDIT_API)
      .then(response => {
        if (response.body.data) {
          this.props.handleTopics(response.body.data.children);
          this.setState({
            ifError: '', display: 'block'
          })
        }
      })
      .catch(error => {
        this.setState({
          ifError: 'App-error'
        })
      })
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="searchName">Subreddit name</label>
          <input name="searchName"
                 class={this.state.ifError}
                 placeholder="Board Name"
                 value={this.state.searchName}
                 onChange={this.handleNameChange}
                 type="text"/>
          <label For="searchNumber">Number of Results</label>
          <input name="searchNumber"
                 class={this.state.ifError}
                 placeholder="Number of results"
                 value={this.state.searchNumber}
                 onChange={this.handleNumberChange}
                 min="1"
                 max="100"
                 type="number"/>
          <button type="submit">Search</button>
        </form>
        <h2 style={{display:this.state.display}}>Search Results</h2>
      </div>
    );
  }

};