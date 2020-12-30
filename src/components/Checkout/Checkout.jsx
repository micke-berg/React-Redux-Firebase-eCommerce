import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selectors';
import Button from '../forms/Button/Button';
import Item from './Item/Item';
import './Checkout.scss';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const Checkout = () => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  const errorMessage = 'Your cart is empty';

  return (
    <div className="checkout">
      <h1>
        Checkout
      </h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <th>
                          Product
                        </th>
                        <th>
                          Description
                        </th>
                        <th>
                          Quantity
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Remove
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.productName}>
                          <td>
                            <Item {...item} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <h3>
                                    Total: €
                                    {' '}
                                    {total}
                                  </h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <Button onClick={() => history.goBack()}>
                                    Continue Shopping
                                  </Button>
                                </td>
                                <td>
                                  <Button>
                                    Checkout
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="errorMessage">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
