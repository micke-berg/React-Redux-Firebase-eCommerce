/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

function Header(props) {
  const { currentUser } = props;
  console.log(currentUser);
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <h2>LOGO</h2>
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>Log out</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
