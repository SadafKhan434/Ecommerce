import React from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (title) => {},
  changeQuantity: (title, quantity) => {},
  clearCart: () => {},
});

export default CartContext;
