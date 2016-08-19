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

    var page = 0,
      radix = 10,
      nextPage,
      prevPage;

    if (data.info && Object.keys(data.info).length > 0) {
      const { index, query } = data.info;
        
      let nextPageIndex = (parseInt(index, radix) + c.RESULTS_PER_PAGE),
        prevPageIndex = (parseInt(index, radix) - c.RESULTS_PER_PAGE);

      page = Math.floor(index / c.RESULTS_PER_PAGE);
      nextPage = `/page/${page + 1}/${query}/${nextPageIndex}/`,
      prevPage = `/page/${page - 1}/${query}/${prevPageIndex}/`;
    }

    return (
      <div className="pagination">
        {page > 0 &&
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

