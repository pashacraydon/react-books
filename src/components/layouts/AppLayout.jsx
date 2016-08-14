/**
 * @file AppLayout.jsx
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 *  The index page component for searching books from.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';
import * as c from 'utils/constants';
import * as booksApi from 'api/booksApi';
import * as bookActions from 'actions/bookActions';
import BooksLayout from 'components/layouts/BooksLayout';
import BookDetailView from 'components/views/BookDetailView';
import SearchFormView from 'components/views/SearchFormView';
import PaginationView from 'components/views/PaginationView';

export default class AppLayout extends Component {

  render () {
    const { books, book, pagination } = this.props;
    const book_exists = (book.volume && Object.keys(book.volume).length > 0);
    const books_exist = (books.items && books.items.length > 0);
    const is_fetching = (books.isFetching || book.isFetching);

    var query = '';
    if (books.info && books.info.query) {
      query = books.info.query;
    }

    return (
      <div className="app-wrapper">
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
        <div className="books-layout">
          {query != c.DEFAULT_SEARCH &&
          <h1>results for: {query}</h1>}
          {is_fetching &&
          <div className="loading-books">
            <div className="loading-gif"></div>
          </div>}
          {book_exists &&
          <BookDetailView book={book.volume} />}
          {books_exist &&
          <BooksLayout books={books.items} />}
          {books_exist &&
          <PaginationView data={pagination} book_count={books.items.length} />}
        </div>
      </div>
    )
  }
}

