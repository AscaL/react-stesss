import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Main = require('../components/Main'); // TODO: change to import
const Home = require('../components/Home'); // TODO: change to import
const PromptContainer = require('../containers/PromptContainer');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
