import React from 'react';
import './App.scss';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {MainView} from '../HomePage/MainView/MainView';
import {SearchSite} from '../SearchSite/SearchSite';
import { NotFound } from '../NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={MainView} />
        <Route path='/psy-i-koty' component={SearchSite} />
        <Route path='/male-zwierzeta' component={SearchSite} />
        <Route path='/gady-i-plazy' component={SearchSite} />
        <Route path='/ptaki' component={SearchSite} />
        <Route path='/ryby' component={SearchSite} />
        <Route path='/egzotyczne' component={SearchSite} />
        <Route path='' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
