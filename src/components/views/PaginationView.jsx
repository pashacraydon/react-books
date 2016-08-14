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
import { Link } from 'react-router';

export default class PaginationView extends Component {
  render () {
    const { book_count, data } = this.props;

    var page = 1,
      nextPage,
      prevPage;

    if (data.info && Object.keys(data.info).length > 0) {
      page = Math.floor(data.info.index / c.RESULTS_PER_PAGE);
      nextPage = `/page/${page + 1}/stuff/`;
      prevPage = `/page/${page - 1}/stuff/`;
    }

    return (
      <div className="pagination">
        {(page > 1 && prevPage) &&
        <Link to={prevPage}>
          Prev page
        </Link>}
        {(book_count === c.RESULTS_PER_PAGE && nextPage) &&
        <Link to={nextPage}>
          Next page
        </Link>}
      </div>
    )
  }
}

PaginationView.propTypes = {
  data: PropTypes.object.isRequired,
  book_count: PropTypes.number.isRequired
}

