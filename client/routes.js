import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app';
import ChapterSelection from './components/ChapterSelection/ChapterSelection';
import Chapter from './components/Chapter/Chapter'

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/ChapterSelection' component={ChapterSelection} />
      <Route path='/Chapter' component={Chapter} />
    </Switch>
);
export default Routes;