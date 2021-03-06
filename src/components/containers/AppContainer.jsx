
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';
import * as c from 'constants';
import * as books from 'modules/books';

import Books from 'components/Books';
import BookDetail from 'components/BookDetail';
import Pagination from 'components/Pagination';
import Header from 'components/Header';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const {
  getBooks
} = books.api;

class AppContainer extends Component {

  /* Handles url routing from within the app */
  componentWillReceiveProps (nextProps) {
    if (this.props.params != nextProps.params) {
      const { page, query } = this.props.routeParams;
      let index = (page * c.RESULTS_PER_PAGE);

      let searchInfo = {
        'query': nextProps.params.query,
        'index': nextProps.params.index,
        'maxResults': c.RESULTS_PER_PAGE
      };

      store.dispatch(getBooks(searchInfo));
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

    store.dispatch(getBooks(searchInfo));
  }

  render () {
    const { booksState, bookDetailState, pagination } = this.props;
    const { books } = booksState;
    const { book } = bookDetailState;
    const book_exists = (book.volume && Object.keys(book.volume).length > 0);
    const books_exist = (books.items && books.items.length > 0);
    const is_fetching = (booksState.isFetching || bookDetailState.isFetching);

    var query = '';
    if (books.info && books.info.query) {
      query = books.info.query;
    }

    return (
      <div className="app-wrapper">
        <Header />
        <div className="books-layout">
          {query != c.DEFAULT_SEARCH &&
          <h1>results for: {query}</h1>}
          {is_fetching &&
          <div className="loading-books">
            <div className="loading-gif"></div>
          </div>}
          {book_exists &&
          <ReactCSSTransitionGroup 
            transitionAppear={true} 
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionName="fade-in"
          >
            <BookDetail book={book.volume} />
          </ReactCSSTransitionGroup>}
          {books_exist &&
          <Books books={books.items} />}
          {books_exist &&
          <Pagination books={books} />}
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
  booksState: PropTypes.object.isRequired,
  bookDetailState: PropTypes.object.isRequired
}

const mapStateToProps = function (store) {
  return {
    booksState: store.booksState,
    bookDetailState: store.bookDetailState
  }
}

export default connect(mapStateToProps)(AppContainer);
export { AppContainer as PureAppContainer }; // export component outside of connect for testing
