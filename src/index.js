import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Login from './components/login-panel.js';
import Notfound from './notfound';

const routing = (
  <Router>
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          Menu
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/login">
          Login
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById('main_content'));
