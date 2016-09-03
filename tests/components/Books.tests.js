
import expect from 'expect';
import React from 'react';
import booksJSON from 'fixtures/books.json';
import Books from 'components/Books';
import Book from 'components/Book';

const { mount } = enzyme;

function setup(properties = {}) {
  const props = Object.assign({
    books: booksJSON.items
  }, properties);

  const enzymeWrapper = mount(
    <Books {...props} />
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<Books />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.books-list').length).toExist();
    expect(enzymeWrapper.find(Book).length).toExist();
  });
});


