import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { auth } from './firebase/utils';
import { auth, handleUserProfile } from './firebase/utils';
import './default.scss';

// Layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomePageLayout';

import HomePage from './pages/Homepage/HomePage';
import Registration from './pages/Registration/Registration';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(null);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout currentUser={currentUser} setCurrentUser={setCurrentUser}>
              <HomePage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (currentUser ? <Redirect to="/" /> : (
            <MainLayout currentUser={currentUser} setCurrentUser={setCurrentUser}>
              <Registration />
            </MainLayout>
          ))}
        />
        <Route
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : (
            <MainLayout currentUser={currentUser} setCurrentUser={setCurrentUser}>
              <LoginPage />
            </MainLayout>
          ))}
        />
      </Switch>
    </div>
  );
}

export default App;
