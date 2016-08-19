
import fetch from 'isomorphic-fetch'
import store from 'store';

import booksJSON from 'books.json';

import {
  getBooksSuccess,
  getBooksRequest
} from 'actions/bookActions';

import {
  getBookDetailSuccess,
  getBookDetailRequest
} from 'actions/bookDetailActions';

import {
  buildPagination
} from 'actions/paginationActions';

import * as c from 'utils/constants';

/**
 * Get a series of books
 */

export function getBooks(searchInfo) {
  const { query, maxResults, index } = searchInfo;
  store.dispatch(getBooksRequest())
  return fetch(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(query)}&startIndex=${index}&maxResults=${maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
    .then(response => response.json())
    .then((json) => {
      store.dispatch(getBooksSuccess(json, searchInfo))
      store.dispatch(buildPagination(json, searchInfo))
    });
}

/**
 * Get the details for a single book
 */

export function getBookDetails(id) {
  store.dispatch(getBookDetailRequest())
  return fetch(`${c.GOOGLE_BOOKS_ENDPOINT}/${id}`)
    .then(response => response.json())
    .then(json => store.dispatch(getBookDetailSuccess(json)));
}


