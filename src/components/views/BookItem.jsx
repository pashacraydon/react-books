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

  componentWillMount() {
    this.setState({ 'id': this.props.book.id });
  }

  showDetail(event) {
    event.preventDefault();
    booksApi.getBookDetails(this.state.id);
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
    const { volumeInfo } = this.props.book;
    const { show_overlay } = this.state;

    return (
      <li className="book-item">
        <a href="#"
          onClick={this.showDetail}
        >
          <div className="wrap-book">
            {volumeInfo.imageLinks &&
            <img src={volumeInfo.imageLinks.thumbnail} />}
          </div>
        </a>
      </li>
    )
  }
}

BooksItem.propTypes = {
  book: PropTypes.object.isRequired
}
