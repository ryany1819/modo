import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import MainContainer from './containers/mainContainer.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/main" component={MainContainer} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
