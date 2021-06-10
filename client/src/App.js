import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import CreateContact from './components/pages/CreateContact';
import EditContact from './components/pages/EditContact';
import ViewContact from './components/pages/ViewContact';
import NotFoundPage from './components/pages/NotFoundPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

const Container = styled.div`
  margin: auto;
  overflow: hidden;
  padding: 1.5rem 2rem 4rem 2rem;
`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Container>
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <PrivateRoute
                    exact
                    path='/create'
                    component={CreateContact}
                  />
                  <PrivateRoute
                    exact
                    path='/contacts/:id'
                    component={ViewContact}
                  />
                  <PrivateRoute
                    exact
                    path='/edit/:id'
                    component={EditContact}
                  />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Container>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
