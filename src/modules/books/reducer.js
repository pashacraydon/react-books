
import * as types from './actionTypes';
import React from 'react';

const initialState = {
  books: {
    'items': []
  }
};

export default (state = initialState, action) => {

  switch(action.type) {

    case types.GET_BOOKS_REQUEST:
      return Object.assign({}, state, { 
        books: {
          isFetching: true,
          didInvalidate: false
        }
      });

    case types.GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        books: {
          isFetching: false,
          didInvalidate: false,
          items: action.books.items,
          totalItems: action.books.totalItems,
          info: action.searchInfo
        }
      });
  }

  return state;

}
