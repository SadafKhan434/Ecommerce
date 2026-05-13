import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (product) => {
    setItems((currentCart) => {
      const existingItem = currentCart.find((item) => item.title === product.title);
      if (existingItem) {
        return currentCart.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeItemFromCartHandler = (title) => {
    setItems((currentCart) => currentCart.filter((item) => item.title !== title));
  };

  //const changeQuantityHandler = (title, newQuantity) => {
    //setItems((currentCart) =>
      //currentCart.map((item) =>
      //  item.title === title ? { ...item, quantity: newQuantity } : item
     // )
    //);
 // };
  
  const changeQuantityHandler = (title, newQuantity) => {
    // Drop item from array if quantity hits zero or less
    if (newQuantity <= 0) {
      setItems((currentCart) => currentCart.filter((item) => item.title !== title));
      return;
    }

    setItems((currentCart) =>
      currentCart.map((item) =>
        item.title === title ? { ...item, quantity: Number(newQuantity) } : item
      )
    );
  }

  const clearCartHandler = () => {
    setItems([]);
  };

  const cartContextValue = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    changeQuantity: changeQuantityHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
