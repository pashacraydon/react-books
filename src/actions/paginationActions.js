/**
 * @file paginationActions.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 *  The only way to mutate state in a react app is to emit an action. 
 *  An action is a plain javaScript object which describes what happened.
 */

import * as types from 'actions/actionTypes';

export function buildPagination(books, searchInfo) {
  return {
    type: types.BUILD_PAGINATION,
    books,
    searchInfo
  };
}
