/**
 * @file booksApi.test.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Test the book API handlers.
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import * as c from 'utils/constants';
import * as types from 'actions/actionTypes';
import booksJSON from '../../test/fixtures/books.json';

import {
  getBooksRequest,
  getBooksSuccess
} from 'actions/bookActions';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates GET_BOOKS_SUCCESS when fetching books has been done', () => {
    let query = 'python',
      index = 1,
      maxResults = 20;

    nock(c.GOOGLE_BOOKS_ENDPOINT)
      .get(`?q=${encodeURIComponent(query)}&startIndex=${index}&maxResults=${maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
      .reply(200, booksJSON)

    const expectedActions = [
      { type: types.GET_BOOKS_REQUEST },
      { type: types.GET_BOOKS_SUCCESS, body: { items: booksJSON  } }
    ]
    const store = mockStore({ items: booksJSON })

    return store.dispatch(getBooksRequest())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
