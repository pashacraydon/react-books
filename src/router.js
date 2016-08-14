/**
 * @file router.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 * Handle url's
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import HomeContainer from 'components/containers/HomeContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer} >
      <Route path="page/:page/:query/:index" component={HomeContainer} />
    </Route>
  </Router>
);