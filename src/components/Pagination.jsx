

import * as c from 'constants';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Pagination extends Component {
  render () {
    const { books } = this.props;

    let bookCount = books.items.length;

    var page = 0,
      radix = 10,
      nextPage,
      prevPage;

    if (books.info && Object.keys(books.info).length > 0) {
      const { index, query } = books.info;
        
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
        {(bookCount === c.RESULTS_PER_PAGE && nextPage) &&
        <Link to={nextPage}>
          Next page
        </Link>}
      </div>
    )
  }
}

Pagination.propTypes = {
  books: PropTypes.object.isRequired
}

