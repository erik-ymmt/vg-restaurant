import PropTypes from 'prop-types';
import React from 'react';
import { useContext } from 'react';
import cartContext from '../context/cartContext';

import { RiLeafFill } from 'react-icons/ri';
import './SubMenu.css';

function SubMenu({ title, icon, items }) {
  const { cartItems, setCartItems } = useContext(cartContext);

  const updateCart = (e, item) => {
    const itemName = e.target.className;
    const curItem = cartItems.find((item) => itemName === item.name);
    if (curItem) {
      curItem.qtt += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([
        ...cartItems,
        {
          name: item.name,
          price: item.price,
          qtt: 1,
        },
      ]);
    }
  };

  return (
    <section className="subMenu__container">
      <div>{icon}</div>
      <h2 className="subMenu__title">{title}</h2>
      <div className="subMenu__item_card_container">
        {items.map((item) => (
          <div key={item.name} className="subMenu__item_card">
            <div>
              <h3>
                <RiLeafFill size="18px" color="#DCCA87" />
              </h3>
              <h3 className="subMenu__item_card__title">{item.name}</h3>
              <h4 className="subMenu__item_card__description">
                {item.description}
              </h4>
            </div>
            <div>
              <h3 className="subMenu__item_card__price">
                R$ {item.price.toFixed(2)}
              </h3>
              <button
                className={`${item.name}`}
                onClick={(e) => updateCart(e, item)}
              >
                {' '}
                + Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

SubMenu.propTypes = {
  icon: PropTypes.any,
  items: PropTypes.array,
  title: PropTypes.string,
};

export default SubMenu;
