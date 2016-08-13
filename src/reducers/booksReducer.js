/**
 * @file booksReducer.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Reducers maintain a state tree in redux. 
 * Reducers are pure functions which do not ever mutate state but rather create a copy of a new state. 
 * They reduce a collection of values down to a single value. 
 */

import * as types from 'collections/actions/actionTypes';
import React from 'react';

const initialState = {
  info: {
    'title': '',
    'description': '',
    'behavior': ''
  }
};

const booksReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.CREATE_COLLECTION:
      var stateClone = _.cloneDeep(state);
      return React.addons.update(stateClone, { info: { $merge: {
        title: action.title,
        description: action.description,
        behavior: "CREATE"
      }}});

    case types.EDIT_COLLECTION:
      var stateClone = _.cloneDeep(state);
      return React.addons.update(stateClone, { info: { $merge: {
        title: action.title,
        description: action.description,
        behavior: "EDIT"
      }}});

    case types.SHOW_CONTENT:
      var stateClone = _.cloneDeep(state);
      return React.addons.update(stateClone, { info: { $merge: {
        title: '',
        description: '',
        behavior: "SHOW"
      }}});
  }

  return state;

}

export default booksReducer;