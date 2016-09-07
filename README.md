React Books
===========

A demonstration of a simple React + Redux application. It fetches metadata from the Google Books API.

Demo it here: [React Books App](https://pashasc.github.io/react-books/ "React Books App")

![alt tag](https://github.com/pashasc/react_books/blob/master/src/static/images/screen.png)

This app uses webpack for compiling javaScript written in ES6 format and running a dev server. Simply install the npm packages, ```npm install```. Then run a server, ```npm run server``` and visit ```http://localhost:8080/webpack-dev-server/```.

Table of contents
=================

1. <a href="#user-content-whats-different-about-react">What's different about react</a>
2. <a href="#user-content-explanation-of-app-structure">Explanation of app structure</a>
3. <a href="#user-content-testing">Testing</a>


Script commands
===============

| command  | info  |
|---|---|
| npm run server   | runs a webpack server, visit it at http://localhost:8080/webpack-dev-server/  |
| npm run build  |  compile all the webpack files in /src to /build |
| npm run build:debug | include an informative error stack trace |
| npm run watch  | watch for changes to files and compile them automatically  |
| npm run watch:debug | include an informative error stack trace while watching for changes |
| npm run tests  | run all of the tests |
| npm run watch:test | watch for changes to test files and compile them automatically |
| npm run watch:test:debug | include an informative error stack trace while watching for changes to the test files |

Whats different about React
===========================

**You update the UI by updating the state.**

Using jQuery you might write some code like this to show or hide an element.

    $('.element').on('click', function (event) {
      event.preventDefault();
      var $dropdown = $(this).closest('.my-dropdown');

      if ($dropdown.is(':visible')) {
        $dropdown.hide();
      }
      else {
        $dropdown.show();
      }
    });

In React the parts of your interface are broken up into components. A component returns the html it should show based on it’s state.

Simply changing the state of a component will cause it to re-render and show the new state, completely handled by React, with no action on your part.

So the above familiar bit of jQuery might look like this in React.

    import React, { Component } from 'react';

    export default class MyDropDown extends Component {
      constructor () {
        super();

        this.state = {
          'is_hidden': true
        }

        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
      }

      showDropdown (event) {
        this.setState({ 'is_hidden': false });
      }

      hideDropdown (event) {
        this.setState({ 'is_hidden': true });
      }

      render () {
        return (
          {!this.state.is_hidden &&
          <div className="my-dropdown">
            <div>Dropdown text</div>
            <a href="#"
              onClick={this.hideDropdown}>
            Hide Dropdown
            </a>
          </div>}
          {this.state.is_hidden &&
          <a href="#"
            onClick={this.showDropdown}>
          Show Dropdown
          </a>}
        )
      }
    }


Explanation of app structure
============================

1. **/components**

    Components will make up the parts of your application. They are divided between container components and the rest of the components.

    Container components are smart components. They will deal with state and manage the other components that they render, pass props or callbacks into. 

    Container components listen to state updates via Redux Connect. They automatically pick up state changes which they pass down to their 'child' components as props. 

    The rest of the components should be 'dumb' or 'presentational' components. This way they are reusable, so they shouldn't handle much state.

2. **/modules**

    Modules are the parts of the application which deal with state. They are self-contained units which should expose public functions in index.js for other parts of the application.

    A module will usually contain these files.

    1. **actionTypes.js**
    2. **actions.js** 

        The only way to mutate state in a react app is to emit an action. An action is a plain javaScript object which describes what happened. ActionTypes are kinds of actions.

    3. **reducer.js**

        Reducers maintain a state tree in redux. Reducers are pure functions which do not mutate / change state but rather create a copy of a new state. 

    3. **api.js**

        Functions that facilitate network requests should go in the API file. These functions use Redux Thunk Async Actions to perform requests, dispatch the state of the request then store the response.

        You can dispatch an action to facilitate these. Example; 

            let searchInfo = {
              'query': 'python books',
              'index': 1,
              'maxResults': 20
            };

            store.dispatch(getBooks(searchInfo));

        This triggers two actions. The first action ```dispatch(getBooksRequest());``` will update the books state ```isFetching``` to be true so the UI can show a spinner while the request is handled. The second action, ```dispatch(getBooksSuccess(response, searchInfo))``` happens when the request is resolved. It sends the response to the Redux store for storing the books information in the reducer.

            export function getBooks(searchInfo) {
              const { query, maxResults, index } = searchInfo;
              return function (dispatch) {
                dispatch(getBooksRequest());
                return axios.get(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(query)}&startIndex=${index}&maxResults=${maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
                  .then(response => dispatch(getBooksSuccess(response, searchInfo))
                );
              }
            }

        This function returns a Promise so in the component that dispatched the action ```store.dispatch(getBooks(searchInfo));``` you can include additional logic if it's necessary.

            store.dispatch(getBooks(searchInfo))
              .then((response) {
                ...
              });

    4. **index.js**

        Modules should expose functions via this file. You should not directly import functions in modules from other parts of the application to use. This is best practice to avoid recursive imports and keep code decoupled. 

        For example, this is wrong;

            import getBooks from 'modules/books/api';

        This is right;

            import * as books from 'modules/books';
            const { getBooks } = books.api;

        If another part of the application needs to dip into a module to manipulate some things, the module should instead expose a function via index.js that does the manipulations that other parts of the app can run instead.


3. **reducers.js**
  
    This file combines all of the reducers from each module for the Redux Connect store. When state changes happen in the modules, components can listen to the changes via Redux Connect and pick up the exports here.

        var reducers = combineReducers({
          booksState: books.reducer,
          bookDetailState: bookDetail.reducer
        });

    Example connecting to the Redux store.

        class AppContainer extends Component {

          render () {
            const { booksState, bookDetailState } = this.props;

            return (
              <div className="app-wrapper">
                ...
              </div>
            )
          }
        }

        AppContainer.propTypes = {
          booksState: PropTypes.object.isRequired,
          bookDetailState: PropTypes.object.isRequired
        }

        const mapStateToProps = function (store) {
          return {
            booksState: store.booksState,
            bookDetailState: store.bookDetailState
          }
        }

        export default connect(mapStateToProps)(AppContainer);

    Now when dispatching an action, the new state changes will show up in the ```booksState``` props and can be passed down to ```child``` components for UI updates.

4. **store.js**

    This file should contain a Redux store of all the reducers. This file is where you can add middleware such as Redux Thunk. 

5. **app.js**

    Initialize your application in this file.

6. **router.js**

    Create routes in this file. Use Reacts router <Link> to create links that use routes. It is best practice to use routes for displaying pages of content so that people can link to them and the browser history (back button) works for them.


Testing
=======

1. Tests use 'axios-mock-adapter' for mocking the axios network requests.

  Example creating a mock axios request;

      let book = booksJSON.items[0];
      this.mock.onGet(`${c.GOOGLE_BOOKS_ENDPOINT}/${book.id}`)
        .reply(200, { response: { data: book } });

  Check out the npm package for more documentation on using axios-mock-adapter. Also, check out ```tests/modules/book-detail/api.tests.js``` for an example using this to mock a redux store. Also, the Redux documentation is really great.

2. Tests use enzyme for testing components. It has a great API for testing click simulations, mounting to mocks, state changes and more. Check out ```tests/components``` for examples.



