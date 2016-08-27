

import expect from 'expect';
import * as bookDetail from 'modules/book-detail';
import booksJSON from 'fixtures/books.json';

const { 
  getBookDetailRequest,
  getBookDetailSuccess,
  destroyBookDetails
} = bookDetail.actions;
const { types } = bookDetail;

describe('actions', () => {
  it('should create an action to make a reuqest for a books details.', () => {
    const expectedAction = {
      type: types.GET_BOOK_DETAIL_REQUEST
    };

    expect(getBookDetailRequest()).toEqual(expectedAction);
  });

  it('should create an action to destroy a book detail.', () => {
    const expectedAction = {
      type: types.DESTROY_BOOK_DETAILS
    };

    expect(destroyBookDetails()).toEqual(expectedAction);
  });

  it('should create an action to resolve a request to get a books details.', () => {
    const books = booksJSON;
    const response = {
      'data': books
    };

    const expectedAction = {
      type: types.GET_BOOK_DETAIL_SUCCESS,
      books
    };

    expect(getBookDetailSuccess(response)).toEqual(expectedAction);
  });

});
