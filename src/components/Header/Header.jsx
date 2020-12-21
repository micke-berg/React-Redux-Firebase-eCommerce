/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

function Header({ currentUser }) {
  return (
    <header className="header">
      <div className="wrapper">
        {/* <div className="men-women">
          <ul>
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
          </ul>
        </div> */}
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
