import React from 'react';
import './AuthWrapper.scss';

const AuthWrapper = ({ headline, children }) => (
  <div className="auth-wrapper">
    <div className="wrap">
      {headline && <h2>{headline}</h2>}
      <div className="children">
        {children && children}
      </div>
    </div>
  </div>
);

export default AuthWrapper;
