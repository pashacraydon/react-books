
import * as types from './actionTypes';
import React from 'react';

const initialState = {
  pagination: {
    'items': []
  }
};

export default (state = initialState, action) => {

  switch(action.type) {

    case types.BUILD_PAGINATION:
      return Object.assign({}, state, {
        pagination: {
          totalItems: action.books.totalItems,
          info: action.searchInfo
        }
      });
  }

  return state;

}
