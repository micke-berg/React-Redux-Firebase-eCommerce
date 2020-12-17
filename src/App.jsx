import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './default.scss';

// Layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomePageLayout';

import HomePage from './pages/Homepage/HomePage';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <HomePage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
