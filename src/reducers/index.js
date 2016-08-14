/**
 * @file index.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Reducers maintain a state tree in redux. 
 * Reducers are pure functions which do not ever mutate state but rather create a copy of a new state. 
 * They reduce a collection of values down to a single value. 
 */

import { combineReducers } from 'redux';
import booksReducer from 'reducers/booksReducer';
import bookDetailReducer from 'reducers/bookDetailReducer';

// Combine Reducers
var reducers = combineReducers({
  booksState: booksReducer,
  bookDetailsState: bookDetailReducer
});

export default reducers;
