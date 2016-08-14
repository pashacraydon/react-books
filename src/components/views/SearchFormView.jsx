/**
 * @file SearchView.jsx
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component View to show a single book
 */

import * as booksApi from 'api/booksApi';
import React, { Component, PropTypes } from 'react';

export default class SearchView extends Component {
  constructor() {
    super();
  }

  onSearchSubmit(event) {
    event.preventDefault();
    let search_query = document.getElementsByName('q')[0].value;
    booksApi.getBooks(search_query, 1, 10);
  }

  render () {
    return (
      <form action=""
        onSubmit={this.onSearchSubmit}
        method="POST">
        <input 
          type="text" 
          name="q" 
          placeholder="Search for books" 
        />
        <button type="submit">Go</button>
      </form>
    )
  }
}

