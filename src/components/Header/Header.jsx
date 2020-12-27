/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUserStart } from '../../redux/User/user.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
    console.log('signOutUserStart');
  };
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <h2>
              Zo
              <span>|</span>
              oZ
            </h2>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/search">
                Search
              </Link>
            </li>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <div className="callToActions">
          {currentUser && (
          <ul>
            <li>
              <Link to="/dashboard">
                My Account
              </Link>
            </li>
            <li>
              <span onClick={signOut}>
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
