import React from 'react';
import './default.scss';

import HomePage from './pages/Homepage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
