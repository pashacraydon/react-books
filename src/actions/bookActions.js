/**
 * @file bookActions.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 *  The only way to mutate state in a react app is to emit an action. 
 *  An action is a plain javaScript object which describes what happened.
 */

import * as types from 'actions/actionTypes';

export function getBooksRequest() {
  return {
    type: types.GET_BOOKS_REQUEST
  };
}

export function getBooksSuccess(books, searchInfo) {
  return {
    type: types.GET_BOOKS_SUCCESS,
    books,
    searchInfo
  };
}
