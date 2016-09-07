
import expect from 'expect';
import * as c from 'constants';
import update from 'react-addons-update';
import * as bookDetail from 'modules/book-detail';
import booksJSON from 'fixtures/books.json';

const { types, initialState, actions, reducer } = bookDetail;

describe('book-detail reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      book: {
        volume: {}
      }
    });
  });

  it('should handle GET_BOOK_DETAIL_REQUEST', () => {
    expect(
      reducer([], {
        type: types.GET_BOOK_DETAIL_REQUEST
      })
    ).toEqual({
      'didInvalidate': false,
      'isFetching': true
    });
  });

  it('should handle GET_BOOK_DETAIL_SUCCESS', () => {
    const book = booksJSON.items[1];
    let bookClone = _.cloneDeep(book.volumeInfo),
      truncateDesc = `${bookClone.description.substring(0, c.MAX_DESCRIPTION_LENGTH).replace(/(<([^>]+)>)/ig, '')}...`,
      newBook = update(bookClone, { $merge: { 'description': truncateDesc }});
   
    expect(
      reducer(initialState, { 
        type: types.GET_BOOK_DETAIL_SUCCESS, 
        book: book,
      })
    ).toEqual({
      isFetching: false,
      didInvalidate: false,
      book: {
        volume: newBook
      }
    });
  });

});

