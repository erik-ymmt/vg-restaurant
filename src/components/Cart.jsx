import PropTypes from 'prop-types';
import React from 'react';
import { useContext } from 'react';
import cartContext from '../context/cartContext';

import { IoIosArrowDroprightCircle } from 'react-icons/io';

import './Cart.css';

function Cart() {
  const { cartItems, setCartItems, cartDisplay, setCartDisplay } =
    useContext(cartContext);

  const totalPrice = cartItems.reduce(
    (acc, cur) => cur.price * cur.qtt + acc,
    0
  );

  const removeItem = (e) => {
    const itemName = e.target.className;
    const newCart = cartItems.filter((item) => itemName !== item.name);
    setCartItems(newCart);
  };

  const finishOrder = () => {
    setCartItems([]);
    alert('Your order has been placed, please wait.');
  };

  return (
    <div className={`cart__container__${String(cartDisplay)}`}>
      <div className="cart__header">
        <h2 className="cart__title">Cart</h2>
        <div
          className="cart__minimize"
          onClick={() => setCartDisplay(!cartDisplay)}
        >
          <span>Minimize cart</span>
          <IoIosArrowDroprightCircle />
        </div>
      </div>
      <div className="cart__all_items_container">
        {cartItems.length === 0 ? (
          <p>Empty cart, please select items on the menu.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart__item_container" key={`cart_${item.name}`}>
              <span>{`${item.qtt}x`}</span>
              <h3>{item.name}</h3>
              <h4>{`R$ ${item.price.toFixed(2)}`}</h4>
              <button onClick={(e) => removeItem(e)} className={`${item.name}`}>
                remove
              </button>
            </div>
          ))
        )}
      </div>
      <h3 className="cart__total_price">{`Total: R$ ${totalPrice.toFixed(
        2
      )}`}</h3>
      <button className="cart__order_btn" onClick={finishOrder}>
        Order
      </button>
    </div>
  );
}

Cart.propTypes = {
  display: PropTypes.bool,
};

export default Cart;
