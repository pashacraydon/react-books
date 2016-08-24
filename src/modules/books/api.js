
import axios from 'axios';
import store from 'store';
import * as c from 'constants';

import {
  getBooksSuccess,
  getBooksRequest
} from './actions';

import * as pagination from 'modules/pagination';
const { buildPagination } = pagination.actions;


/**
 * Get a series of books
 */

export function getBooks(searchInfo) {
  const { query, maxResults, index } = searchInfo;
  store.dispatch(getBooksRequest())
  return axios.get(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(query)}&startIndex=${index}&maxResults=${maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
    .then((response) => {
      store.dispatch(getBooksSuccess(response.data, searchInfo))
      store.dispatch(buildPagination(response.data, searchInfo))
    });
}


