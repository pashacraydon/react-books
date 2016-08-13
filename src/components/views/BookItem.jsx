/**
 * @file BooksLayout.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component View to show a single book
 */

import React, { Component, PropTypes } from 'react';

export default class BooksItem extends Component {

  render () {
    const book = this.props.book.volumeInfo;
    return (
      <li className="book">
        <a href="#" className="img">
          <img src={book.imageLinks.thumbnail} />
        </a>
      </li>
    )
  }
}

BooksItem.propTypes = {
  book: PropTypes.object.isRequired
}
