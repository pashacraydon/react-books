/**
 * @file paginationReducer.js
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
  pagination: {
    'items': []
  }
};

const paginationReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.BUILD_PAGINATION:
      return Object.assign({}, state, {
        pagination: {
          totalItems: action.books.totalItems,
          info: action.search_info
        }
      });
  }

  return state;

}

export default paginationReducer;