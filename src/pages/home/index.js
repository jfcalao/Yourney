import React from "react";
import Navigation from "../../components/navigation";
import Slider from "../../components/slider";
import { Layout } from "antd";

import "./style.css";
const index = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <div className="home-container">
        
        <Content>
          <Slider />
          <div className="home-info section">
            <h1>
              Yourney proporciona inteligencia, herramientas y recursos que
              ayudan a la industria del turismo en Barranquilla.
            </h1>
            <p>
              Barranquilla, también conocida como la <strong>‘Arenosa’</strong>{" "}
              o <strong>‘Curramba la Bella’</strong>, es una de las principales
              ciudades de Colombia y un destino turístico de referencia para
              locales y extranjeros.
            </p>
          </div>
          <section className="wrapper-hacer section" id="what">
            <div className="hacer">
              <div className=" images">
                <img
                  src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/02/13/thumbs_b_c_f11af34a341c6a1498b1cc1ec4773931.jpg?v=204640"
                  alt=""
                />
              </div>

              <div className=" images">
                <img
                  src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/02/13/thumbs_b_c_f11af34a341c6a1498b1cc1ec4773931.jpg?v=204640"
                  alt=""
                />
              </div>

              <div className=" images">
                <img
                  src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/02/13/thumbs_b_c_f11af34a341c6a1498b1cc1ec4773931.jpg?v=204640"
                  alt=""
                />
              </div>

              <div className=" images">
                <img
                  src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/02/13/thumbs_b_c_f11af34a341c6a1498b1cc1ec4773931.jpg?v=204640"
                  alt=""
                />
              </div>

              <div className=" images">
                <img
                  src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/02/13/thumbs_b_c_f11af34a341c6a1498b1cc1ec4773931.jpg?v=204640"
                  alt=""
                />
              </div>
              <div className=" images">
                <img
                  src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/02/13/thumbs_b_c_f11af34a341c6a1498b1cc1ec4773931.jpg?v=204640"
                  alt=""
                />
              </div>
            </div>
          </section>
        </Content>
      </div>
    </Layout>
  );
};

export default index;
