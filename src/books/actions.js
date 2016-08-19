
import * as types from './actionTypes';

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
