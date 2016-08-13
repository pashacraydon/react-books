/**
 * @file BooksLayout.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component Layout to show a list of BookItem's
 */

import React, { Component, PropTypes } from 'react';
import BookItem from 'components/views/BookItem';

export default class BooksLayout extends Component {

  render () {
    const { books } = this.props;
    return (
      <ul className="books-list">
        {books.map((book, i) => {
          return <BookItem key={i} book={book} />;
        })}
      </ul>
    )
  }
}

BooksLayout.propTypes = {
  books: PropTypes.array.isRequired
}
