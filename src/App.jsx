import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/utils';
import './default.scss';

// Layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomePageLayout';

import HomePage from './pages/Homepage/HomePage';
import Registration from './pages/Registration/Registration';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let authListener = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) {
        setCurrentUser(null);
      }
      setCurrentUser(userAuth);
      authListener();
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout currentUser={currentUser}>
              <HomePage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout currentUser={currentUser}>
              <LoginPage />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
