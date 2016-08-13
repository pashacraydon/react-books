/**
 * @file BooksLayout.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component View to show a single book
 */

import store from 'store';
import * as booksApi from 'api/booksApi';
import { destroyBookDetails } from 'actions/bookDetailsActions';
import React, { Component, PropTypes } from 'react';

export default class BookDetailView extends Component {
  constructor () {
    super();
    this.destroyDetail = this.destroyDetail.bind(this);
  }

  destroyDetail(event) {
    event.preventDefault();
    store.dispatch(destroyBookDetails());
  }

  render () {
    const { book } = this.props;
    return (
      <div className="detail-view">
       <a className="close-detail"
        onClick={this.destroyDetail}
        href="#">&#8855;</a>
       <div className="wrap-book">
          {book.imageLinks &&
          <img src=
            {book.imageLinks.small ? book.imageLinks.small
              :
            book.imageLinks.medium} 
          />}
       </div>
      <div className="detail-info">
        {book.title && 
        <h1>{book.title}</h1>}
        {book.subtitle &&
        <h3>{book.subtitle}</h3>}
        {book.authors &&
        <strong>Author: {book.authors}</strong>}
        <br />
        {book.description &&
        <div className="description">{book.description}</div>}
        </div>
      </div>
    )
  }
}

BookDetailView.propTypes = {
  book: PropTypes.object.isRequired
}
