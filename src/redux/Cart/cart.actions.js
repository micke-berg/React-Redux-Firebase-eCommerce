import cartTypes from './cart.types';

const addProduct = (nextCartItem) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItem,
});

export default addProduct;
