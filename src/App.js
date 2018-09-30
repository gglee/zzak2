import React from 'react';
import AppTemplate from 'components/base/AppTemplate';
import { Route } from 'react-router-dom';
import TweetsPage from 'pages/TweetsPage';
import AuthPage from 'pages/AuthPage';
import HeaderContainer from 'containers/base/HeaderContainer';

const App = () => (
  <AppTemplate header={<HeaderContainer />}>
    <Route exact path="/" component={TweetsPage} />
    <Route path="/user/:username" component={TweetsPage} />
    <Route path="/tags/:tag" component={TweetsPage} />

    <Route path="/:authType(login|register)" component={AuthPage} />
  </AppTemplate>
);

export default App;
