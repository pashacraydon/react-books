
import expect from 'expect';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import store from 'store';
import * as c from 'constants';
import booksJSON from 'fixtures/books.json';
import { PureAppContainer } from 'components/containers/AppContainer';

import Books from 'components/Books';
import BookDetail from 'components/BookDetail';
import Pagination from 'components/Pagination';
import Header from 'components/Header';

const { shallow, mount } = enzyme;
const books = booksJSON;
const bookInfo = books.items[0].volumeInfo;
const book = { 'volume': bookInfo };

function setup(properties = {}) {
  const props = Object.assign({
    params: {
      query: 'python',
      index: 1
    },
    routeParams: {
      page: 1,
      query: 'python',
      index: 1
    },
    books: books,
    book: {}
  }, properties);

  const enzymeWrapper = mount(
    <Provider store={store}>
      <PureAppContainer {...props} />
    </Provider>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<AppContainer />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.app-wrapper').length).toExist();
    expect(enzymeWrapper.find(Books).length).toExist();
    expect(enzymeWrapper.find(Header).length).toExist();
    expect(enzymeWrapper.find(Pagination).length).toExist();
  });

  it('should render <BookDetail /> if book exists.', () => {
    const { enzymeWrapper } = setup({
      book: book
    });

    expect(enzymeWrapper.find(BookDetail).length).toExist();
  });

  describe('componentWillMount()', () => {
    it('will mount', () => {
      var spy = sinon.spy(PureAppContainer.prototype, 'componentWillMount');
      const { enzymeWrapper } = setup();
      expect(spy.calledOnce).toExist();
      spy.restore();
    });

    it('should dispatch a request to get books.', () => {
      const searchInfo = {
        query: 'python',
        index: 1,
        maxResults: 20
      };

      const mock = new MockAdapter(axios);
      mock.onPost(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(searchInfo.query)}&startIndex=${searchInfo.index}&maxResults=${searchInfo.maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
        .reply(200, { response: { data: book }
      });

      setup();
      expect(store.getState().booksState.isFetching).toExist();
      mock.restore();
    });
  });

  describe('componentWillReceiveProps()', () => {
    it('should be invoked when the value of props change.', () => {
      var spy = sinon.spy(PureAppContainer.prototype, 'componentWillReceiveProps');
      const { enzymeWrapper, props } = setup();
      const nextProps = {
        params: {
          query: 'python',
          index: 21
        },
        routeParams: {
          page: 2,
          query: 'python',
          index: 21
        }
      };

      enzymeWrapper.setProps(...nextProps);
      expect(spy.calledOnce).toExist();
      spy.restore();
    });

    it('should dispatch a request to get books.', () => {
      const { enzymeWrapper, props } = setup();
      const nextProps = {
        params: {
          query: 'python',
          index: 21
        },
        routeParams: {
          page: 2,
          query: 'python',
          index: 21
        }
      };
      const searchInfo = {
        query: 'python',
        index: 1,
        maxResults: 20
      };

      const mock = new MockAdapter(axios);
      mock.onPost(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(searchInfo.query)}&startIndex=${searchInfo.index}&maxResults=${searchInfo.maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
        .reply(200, { response: { data: book }
      });

      enzymeWrapper.setProps(...nextProps);
      expect(store.getState().booksState.isFetching).toExist();
      mock.restore();
    });
  });
});


