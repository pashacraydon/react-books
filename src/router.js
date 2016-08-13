/**
 * @file router.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Handle url's
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Pages
import BooksContainer from 'components/containers/BooksContainer';

export default (
  <Router history={browserHistory}>
      <Route path="/" component={BooksContainer} />
  </Router>
);