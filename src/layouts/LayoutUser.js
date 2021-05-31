import React from 'react';
import {Layout} from 'antd';

export default function LayoutUser(){
    const {Header,Content,Footer} = Layout;
    return(
        <div className="contenedor">
            <Layout>
                <Header>
                    Yourney
                </Header>
                <Content>
                    Rutas...
                </Content>
                <Footer>
                    Yourney
                </Footer>
            </Layout>
        </div>
    );
}