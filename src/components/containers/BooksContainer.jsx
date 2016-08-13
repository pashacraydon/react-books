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

class BooksContainer extends Component {

  componentWillMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div className="books-layout">
        <h1>Stuff!</h1>
      </div>
    )
  }
}

BooksContainer.propTypes = {

}

const mapStateToProps = function (store) {
  return {

  }
}

export default connect(mapStateToProps)(BooksContainer);