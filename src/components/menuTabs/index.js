import React from 'react'
import './style.css'

import Food from '../../icons/food'
import Drink from '../../icons/drink'
import Culture from '../../icons/culture'
import City from '../../icons/city'
import Party from '../../icons/party'

const MenuTabs = () => {
  return (
    <div className="menu-tabs-container">
      <div>
        <span>Todos</span>
      </div>
      <div>
        <Food width="32px" height="32px" fill="white" />
        <span>Comida</span>
      </div>
      <div>
        <Drink width="32px" height="32px" fill="white" />
        <span>Bebidas</span>
      </div>
      <div>
        <Culture width="32px" height="32px" fill="white" />
        <span>Cultura</span>
      </div>
      <div>
        <City width="32px" height="32px" fill="white" />
        <span>Sitios</span>
      </div>
      <div>
        <Party width="32px" height="32px" fill="white" />
        <span>Fiesta</span>
      </div>
    </div>
  )
}

export default MenuTabs
