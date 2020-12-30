/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from '../../../redux/Cart/cart.actions';

const Item = (product) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
  } = product;

  const handleRemoveCartItem = (documentId) => {
    dispatch(
      removeCartItem({
        documentId,
      }),
    );
  };

  const handleAddProduct = (prod) => {
    dispatch(addProduct(prod));
  };

  const handleReduceItem = (prod) => {
    dispatch(
      reduceCartItem(prod),
    );
  };

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>
            <p>
              {productName}
            </p>
          </td>
          <td>
            <span
              className="cartBtn"
              onClick={() => handleReduceItem(product)}
            >
              {'< '}
            </span>
            <span>
              {quantity}
            </span>
            <span className="cartBtn" onClick={() => handleAddProduct(product)}>
              {' >'}
            </span>
          </td>
          <td>
            €
            {' '}
            {productPrice}
          </td>
          <td align="center">
            <span
              className="cartBtn"
              onClick={() => handleRemoveCartItem(documentID)}
            >
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
