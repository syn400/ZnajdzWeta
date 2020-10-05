import React from 'react';
import './App.scss';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainView } from '../HomePage/MainView/MainView';
import { SearchSite } from '../SearchSite/SearchSite';
import { NotFound } from '../NotFound/NotFound';
import { RegisterSite } from '../RegisterSite/RegisterSite';
import { AuthProvider } from '../../Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={MainView} />
          <Route exact path='/rejestracja' component={RegisterSite} />
          <Route exact path="/:animals" component={SearchSite} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
