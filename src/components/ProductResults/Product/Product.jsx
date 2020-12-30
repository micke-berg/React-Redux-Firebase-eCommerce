import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/Cart/cart.actions';
import Button from '../../forms/Button/Button';

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    documentID,
    productThumbnail,
    productName,
    productPrice,
  } = product;

  if (!documentID || !productThumbnail || !productName
    || typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button',
  };

  const handleAddToCart = (prod) => {
    if (!prod) return;
    dispatch(
      addProduct(prod),
    );
    history.push('/cart');
  };

  return (

    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="details">
        <ul>
          <li>
            <Link to={`/product/${documentID}`}>
              <span className="name">{productName}</span>
            </Link>
          </li>
          <li>
            <span className="price">
              €
              {' '}
              {productPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
