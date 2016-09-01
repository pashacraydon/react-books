import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import store from 'store';

import * as c from 'constants';
import * as bookDetail from 'modules/book-detail';
import booksJSON from 'fixtures/books.json';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const { types, initialState, actions, api } = bookDetail;
const { getBookDetails } = api;

describe('book-detail api', () => {
  beforeEach(function () {
    this.mock = new MockAdapter(axios);
  });

  afterEach(function () {
    this.mock.reset();
  });

  describe('getBookDetails()', () => {
    it('should create GET_BOOK_DETAIL_SUCCESS when fetching books is done.', function () {
      let book = booksJSON.items[0];

      this.mock.onGet(`${c.GOOGLE_BOOKS_ENDPOINT}/${book.id}`)
        .reply(200, { response: { data: book } });

      const expectedActions = [
        { type: 'GET_BOOK_DETAIL_REQUEST' },
        { type: 'GET_BOOK_DETAIL_SUCCESS',
          book: { "response": {
            "data": book
            }
          }
        }
      ];

      const store = mockStore({ book: book });

      return store.dispatch(getBookDetails(book.id))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
