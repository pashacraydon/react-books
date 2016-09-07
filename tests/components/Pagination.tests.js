
import expect from 'expect';
import React from 'react';
import store from 'store';
import booksJSON from 'fixtures/books.json';
import Pagination from 'components/Pagination';
import { Link } from 'react-router';

const { mount } = enzyme;
const books = booksJSON;

function setup(properties = {}) {
  const props = Object.assign({
    books: {
      items: books.items,
      totalItems: books.totalItems,
      info: {
        query: 'python',
        maxResults: 20,
        index: 2
      }
    }
  }, properties);

  const enzymeWrapper = mount(
    <Pagination {...props} />
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<Pagination />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.pagination').length).toExist();
  });

  it('should render a next page link.', () => {
    const { enzymeWrapper } = setup();
    const expectedLink = '/page/1/python/22/';
    const expectedLinkText = 'Next page';

    const actualLink = enzymeWrapper.find(Link).props().to;
    const actualLinkText = enzymeWrapper.find(Link).props().children;
    
    expect(actualLink).toEqual(expectedLink);
    expect(actualLinkText).toEqual(expectedLinkText);
  });
});

