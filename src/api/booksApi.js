/**
 * @file booksApi.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Network request functions that connect with the Books API. 
 * These functions use Async Actions to perform requests, dispatch the state
 * of the request then store the response.
 */


import fetch from 'isomorphic-fetch'
import store from 'store';

import booksJSON from 'books.json';

import {
  getBooksSuccess,
  getBooksRequest
} from 'actions/bookActions';

import * as c from 'utils/constants';

/**
 * Get all collections
 */

export function getBooks(term, index, max_results) {
  /*
  store.dispatch(getBooksRequest())
  return fetch(`${c.GOOGLE_BOOKS_ENDPOINT}q=${encodeURIComponent(term)}&startIndex=${index}&maxResults=${max_results}&key=${c.API_KEY}&projection=full&fields=totalItems,items(id,volumeInfo)`)
    .then(response => response.json())
    .then(json => store.dispatch(getBooksSuccess(json))) */
  store.dispatch(getBooksSuccess(booksJSON));
}
