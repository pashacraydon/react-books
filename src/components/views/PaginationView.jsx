/**
 * @file PaginationView.jsx
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Paginate book results.
 */

import * as c from 'utils/constants';
import * as booksApi from 'api/booksApi';
import React, { Component, PropTypes } from 'react';

export default class PaginationView extends Component {
  constructor () {
    super();

    this.onNextPageClick = this.onNextPageClick.bind(this);
    this.onPrevPageClick = this.onPrevPageClick.bind(this);
  }

  onNextPageClick(event) {
    event.preventDefault();

    const { index, max_results, term } = this.props.data.info;
    const pages = this.props.data.totalItems / c.RESULTS_PER_PAGE;

    booksApi.getBooks({
      'term': term,
      'index': index + (c.RESULTS_PER_PAGE),
      'max_results': c.RESULTS_PER_PAGE
    });
  }

  onPrevPageClick(event) {
    event.preventDefault();

    const { index, max_results, term } = this.props.data.info;
    const pages = this.props.data.totalItems / c.RESULTS_PER_PAGE;

    booksApi.getBooks({
      'term': term,
      'index': index - (c.RESULTS_PER_PAGE),
      'max_results': c.RESULTS_PER_PAGE
    });
  }

  render () {
    const { book_count, data } = this.props;

    var page = 1;
    if (data.info && Object.keys(data.info).length > 0) {
      page = data.info.index;
    }

    return (
      <div className="pagination">
        {page > 1 &&
        <button
          onClick={this.onPrevPageClick}>
          Prev page
        </button>}
        {book_count === c.RESULTS_PER_PAGE &&
        <button
          onClick={this.onNextPageClick}>
          Next page
        </button>}
      </div>
    )
  }
}

PaginationView.propTypes = {
  data: PropTypes.object.isRequired,
  book_count: PropTypes.number.isRequired
}

