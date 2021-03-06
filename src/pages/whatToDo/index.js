import React from 'react'
import './style.css'

import Gallery from '../../components/gallery'
import {gallery} from '../../json/whatToDoGallery'
import MenuTabs from '../../components/menuTabs'

const WhatToDo = () => {
  return (
    <div className="what-to-do-container">
      <div className="what-to-do-header">
        <div>
          <h1>¿Qué hacer?</h1>
          <p>Conozca las experiencias imperdibles en Barranquilla.</p>
        </div>
      </div>
      <MenuTabs/>
      <Gallery gallery={gallery} />
    </div>
  )
}

export default WhatToDo
