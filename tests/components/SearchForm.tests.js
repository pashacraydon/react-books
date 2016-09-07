
import expect from 'expect';
import React from 'react';
import SearchForm from 'components/SearchForm';

const { mount } = enzyme;

function setup() {
  const enzymeWrapper = mount(
    <SearchForm />
  )

  return {
    enzymeWrapper
  }
}

describe('<SearchForm />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('form').length).toExist();
  });
});


