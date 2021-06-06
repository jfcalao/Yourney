import React, {useEffect, useState} from 'react'
import './style.css'

import Food from '../../icons/food'
import Drink from '../../icons/drink'
import Culture from '../../icons/culture'
import City from '../../icons/city'
import Party from '../../icons/party'

const MenuTabs = () => {
  /*   const [tab, setTab] = useState(initialState)
  useEffect(() => {
    document.getElementById(id);
  }, []) */
  const [tab, setTab] = useState('all')
  function changeColor(id) {
    document.getElementById(tab).classList.remove('active')
    setTab(id)
    document.getElementById(id).classList.add('active')
  }
  return (
    <div className="menu-tabs-container">
      <div className="active" onClick={() => changeColor('all')} id="all">
        <span>Todos</span>
      </div>
      <div id="food" onClick={() => changeColor('food')}>
        <Food width="32px" height="32px" fill="white" />
        <span>Comida</span>
      </div>
      <div id="drink" onClick={() => changeColor('drink')} >
        <Drink width="32px" height="32px" fill="white" />
        <span>Bebidas</span>
      </div>
      <div id="culture" onClick={() => changeColor('culture')} >
        <Culture width="32px" height="32px" fill="white" />
        <span>Cultura</span>
      </div>
      <div id="city" onClick={() => changeColor('city')} >
        <City width="32px" height="32px" fill="white" />
        <span>Sitios</span>
      </div>
      <div id="party" onClick={() => changeColor('party')} >
        <Party width="32px" height="32px" fill="white" />
        <span>Fiesta</span>
      </div>
    </div>
  )
}

export default MenuTabs
