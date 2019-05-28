import React from 'react'

export default class CategoryForm extends React.Component {

  render() {
    return(
      <form>
        <input
          type='text'
          name='title'
          placeholder='title'
        />
        <button type='submit'> Create Category </button>
      </form>
    )

  }
}