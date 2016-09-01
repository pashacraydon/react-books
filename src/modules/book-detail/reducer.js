
import * as types from './actionTypes';
import React from 'react';
import _ from 'lodash';
import update from 'react-addons-update';
import * as c from 'constants';

const initialState = {
  book: {
    volume: {}
  }
};

export default (state = initialState, action) => {

  switch(action.type) {

    case types.GET_BOOK_DETAIL_REQUEST:
      return Object.assign({}, state, { 
        book: {
          isFetching: true,
          didInvalidate: false
        }
      });

    case types.GET_BOOK_DETAIL_SUCCESS:
      var bookClone = _.cloneDeep(action.book.volumeInfo),
        truncateDesc = `${bookClone.description.substring(0, c.MAX_DESCRIPTION_LENGTH).replace(/(<([^>]+)>)/ig, '')}...`,
        newBook = update(bookClone, { $merge: { 'description': truncateDesc }});

      return Object.assign({}, state, {
        book: {
          isFetching: false,
          didInvalidate: false,
          volume: newBook
        }
      });

    case types.DESTROY_BOOK_DETAILS:
      return Object.assign({}, state, { 
        book: {}
      });
  }

  return state;

}
