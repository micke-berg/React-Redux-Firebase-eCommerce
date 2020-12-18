import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './default.scss';

// Layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomePageLayout';

import HomePage from './pages/Homepage/HomePage';
import Registration from './pages/Registration/Registration';
import LoginPage from './pages/LoginPage/LoginPage';

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
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <LoginPage />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
