/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import { addProduct } from '../../redux/Cart/cart.actions';
import Button from '../forms/Button/Button';
import './ProductCard.scss';

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productName,
    productThumbnail,
    productPrice,
    productDescription,
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID),
    );

    return () => {
      dispatch(
        setProduct({}),
      );
    };
  }, []);

  const handleAddToCart = (prod) => {
    if (!prod) return;
    dispatch(
      addProduct(prod),
    );
    history.push('/cart');
  };

  const configAddToCartButton = {
    type: 'button',

  };
  return (
    <div className="ProductCard">
      <div className="hero">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>
              {productName}
            </h1>
          </li>
          <span>
            €
            {' '}
            {productPrice}
          </span>
          <li />
          <li>
            <div className="addToCart">
              <Button
                {...configAddToCartButton}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDescription }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
