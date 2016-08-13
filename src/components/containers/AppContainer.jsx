/**
 * @file BooksContainer.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 *  The index page component for searching books from.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';

import * as booksApi from 'api/booksApi';
import * as bookActions from 'actions/bookActions';
import BooksLayout from 'components/layouts/BooksLayout';
import BookDetailView from 'components/views/BookDetailView';

class AppContainer extends Component {

  componentWillMount () {
    booksApi.getBooks('*', 1, 10);
  }

  render () {
    const { books, book } = this.props;
    const book_exists = (Object.keys(book).length !== 0);
    return (
      <div className="app-wrapper">
        <header>
          <h1><a href="/">React Books</a></h1>
          <p>A React + Redux App Starter Kit</p>
          <form action="" method="POST">
              <input autoComplete="off" type="text" name="q" value="" placeholder="Search for books" />
              <button type="submit">Go</button>
          </form>
          <p>
            <a href="https://github.com/pashasc/react_redux_starter_kit">
              Find it on Github
            </a>
          </p>
        </header>
        <div className="books-layout">
          {book_exists &&
          <BookDetailView book={book} />}
          {books.length > 0 &&
          <BooksLayout books={books} />}
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
  books: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired
}

const mapStateToProps = function (store) {
  return {
    books: store.booksState.books.items,
    book: store.bookDetailsState.book
  }
}

export default connect(mapStateToProps)(AppContainer);
