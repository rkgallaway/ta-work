import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import SearchResultList from "./SearchResultList";

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.state.topics = [];
  };

  handleTopics = (searchResults) => {
    this.setState(() => {
      return{
        topics: searchResults
      }
    })
  };

  render() {
    return(
      <main>
        <h1>Search</h1>
        <SearchForm
          handleTopics = {this.handleTopics}
        />

        {
          this.state.topics.map((topic, index) =>
            <SearchResultList
              topic = {topic.data}
            />
          )
        }
      </main>
    )
  };
};
