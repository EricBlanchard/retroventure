import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app';
import RetroSelection from './components/RetroSelection';

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/RetroSelection' component={RetroSelection} />
    </Switch>
);
export default Routes;