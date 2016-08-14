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

import {
  getBookDetailSuccess,
  getBookDetailRequest
} from 'actions/bookDetailActions';

import * as c from 'utils/constants';

/**
 * Get a series of books
 */

export function getBooks(term, index, max_results) {
  store.dispatch(getBooksRequest())
  return fetch(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(term)}&startIndex=${index}&maxResults=${max_results}&projection=full&fields=totalItems,items(id,volumeInfo)`)
    .then(response => response.json())
    .then(json => store.dispatch(getBooksSuccess(json)));
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


