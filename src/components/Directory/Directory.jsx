/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';
import ShopWomen from '../../assets/images/shopWomens.jpg';
import ShopMen from '../../assets/images/shopMens.jpg';

function Directory() {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >

          <a href="#">Shop Womens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a href="#">Shop Mens</a>
        </div>
      </div>
    </div>
  );
}

export default Directory;
