/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

function Header() {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
    console.log('signOutUserStart');
  };
  return (
    <header className="header">
      <div className="wrapper">

        <nav>
          <ul>
            <li>
              <div className="logo">
                <Link to="/">
                  <h2>
                    ZoZoo.
                  </h2>
                </Link>
              </div>
            </li>
            <li className="search">
              <Link to="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/cart">
                Cart
                {' '}
                (
                {totalNumCartItems}
                )
              </Link>
            </li>
          </ul>
          <ul>
            {currentUser && [
              <li>
                <Link to="/dashboard">
                  My Account
                </Link>
              </li>,
              <li>
                <span onClick={signOut}>
                  Log out
                </span>
              </li>,
            ]}
          </ul>
          <ul>

            {!currentUser && [
              <li>
                <Link to="/registration">Join</Link>
              </li>,
              <li>
                <Link to="/login">Sign In</Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;
