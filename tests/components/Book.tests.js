
import expect from 'expect';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import store from 'store';
import * as c from 'constants';
import booksJSON from 'fixtures/books.json';
import Book from 'components/Book';

const { shallow, mount } = enzyme;
const singleBook = booksJSON.items[0];

function setup(properties = {}) {
  const props = Object.assign({
    book: singleBook
  }, properties);

  const enzymeWrapper = shallow(
    <Book {...props} />
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<Book />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.book-item').length).toExist();
  });

  it('clicking book should make request to get book details.', () => {
    const { enzymeWrapper } = setup();

    const mock = new MockAdapter(axios);
    mock.onPost(`${c.GOOGLE_BOOKS_ENDPOINT}/${singleBook.id}`)
      .reply(200, { response: { data: singleBook }
    });

    enzymeWrapper.find('a').simulate('click', { preventDefault() {} });

    expect(store.getState().bookDetailState.isFetching).toExist();
    mock.reset();
  });

});


