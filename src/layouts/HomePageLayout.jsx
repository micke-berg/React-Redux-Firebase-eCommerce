import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function HomepageLayout(props) {
  const { children } = props;
  return (
    <div className="full-height">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomepageLayout;
