import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

const Main = require('../components/Main'); // TODO: change to import
const Home = require('../components/Home'); // TODO: change to import

const routes = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="/home" component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
