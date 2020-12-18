import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <h2>LOGO</h2>
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
