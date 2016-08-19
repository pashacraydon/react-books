
import fetch from 'isomorphic-fetch';
import store from 'store';

import {
  getBookDetailSuccess,
  getBookDetailRequest
} from './actions';

import * as c from 'constants';


/**
 * Get the details for a single book
 */

export function getBookDetails(id) {
  store.dispatch(getBookDetailRequest())
  return fetch(`${c.GOOGLE_BOOKS_ENDPOINT}/${id}`)
    .then(response => response.json())
    .then(json => store.dispatch(getBookDetailSuccess(json)));
}


