/**
 * @file bookActions.test.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Test the book actions.
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import * as types from 'actions/actionTypes';
import booksJSON from '../../test/fixtures/books.json';

import {
  getBooksRequest,
  getBooksSuccess
} from 'actions/bookActions';


describe('book actions', () => {
  beforeEach(() => {

  });

  afterEach(() => {
  });

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
