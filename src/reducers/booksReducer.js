/**
 * @file booksReducer.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Reducers maintain a state tree in redux. 
 * Reducers are pure functions which do not ever mutate state but rather create a copy of a new state. 
 * They reduce a collection of values down to a single value. 
 */

import * as types from 'actions/actionTypes';
import React from 'react';

const initialState = {
  books: {
    'items': []
  }
};

const booksReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_BOOKS_REQUEST:
      return Object.assign({}, state, { 
        books: {
          isFetching: true,
          didInvalidate: false
        }
      });

    case types.GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        books: {
          isFetching: false,
          didInvalidate: false,
          items: action.books.items,
          totalItems: action.books.totalItems,
          info: action.searchInfo
        }
      });
  }

  return state;

}

export default booksReducer;