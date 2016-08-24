
import { combineReducers } from 'redux';
import * as books from 'modules/books';
import * as bookDetail from 'modules/book-detail';
import * as pagination from 'modules/pagination';

// Combine Reducers
var reducers = combineReducers({
  booksState: books.reducer,
  bookDetailState: bookDetail.reducer,
  paginationState: pagination.reducer
});

export default reducers;
