import React, { Fragment } from 'react';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import alert from './components/auth/aler';
// react alert

// states start
import ContactState from './context/contact/ContactState';
import AuthState from './context/Auth/AuthState';
import AlertState from './context/Aert/AlertState';
//  states end
import setAuthToken from './utils/setAuthToken';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
if (localStorage.token) {
  setAuthToken(localStorage.token)
}


const App = ({ }) => {
  return (

    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/alert" component={alert}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>

  );
}

export default (App)
