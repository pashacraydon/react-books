
import { combineReducers } from 'redux';
import * as books from 'books';
import * as bookDetail from 'book-detail';
import * as pagination from 'pagination';

// Combine Reducers
var reducers = combineReducers({
  booksState: books.reducer,
  bookDetailState: bookDetail.reducer,
  paginationState: pagination.reducer
});

export default reducers;
