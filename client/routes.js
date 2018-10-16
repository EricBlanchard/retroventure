import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app';
import RetroSelection from './components/RetroSelection/RetroSelection';
import Chapter from './components/Chapter/Chapter'

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/RetroSelection' component={RetroSelection} />
      <Route path='/Chapter' component={Chapter} />
    </Switch>
);
export default Routes;