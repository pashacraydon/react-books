
import axios from 'axios';
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
  return function (dispatch) {
    dispatch(getBookDetailRequest());
    return axios.get(`${c.GOOGLE_BOOKS_ENDPOINT}/${id}`)
      .then(response => dispatch(getBookDetailSuccess(response)));
  }
}


