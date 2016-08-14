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
import _ from 'lodash';
import update from 'react-addons-update';
import * as c from 'utils/constants';

const initialState = {
  book: {
    volume: {}
  }
};

const bookDetailReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_BOOK_DETAIL_REQUEST:
      return Object.assign({}, state, { 
        book: {
          isFetching: true,
          didInvalidate: false
        }
      });

    case types.GET_BOOK_DETAIL_SUCCESS:
      var bookClone = _.cloneDeep(action.books.volumeInfo),
        truncateDesc = bookClone.description.substring(0, c.MAX_DESCRIPTION_LENGTH).replace(/(<([^>]+)>)/ig, '') + '...',
        newBook = update(bookClone, { $merge: { 'description': truncateDesc }});

      return Object.assign({}, state, {
        book: {
          isFetching: false,
          didInvalidate: false,
          volume: newBook
        }
      });

    case types.DESTROY_BOOK_DETAILS:
      return Object.assign({}, state, { 
        book: {}
      });
  }

  return state;

}

export default bookDetailReducer;