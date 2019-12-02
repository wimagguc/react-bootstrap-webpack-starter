import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav } from 'react-bootstrap';
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
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact className="nav-link" activeClassName="active" to="/">
            Menu
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/login">
            Login
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById('main_content'));
