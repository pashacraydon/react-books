/**
 * @file bookReducer.js
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
  book: {}
};

const bookDetailsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_BOOK_DETAILS_REQUEST:
      return Object.assign({}, state, { 
        isFetching: true,
        didInvalidate: false
      });

    case types.GET_BOOK_DETAILS_SUCCESS:
      return Object.assign({}, state, { 
        isFetching: false,
        didInvalidate: false,
        book: action.books.volumeInfo
      });

    case types.DESTROY_BOOK_DETAILS:
      return Object.assign({}, state, { 
        book: {}
      });
  }

  return state;

}

export default bookDetailsReducer;