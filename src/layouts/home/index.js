import React from "react";
import Navigation from "../../components/navigation";
import Slider from "../../components/slider";
import "./style.css";
const index = () => {
  return (
    <div className="home-container">
      <Navigation />
      <Slider />
      <div className="home-info">
        <h1>
          Yourney proporciona inteligencia, herramientas y recursos que ayudan a
          la industria del turismo en Barranquilla.
        </h1>
      </div>
    </div>
  );
};

export default index;
