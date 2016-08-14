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
import * as c from 'utils/constants';
import * as booksApi from 'api/booksApi';
import * as bookActions from 'actions/bookActions';
import BooksLayout from 'components/layouts/BooksLayout';
import BookDetailView from 'components/views/BookDetailView';
import SearchFormView from 'components/views/SearchFormView';
import PaginationView from 'components/views/PaginationView';

class AppContainer extends Component {

  componentWillMount () {
    let search_info = {
      'term': c.DEFAULT_SEARCH,
      'index': c.SEARCH_START_INDEX,
      'max_results': c.RESULTS_PER_PAGE
    };

    booksApi.getBooks(search_info);
  }

  render () {
    const { books, book, pagination } = this.props;
    const book_exists = (book.volume && Object.keys(book.volume).length > 0);
    const books_exist = (books.items && books.items.length > 0);
    const is_fetching = (books.isFetching || book.isFetching);

    var term = '';
    if (books.info && books.info.term) {
      term = books.info.term;
    }

    return (
      <div className="app-wrapper">
        <header>
          <h1><a href="/">React Books</a></h1>
          <p>A React + Redux App Starter Kit</p>
          <SearchFormView />
          <p>
            <a href="https://github.com/pashasc/react_redux_starter_kit">
              Find it on Github
            </a>
          </p>
        </header>
        <div className="books-layout">
          {term != c.DEFAULT_SEARCH &&
          <h1>results for: {term}</h1>}
          {is_fetching &&
          <div className="loading-books">
            <img className="loading-gif" src="loading.gif"/>
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

AppContainer.propTypes = {
  books: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired
}

const mapStateToProps = function (store) {
  return {
    books: store.booksState.books,
    book: store.bookDetailsState.book,
    pagination: store.paginationState.pagination
  }
}

export default connect(mapStateToProps)(AppContainer);
