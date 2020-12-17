import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './default.scss';

import HomePage from './pages/Homepage/HomePage';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
