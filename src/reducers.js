
import { combineReducers } from 'redux';
import * as books from 'modules/books';
import * as bookDetail from 'modules/book-detail';

// Combine Reducers
var reducers = combineReducers({
  booksState: books.reducer,
  bookDetailState: bookDetail.reducer
});

export default reducers;
