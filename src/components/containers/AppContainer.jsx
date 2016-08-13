/**
 * @file BooksContainer.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 *  The index page component for searching books from.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';

import * as booksApi from 'api/booksApi';
import * as bookActions from 'actions/bookActions';
import BooksLayout from 'components/layouts/BooksLayout';

class AppContainer extends Component {

  componentWillMount () {
    booksApi.getBooks('python', 1, 10);
  }

  componentWillUnmount () {
  }

  render () {
    const { books } = this.props;
    return (
      <div className="app-wrapper">
        <header id="search">
          <h1><a href="/">React Books</a></h1>
          <h2>A React + Redux App Starter Kit</h2>
          <form action="" method="POST">
              <input autoComplete="off" type="text" name="q" value="" placeholder="Search for books" />
              <button type="submit">Go</button>
          </form>
          <p>
            <a href="https://github.com/pashasc/react_redux_starter_kit">
              Find it on Github
            </a>
          </p>
        </header>
        <div className="books-layout">
          {books.length > 0 &&
          <BooksLayout books={books} />}
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
  books: PropTypes.array.isRequired
}

const mapStateToProps = function (store) {
  return {
    books: store.booksState.books.items
  }
}

export default connect(mapStateToProps)(AppContainer);
