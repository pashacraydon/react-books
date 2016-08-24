

import * as bookDetail from 'modules/book-detail';
import React, { Component, PropTypes } from 'react';

export default class BooksItem extends Component {
  constructor () {
    super();

    this.state = {
      'show_overlay': false
    }

    this.showDetail = this.showDetail.bind(this);
  }

  componentWillMount() {
    this.setState({ 'id': this.props.book.id });
  }

  showDetail(event) {
    event.preventDefault();
    bookDetail.api.getBookDetails(this.state.id);
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
