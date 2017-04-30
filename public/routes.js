import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App.jsx';
import Login from './components/Login/Login.jsx';

export default () => {
  return <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
    </Route>
  </Route>
}
