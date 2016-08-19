

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';
import * as c from 'constants';
import * as books from 'books';

import BooksLayout from 'components/presentations/BooksLayout';
import BookDetailView from 'components/presentations/BookDetailView';
import PaginationView from 'components/presentations/PaginationView';
import HeaderView from 'components/presentations/HeaderView';

class AppContainer extends Component {

  /* Handles url routing from within the app */
  componentWillReceiveProps (nextProps) {
    if (this.props.params != nextProps.params) {
      const { page, query } = this.props.routeParams;
      let index = page * c.RESULTS_PER_PAGE;

      let searchInfo = {
        'query': nextProps.params.query,
        'index': nextProps.params.index,
        'maxResults': c.RESULTS_PER_PAGE
      };

      books.api.getBooks(searchInfo);
    }
  }

  /* Handles url routing coming from outside the app,
    or visiting the index page. */
  componentWillMount () {
    const { index, query } = this.props.params;

    let searchInfo = {
      'query': query || c.DEFAULT_SEARCH,
      'index': index || c.SEARCH_START_INDEX,
      'maxResults': c.RESULTS_PER_PAGE
    };

    books.api.getBooks(searchInfo);
  }

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
        <HeaderView />
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

AppContainer.propTypes = {
  books: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired
}

const mapStateToProps = function (store) {
  return {
    books: store.booksState.books,
    book: store.bookDetailState.book,
    pagination: store.paginationState.pagination
  }
}

export default connect(mapStateToProps)(AppContainer);
