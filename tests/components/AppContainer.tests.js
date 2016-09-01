
import expect from 'expect';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import store from 'store';
import * as c from 'constants';
import booksJSON from 'fixtures/books.json';
import { PureAppContainer } from 'components/containers/AppContainer';


const {
  createCollection
} = collectionsModule.api;

const { shallow, mount } = enzyme;
const collections = collectionsJSON;

function setup(opts) {
  opts || (opts = {});

  const props = opts.props || {
    collections: collections,
    content: [{}],
    route: {
      'path': expect.createSpy()
    },
    params: {
      'collection_id': '12345'
    },
    routeParams:  {},
    collectionsState: {
      'collections': collections,
      'collection': expect.createSpy()
    },
    'errors': {
      'exist': true,
      'description': '',
      'css_class': ''
    },
    'success': {
      'exist': false,
      'description': '',
      'css_class': ''
    }
  };

  const enzymeWrapper = mount(
    <Provider store={store}>
      <PureCreateCollection {...props} />
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

    expect(enzymeWrapper.find(CreateCollectionView).length).toExist();
    expect(enzymeWrapper.find(LibraryNavigation).length).toExist();
  });

  it('will mount', () => {
    var spy = sinon.spy(PureCreateCollection.prototype, 'componentWillMount');
    const { enzymeWrapper } = setup();
    expect(spy.calledOnce).toExist();
    spy.restore();
  });

  it('should call onNameChangeHandler() on name changes.', () => {
    var spy = sinon.spy(PureCreateCollection.prototype, 'onNameChangeHandler');

    const { enzymeWrapper } = setup();
    const nameField = enzymeWrapper.find('input');
    const event = { target: { value: 'Example colleciton name' } };
    nameField.simulate('change', event);

    expect(spy.calledOnce).toExist();
    spy.restore();
  });

  it('should call onDescriptionChange() on description changes.', () => {
    var spy = sinon.spy(PureCreateCollection.prototype, 'onDescriptionChangeHandler');

    const { enzymeWrapper } = setup();
    const descriptionField = enzymeWrapper.find('textarea');
    const event = { target: { value: 'Example colleciton name' } };
    descriptionField.simulate('change', event);

    expect(spy.calledOnce).toExist();
    spy.restore();
  });

  it('should render an error if user enters an existing collection name.', () => {
    const expectedError = 'You have a collection with this name, did you mean something else?';

    const { enzymeWrapper } = setup();
    const nameField = enzymeWrapper.find('input');
    const event = { target: { value: 'My JavaScript Collection' } };
    nameField.simulate('change', event);

    const actualError = enzymeWrapper.find('.error').last().text();
    expect(actualError).toEqual(expectedError);
  });

  it('should render an error if user did not enter a name.', () => {
    const expectedError = 'You must enter a name.';

    const { enzymeWrapper } = setup();
    const nameField = enzymeWrapper.find('input');
    const event = { target: { value: '' } };
    nameField.simulate('change', event);
    enzymeWrapper.find('.save-button').simulate('click');

    const actualError = enzymeWrapper.find('.error').last().text();
    expect(actualError).toEqual(expectedError);
  });

  it('should dispatch a request to create a new collection if user enters a name and clicks the save button.', () => {
    const { enzymeWrapper } = setup();

    const mock = new MockAdapter(axios);
    mock.onPost(`${c.BOWERBIRD_ENDPOINT}/collections/`)
      .reply(200, { response: { data: collections[0] }
    });

    const nameField = enzymeWrapper.find('input');
    const event = { target: { value: 'My new collection' } };
    nameField.simulate('change', event);
    enzymeWrapper.find('.save-button').simulate('click');

    expect(store.getState().collectionsState.isFetching).toExist();
    mock.reset();
  });
});

