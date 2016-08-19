
import fetch from 'isomorphic-fetch';
import store from 'store';
import * as c from 'constants';

import {
  getBooksSuccess,
  getBooksRequest
} from './actions';

import * as pagination from 'pagination';
const { buildPagination } = pagination.actions;


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


