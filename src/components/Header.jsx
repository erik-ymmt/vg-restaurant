import React from 'react';
import { useContext } from 'react';
import cartContext from '../context/cartContext';

import { RiShoppingCartFill } from 'react-icons/ri';
import './Header.css';
import Cart from './Cart';

function Header() {
  const { cartItems, cartDisplay,setCartDisplay } = useContext(cartContext);

  const items = cartItems.reduce((acc, cur) => cur.qtt + acc, 0);
  return (
    <>
      <header>
        <h2>RESTAURANT VG</h2>
        <div className="header__cart">
          {
            <RiShoppingCartFill
              size="1.5rem"
              color=""
              onClick={() => setCartDisplay(!cartDisplay)}
            />
          }
          <span
            className="header__items_counter"
            onClick={() => setCartDisplay(!cartDisplay)}
          >
            {items}
          </span>
        </div>
      </header>
      <Cart display={cartDisplay} />
    </>
  );
}

export default Header;
