
import expect from 'expect';
import React from 'react';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';

const { mount } = enzyme;

function setup() {
  const enzymeWrapper = mount(
    <Header />
  )

  return {
    enzymeWrapper
  }
}

describe('<Header />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('header').length).toExist();
    expect(enzymeWrapper.find(SearchForm).length).toExist();
  });
});


