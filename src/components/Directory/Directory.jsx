/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';
import ShopWomen from '../../assets/images/Light-Jackie-1961-python-small-hobo-bag.jpg';
import ShopMen from '../../assets/images/Light-Gucci-Horsebit-1955-small-duffle-bag.jpg';

function Directory() {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a href="#">Shop Mens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a href="#">Shop Womens</a>
        </div>

      </div>
    </div>
  );
}

export default Directory;
