/**
 * @file HeaderView.jsx
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component to display header information
 */

import React, { Component } from 'react';
import SearchFormView from 'components/presentations/SearchFormView';

export default class HeaderView extends Component {
  render () {
    return (
      <header>
        <h1><a href="/">React Books</a></h1>
        <p>A demonstration of a very simple React + Redux app.</p>
        <SearchFormView />
        <p>
          <a href="https://github.com/pashasc/react_redux_starter_kit">
            Find it on Github
          </a>
        </p>
      </header>
    )
  }
}
