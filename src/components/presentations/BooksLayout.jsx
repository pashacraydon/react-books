
import React, { Component, PropTypes } from 'react';
import BookItem from 'components/presentations/BookItem';

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
