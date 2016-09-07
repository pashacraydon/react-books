
import * as types from './actionTypes';

export function getBookDetailRequest() {
  return {
    type: types.GET_BOOK_DETAIL_REQUEST
  };
}

export function getBookDetailSuccess(response) {
  return {
    type: types.GET_BOOK_DETAIL_SUCCESS,
    book: response.data
  };
}

export function destroyBookDetails() {
  return {
    type: types.DESTROY_BOOK_DETAILS,
  };
}
