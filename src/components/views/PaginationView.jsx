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
      'index': index + (c.RESULTS_PER_PAGE - 1),
      'max_results': c.RESULTS_PER_PAGE
    });
  }

  onPrevPageClick(event) {
    event.preventDefault();

    const { index, max_results, term } = this.props.data.info;
    const pages = this.props.data.totalItems / c.RESULTS_PER_PAGE;

    booksApi.getBooks({
      'term': term,
      'index': index - (c.RESULTS_PER_PAGE - 1),
      'max_results': c.RESULTS_PER_PAGE
    });
  }

  render () {
    var page = 1;
    if (this.props.data.info && Object.keys(this.props.data.info).length > 0) {
      page = this.props.data.info.index;
    }

    return (
      <div className="pagination">
        {page >= c.RESULTS_PER_PAGE &&
        <button
          onClick={this.onPrevPageClick}>
          Prev page
        </button>}
        <button
          onClick={this.onNextPageClick}>
          Next page
        </button>
      </div>
    )
  }
}
