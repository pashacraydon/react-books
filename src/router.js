/**
 * @file router.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Handle url's
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from 'components/containers/AppContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} />
    <Route path="page/:page/:query/" component={AppContainer} />
  </Router>
);