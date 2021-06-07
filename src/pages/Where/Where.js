import React from 'react'
import {Layout, Card, Row, Col} from 'antd'

import './Where.css'

export default function Where() {
  const {Content} = Layout
  const {Meta} = Card
  return (
    <Layout>
      <Content className="contenido">
        <div className="contenedor">
          <Row>
            <Col span={24}>
              <div className="titulo">
                <h1>Lugares</h1>
              </div>
            </Col>
          </Row>
          <Row className="contenedor imagenes">
            <Col span={8}>
              <Card
                hoverable
                style={{width: 240}}
                cover={
                  <img
                    alt="example"
                    src="https://www.eluniversal.com.co/binrepository/1049x700/0c0/0d0/none/13704/RVGX/estadio-2_3798991_20201027143730.jpg"
                  />
                }
              >
                <Meta title="Estadio Metropolitano" />
              </Card>
            </Col>

            <Col span={8}>
              <Card
                hoverable
                style={{width: 240}}
                cover={
                  <img
                    alt="example"
                    src="https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2017/10/27/02.jpg?itok=7lA9cQXw"
                  />
                }
              >
                <Meta title="Malecón Turístico" />
              </Card>
            </Col>

            <Col /* span={8} */>
              {' '}
              {/* COMENTÉ ESA PARTE EN LAS ULTIMAS FOTOS PORQUE CREABA UN MARGIN TODO EXTRAÑO Y HACÍA QUE EL CONTENIDO NO SE CENTRARA CORRECTAMENTE */}
              <Card
                hoverable
                style={{width: 240}}
                cover={
                  <img
                    alt="example"
                    src="https://clena.org/wp-content/uploads/2018/04/DSC5323.jpg"
                  />
                }
              >
                <Meta title="Plaza de la Aduana" />
              </Card>
            </Col>
          </Row>
          <Row className="contenedor imagenes">
            <Col span={8}>
              <Card
                hoverable
                style={{width: 240}}
                cover={
                  <img
                    alt="example"
                    src="https://viajandox.com.co/uploads/Museo%20del%20Caribe_3.jpg"
                  />
                }
              >
                <Meta title="Parque Cultural del Caribe" />
              </Card>
            </Col>

            <Col span={8}>
              <Card
                hoverable
                style={{width: 240}}
                cover={
                  <img
                    alt="example"
                    src="https://wyndhamgardenbarranquilla.com/wp-content/uploads/2018/05/Que-hacer-en-Barranquilla-02.jpg"
                  />
                }
              >
                <Meta title="Bocas de Ceniza" />
              </Card>
            </Col>

            <Col /* span={8} */>
              <Card
                hoverable
                style={{width: 240}}
                cover={
                  <img
                    alt="example"
                    src="https://www.las2orillas.co/wp-content/uploads/2019/08/La-ventana-al-mundo-01.jpg"
                  />
                }
              >
                <Meta title="Ventana al Mundo" />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}
