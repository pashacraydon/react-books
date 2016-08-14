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

import AppLayout from 'components/layouts/AppLayout';

class HomeContainer extends Component {

  componentWillReceiveProps (nextProps) {
    if (this.props.params != nextProps.params) {
      const { page, query } = this.props.routeParams;
      let index = page * c.RESULTS_PER_PAGE;

      let searchInfo = {
        'query': nextProps.params.query,
        'index': nextProps.params.index,
        'maxResults': c.RESULTS_PER_PAGE
      };

      booksApi.getBooks(searchInfo);
    }
  }

  componentWillMount () {
    const { index, query } = this.props.params;

    let searchInfo = {
      'query': query || c.DEFAULT_SEARCH,
      'index': index || c.SEARCH_START_INDEX,
      'maxResults': c.RESULTS_PER_PAGE
    };

    booksApi.getBooks(searchInfo);
  }

  render () {
    const { books, book, pagination } = this.props;

    return (
      <AppLayout books={books} book={book} pagination={pagination} />
    )
  }
}

HomeContainer.propTypes = {
  books: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired
}

const mapStateToProps = function (store) {
  return {
    books: store.booksState.books,
    book: store.bookDetailsState.book,
    pagination: store.paginationState.pagination
  }
}

export default connect(mapStateToProps)(HomeContainer);
