/**
 * Test the files and functions in the books modules.
 *
 * @file modules.books.tests.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 */

import expect from 'expect';
import * as books from 'modules/books';
import booksJSON from './fixtures/books.json';

const { 
  getBooksRequest, 
  getBooksSuccess 
} = books.actions;
const { types } = books;

describe('actions', () => {
  it('should create an action to make a book request.', () => {
    const expectedAction = {
      type: types.GET_BOOKS_REQUEST
    };

    expect(getBooksRequest()).toEqual(expectedAction);
  });

  it('should create an action to resolve a book request successfully.', () => {
    const books = booksJSON;
    const searchInfo = { 
      'query': 'python',
      'index': 0,
      'maxResults': 20
    };

    const expectedAction = {
      type: types.GET_BOOKS_SUCCESS,
      books,
      searchInfo
    };

    expect(getBooksSuccess(books, searchInfo)).toEqual(expectedAction);
  });

});
