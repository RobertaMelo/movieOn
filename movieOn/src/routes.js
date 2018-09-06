import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/home-page';
import DetailPage from './containers/detail-page';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/home-page' component={HomePage}/>
      <Route path='/detail-page/:imdbID' component={DetailPage}/>
    </Switch>
  </main>
)

export default Routes;