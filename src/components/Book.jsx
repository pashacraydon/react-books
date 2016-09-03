

import store from 'store';
import * as bookDetail from 'modules/book-detail';
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const {
  getBookDetails
} = bookDetail.api;

export default class Book extends Component {
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

  componentWillReceiveProps(nextProps) {
    this.setState({ 'id': nextProps.book.id });
  }

  showDetail(event) {
    event.preventDefault();
    store.dispatch(getBookDetails(this.state.id));
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
            <ReactCSSTransitionGroup 
              transitionAppear={true} 
              transitionAppearTimeout={500} 
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionName="fade-in"
            >
              <img key={volumeInfo.imageLinks.thumbnail}
                src={volumeInfo.imageLinks.thumbnail} />
              </ReactCSSTransitionGroup>}
          </div>
        </a>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
}
