import { Carousel } from "antd";

const contentStyle = {
  height: "80vh",
  width: "100%",
  /*  color: '#fff', */
  /* lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79', */
  /* objectFit: 'cover', */
};

const Slider = () => {
  return (
    <Carousel className="slider" autoplay>
      <div>
        <img
          style={contentStyle}
          src="https://static11.com-hotel.com/uploads/destination/29623/photo/colombia-atlantico-barranquilla_1475073957.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://www.kienyke.com/sites/default/files/2021-02/Carnaval-de-Barranquilla-2021-1_1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://www.elheraldo.co/sites/default/files/articulo/2020/03/04/estadiometropolitano.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://i.ytimg.com/vi/CdO9TFDiR0Y/maxresdefault.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://m.eltiempo.com/uploads/2018/12/12/5c11d07657f16.jpeg"
          alt=""
        />
      </div>
    </Carousel>
  );
};
export default Slider;
