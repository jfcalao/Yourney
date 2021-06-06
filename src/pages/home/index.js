import React from 'react'
import Navigation from '../../components/navigation'
import Slider from '../../components/slider'
import {Layout} from 'antd'

import './style.css'
import Gallery from '../../components/gallery'
const index = () => {
  const {Header, Content, Footer} = Layout

  return (
    <Layout>
      <div className="home-container">
        <Content>
          <Slider />
          <div className="home-info">
            <h1>
              Yourney proporciona inteligencia, herramientas y recursos que
              ayudan a la industria del turismo en Barranquilla.
            </h1>
            <p>
              Barranquilla, también conocida como la <strong>‘Arenosa’</strong>{' '}
              o <strong>‘Curramba la Bella’</strong>, es una de las principales
              ciudades de Colombia y un destino turístico de referencia para
              locales y extranjeros.
            </p>
          </div>
          <Gallery />
        </Content>
      </div>
    </Layout>
  )
}

export default index
