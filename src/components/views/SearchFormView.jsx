/**
 * @file SearchView.jsx
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component View to show a single book
 */

import * as c from 'utils/constants';
import * as booksApi from 'api/booksApi';
import React, { Component, PropTypes } from 'react';

export default class SearchView extends Component {
  constructor() {
    super();
  }

  onSearchSubmit(event) {
    event.preventDefault();
    let search_query = document.getElementsByName('q')[0].value;
    booksApi.getBooks({
      'term': search_query,
      'index': c.SEARCH_START_INDEX, 
      'max_results': c.RESULTS_PER_PAGE
    });
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

