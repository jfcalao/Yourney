import "./style.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LoginOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

/* const {SubMenu} = Menu */
const Navigation = () => {
  const [state, setState] = useState({
    current: "where",
  });

  const handleClick = (e) => {
    console.log("click ", e);
    setState({ current: e.key });
  };

  const { current } = state;
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item key="where" icon={<MailOutlined />}>
        <Link to="/where">¿Dónde ir?</Link>
      </Menu.Item>
      <Menu.Item key="what" icon={<AppstoreOutlined />}>
        <Link to="/what">¿Qué hacer?</Link>
      </Menu.Item>
      <Menu.Item key="maps" icon={<AppstoreOutlined />}>
        <Link to="/maps">Mapas</Link>
      </Menu.Item>
      <Menu.Item className="login-navbar" key="signun" icon={<EditOutlined />}>
        <Link to="/signup">Registrarse</Link>
      </Menu.Item>
      <Menu.Item className="login-navbar" key="signin" icon={<LoginOutlined />}>
        <Link to="/login">Ingresar</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
