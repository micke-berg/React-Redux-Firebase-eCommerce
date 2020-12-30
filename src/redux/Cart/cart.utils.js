export const existingCartItem = ({
  prevCartItems,
  nextCartItem,
}) => prevCartItems.find(
  (cartItem) => cartItem.documentID === nextCartItem.documentID,
);

export const handleAddToCart = ({
  prevCartItems,
  nextCartItem,
}) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map((cartItem) => (cartItem.documentID === nextCartItem.documentID
      ? {
        ...cartItem,
        quantity: cartItem.quantity + quantityIncrement,
      } : cartItem));
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveCartItem = ({
  prevCartItems,
  cartItemToRemove,
}) => prevCartItems.filter((item) => item.documentID !== cartItemToRemove.documentId);

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce,
}) => {
  // eslint-disable-next-line no-shadow
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem.documentID === cartItemToReduce.documentID,
  );

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.documentID !== existingCartItem.documentID,
    );
  }

  return prevCartItems.map((cartItem) => (cartItem.documentID === existingCartItem.documentID
    ? {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    } : cartItem));
};
