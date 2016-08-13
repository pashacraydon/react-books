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
import * as bookActions from 'actions/bookActions';

/**
 * Get all collections
 */

export function getCollections(content = '') {
  /*
  return dispatch => {
    dispatch(getCollectionsRequest(content))
    return fetch(`http://www.example.com/collections/?content=${content}`)
      .then(response => response.json())
      .then(json => dispatch(getCollectionsSuccess(json)))
  } */

  // code below here is temporary for development
  let collections = [
    { 'name': 'PHP', 'url': 'http://someurl/', 'type': 'existing_collection' },
    { 'name': 'javaScript', 'url': 'http://someurl/', 'type': 'existing_collection' },
    { 'name': 'python', 'url': 'http://someurl/', 'type': 'existing_collection' }
  ];

  store.dispatch(getCollectionsSuccess(collections));
  store.dispatch(addDropdownItems(collections));

  return collections;
}
