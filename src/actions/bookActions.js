/**
 * @file bookActions.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 *  The only way to mutate state in a react app is to emit an action. 
 *  An action is a plain javaScript object which describes what happened.
 */

import * as types from 'actions/actionTypes';

export function createNewCollection(title, description, behavior) {
  return {
    type: types.CREATE_COLLECTION,
    title,
    description,
    behavior
  };
}

export function editCollection(title, description, behavior) {
  return {
    type: types.EDIT_COLLECTION,
    title,
    description,
    behavior
  };
}

export function libraryBehavior(behavior) {
  return {
    type: types.SHOW_CONTENT,
    behavior
  };
}
