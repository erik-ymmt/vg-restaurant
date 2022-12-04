import React from 'react'

import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi'

import './Menu.css'
import SubMenu from './SubMenu';
import { dishes, drinks } from '../assets/menuItems';

function Menu() {
  return (
    <main className='menu__container'>
      <h2>Main Menu</h2>
      <div className='menu__submenus'>
        <SubMenu title='Dishes' icon={<GiForkKnifeSpoon color='#DCCA87' />} items={dishes} />
        <SubMenu title='Drinks' icon={<BiDrink color='#DCCA87' />} items={drinks} />
      </div>
    </main>
  )
}

export default Menu