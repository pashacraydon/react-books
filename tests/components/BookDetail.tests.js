
import expect from 'expect';
import React from 'react';
import store from 'store';
import booksJSON from 'fixtures/books.json';
import BookDetail from 'components/BookDetail';

const { mount } = enzyme;
const singleBook = booksJSON.items[0].volumeInfo;

function setup(properties = {}) {
  const props = Object.assign({
    book: singleBook
  }, properties);

  const enzymeWrapper = mount(
    <BookDetail {...props} />
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<BookDetail />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.detail-view').length).toExist();
  });

  it('clicking close detail link should empty the book details state.', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.find('a').simulate('click');
    expect(Object.keys(store.getState().bookDetailState.book).length).toNotExist();
  });
});


