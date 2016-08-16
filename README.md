React Books
===========

A demonstration of a simple React + Redux application. It fetches metadata from the Google Books API.

Demo it here: [React Books App](https://pashasc.github.io/react_books/ "React Books App")

![alt tag](https://github.com/pashasc/react_books/blob/master/src/static/images/screen.png)

This app demonstrates good practices structuring for building a React + Redux application. It uses webpack for compiling javaScript written in ES6 format and running a dev server. Setup is simple. Simply install the npm packages, ```npm install```. Then run a server, ```npm run server``` and visit ```http://localhost:8080/webpack-dev-server/```.

Script commands include; (tests not included yet, coming soon)

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

1. **You change the UI by changing the state.**

    You can't use jQuery to 'hide()' and 'show()' elements. If you are using jQuery at all in React, you're probably doing it wrong (don't use jQuery in react). In react, you would set a boolean value on a state attribute when you want to 'hide' an element. React will automatically re-render a component when it's state changes. In the 'jsx' the component returns, you would have a conditional around that element that excludes it if the state boolean hides it.

2. **You can't mutate state.**

    You may be used to changing the value of attributes and variables on the fly and passing them around. This is bad practice in React and there are good reasons for it. In a React + Redux app, you can update state by dispatching it with an action to a reducer. Reducers are pure functions which store a copy of a new state. 

    You can use React Immutability helpers for creating copies of new state that merge new objects into lists, push objects into array etc..

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

5. *store.js*

    This file should contain a Redux store of all the reducers.

6. **app.js**

    Initialize your application in this file.

6. **router.js**

    Create routes in this file. Use Reacts router <Link> to create links that use routes. It is best practice to use routes for displaying pages of content so that people can link to them and the browser history (back button) works for them.




