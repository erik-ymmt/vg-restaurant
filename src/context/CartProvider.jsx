import PropTypes from "prop-types"
import React, { useState } from 'react';
import context from './cartContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartDisplay, setCartDisplay] = useState(false);

  return (
    <context.Provider value={{ cartItems, setCartItems, cartDisplay, setCartDisplay }}>
      {children}
    </context.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.any
}

export default CartProvider;
