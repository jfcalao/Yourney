import React from 'react'
import Navigation from '../../components/navigation'
import Slider from '../../components/slider'
import {Layout} from 'antd'

import './style.css'
import Gallery from '../../components/gallery'
import Section from '../../components/section'
import Map from '../../components/map'
const index = () => {
  const {Header, Content, Footer} = Layout

  return (
    <Layout>
      <div className="home-container">
        <Content>
          <Slider />
          {/*           <div className="home-info">
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
          </div> */}
          <Section
            title="Yourney proporciona inteligencia, herramientas y recursos que
            ayudan a la industria del turismo en Barranquilla."
            text="Barranquilla, también conocida como la ‘Arenosa’
            o ‘Curramba la Bella’, es una de las principales
            ciudades de Colombia y un destino turístico de referencia para
            locales y extranjeros."
            backgroundColor="white"
            color="black"
          />
          <Section
            title="¿Qué hacer en Barranquilla?"
            text="Realice un recorrido por las numerosas vistas y experiencias de
        Barranquilla."
            backgroundColor="#ce1212"
            color="white"
          />
          <Gallery />

          <Section
            title="Explora Barranquilla"
            backgroundColor="#ce1212"
            color="white"
          />
          <Map />
        </Content>
      </div>
    </Layout>
  )
}

export default index
