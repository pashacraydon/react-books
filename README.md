React Books
===========

A demonstration of a simple React + Redux application. It fetches metadata from the Google Books API.

Demo it here: [React Books App](https://pashasc.github.io/react_books/ "React Books App")

![alt tag](https://github.com/pashasc/react_books/blob/master/src/static/images/screen.png)

This app uses webpack for compiling javaScript written in ES6 format and running a dev server. Simply install the npm packages, ```npm install```. Then run a server, ```npm run server``` and visit ```http://localhost:8080/webpack-dev-server/```.

Script commands include; (todo: more tests)

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

Whats new in React
==================

If you are coming from Backbone, there are a few differences in React. 

1. **Whats different about React.**

    You update the UI by updating the state

    Using jQuery you might write some code like this to show or hide an element.

.. code:: javaScript
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

.. code:: javaScript
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

1. **/actions**

    The only way to mutate state in a react app is to emit an action. An action is a plain javaScript object which describes what happened.

    The actions folder should contain;
      * A file that exports all of the action types.
      * Files that export specific actions
      * Files that export more general, reusable actions

2. **/api**

    Functions that facilitate network requests should go in the API folder. These functions use Async Actions to perform requests, dispatch the state of the request then store the response.

3. **/components**

    Components will make up the parts of your application. They are divided between container components and presentational components (layouts and views).

    Container components are smart components. They will deal with state and manage the other two (or more) components. State is passed into them which they render using view and layout  components. 

    View and layout components are dumb. They should only render state but never mutate it.

    The idea for this separation of components is to make them more reusable. Particularly the dumb components. Keep this in mind when you are structuring your application. Also, the more specific you name a component, the less reusable it will become. Remember this and try to make your components reusable.

4. **/reducers**

    Reducers maintain a state tree in redux. Reducers are pure functions which do not ever mutate / change state but rather create a copy of a new state. This folder should contain files for individual types of reducers. There should be an index.js file in this folder which combines all the reducers for the store.

5. **store.js**

    This file should contain a Redux store of all the reducers.

6. **app.js**

    Initialize your application in this file.

6. **router.js**

    Create routes in this file. Use Reacts router <Link> to create links that use routes. It is best practice to use routes for displaying pages of content so that people can link to them and the browser history (back button) works for them.




