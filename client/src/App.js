import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import CreateContact from './components/pages/CreateContact';
import EditContact from './components/pages/EditContact';
import ViewContact from './components/pages/ViewContact';

import ContactState from './context/contact/ContactState';
import './App.css';

const Container = styled.div`
  margin: auto;
  overflow: hidden;
  padding: 1.5rem 2rem 4rem 2rem;
`;

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/create' component={CreateContact} />
              <Route exact path='/contacts/:id' component={ViewContact} />
              <Route exact path='/edit/:id' component={EditContact} />
              {/*<Route component={NotFoundPage} /> */}
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
