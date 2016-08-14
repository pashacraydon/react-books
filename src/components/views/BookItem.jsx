/**
 * @file BooksLayout.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Component View to show a single book
 */

import * as booksApi from 'api/booksApi';
import React, { Component, PropTypes } from 'react';

export default class BooksItem extends Component {
  constructor () {
    super();

    this.state = {
      'show_overlay': false
    }

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(event) {
    event.preventDefault();
    let book_id = event.target.dataset.bookid;
    booksApi.getBookDetails(book_id);
  }

  onMouseOver(event) {
    event.preventDefault();
    this.setState({ 'show_overlay': true });
  }

  onMouseOut(event) {
    event.preventDefault();
    this.setState({ 'show_overlay': false });
  }

  render () {
    const { volumeInfo, id } = this.props.book;
    const { show_overlay } = this.state;
    return (
      <li className="book">
        <a href="#"
          onMouseOver={this.onMouseOver}
        >
          {volumeInfo.imageLinks &&
          <img src={volumeInfo.imageLinks.thumbnail} />}
        </a>
        {show_overlay &&
        <a href="#" 
          className="overlay"
          data-bookid={id}
          onClick={this.showDetail}
          onMouseOut={this.onMouseOut}>
        </a>}
      </li>
    )
  }
}

BooksItem.propTypes = {
  book: PropTypes.object.isRequired
}
