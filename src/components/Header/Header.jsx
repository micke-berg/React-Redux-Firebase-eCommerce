/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './styles.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/utils';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function Header() {
  const { currentUser } = useSelector(mapState);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <h2>OZ|ZO</h2>
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
          <ul>
            <li>
              <Link to="/dashboard">
                My Account
              </Link>
            </li>
            <li>
              <span onClick={() => auth.signOut()}>
                Log out
              </span>
            </li>
          </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Join</Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;
