/**
 * @file SearchView.jsx
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component View to show a single book
 */

import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class SearchView extends Component {
  constructor() {
    super();
  }

  onSearchSubmit(event) {
    event.preventDefault();
    let searchQuery = document.getElementsByName('q')[0].value;
    browserHistory.push(`/page/0/${searchQuery}/1/`);
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

