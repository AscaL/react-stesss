import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Main = require('../components/Main'); // TODO: change to import
const Home = require('../components/Home'); // TODO: change to import

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;

// <Route path="playerOne" header="Player One" component={PromptContainer} />
// <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
// <Route path="battle" component={ConfirmBattleContainer} />
// <Route path="result" component={ResultContainer} />
