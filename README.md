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