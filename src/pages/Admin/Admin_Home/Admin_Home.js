import React from 'react';
import {Layout,Card,Row,Col} from 'antd';

import './Admin_Home.css'; 

export default function Admin_Home(){
    const {Header,Content,Sider,Footer} = Layout;
    const {Meta} = Card;
    return(
        <Layout>
            <Header className="cabecera">
                
            </Header>
            <Content>
                <div className="contenedor">
                    <Row>
                        <Col span={24}>
                         <h1>Eventos</h1>
                        </Col>
                    </Row>
                    <Row className="contenedor imagenes">
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                    </Row>

                </div>
               
               
            </Content>
            <Footer>

            </Footer>
        </Layout>
    )
}