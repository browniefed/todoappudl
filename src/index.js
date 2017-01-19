import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Todos from "./todos";
import About from "./about";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Todos} />
      <Route path="todos" component={Todos} />
      <Route path="about" components={About} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
