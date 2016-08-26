
import expect from 'expect';
import * as c from 'constants';
import * as books from 'modules/books';
import booksJSON from 'fixtures/books.json';

const { types, initialState, actions, reducer } = books;

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      books: {
        'items': []
      }
    });
  });

  it('should handle GET_BOOKS_REQUEST', () => {
    expect(
      reducer([], {
        type: types.GET_BOOKS_REQUEST
      })
    ).toEqual({
      books: {
        'didInvalidate': false,
        'isFetching': true
      }
    });
  });

  it('should handle GET_BOOKS_SUCCESS', () => {

    const searchInfo = {
      'query': 'python',
      'index': 0,
      'maxResults': 20
    };

    const books = booksJSON;
   
    expect(
      reducer(initialState, { 
        type: types.GET_BOOKS_SUCCESS, 
        books: books,
        searchInfo: searchInfo
      })
    ).toEqual({
      books: {
        isFetching: false,
        didInvalidate: false,
        items: books.items,
        totalItems: books.totalItems,
        info: searchInfo
      }
    });
  });

});

