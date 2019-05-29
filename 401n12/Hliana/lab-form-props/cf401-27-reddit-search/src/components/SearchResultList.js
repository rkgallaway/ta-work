import React from 'react';

export default class SearchResultList extends React.Component{

  render(){
    const { topic } = this.props;
    return(
      <li>
        <a href={topic.url}>
          <h4>{topic.title}</h4>
          <p>Number of upvotes: {topic.ups}</p>
        </a>
      </li>
    )
  }

}