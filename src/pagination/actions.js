
import * as types from './actionTypes';

export function buildPagination(books, searchInfo) {
  return {
    type: types.BUILD_PAGINATION,
    books,
    searchInfo
  };
}