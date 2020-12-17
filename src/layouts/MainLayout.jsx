import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MainLayout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="main">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
