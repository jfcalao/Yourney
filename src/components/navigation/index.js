import "./style.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LoginOutlined,
  EditOutlined 
} from "@ant-design/icons";
import { useState } from "react";
import {Link} from 'react-router-dom';

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
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="menu-bar">
      <Menu.Item key="where" icon={<MailOutlined />}>
        <a href="#hacer">
         ¿Dónde ir?
        </a>
       
      </Menu.Item>
      <Menu.Item key="what" icon={<AppstoreOutlined />}>
        ¿Qué hacer?
      </Menu.Item>
      <Menu.Item key="maps" icon={<AppstoreOutlined />}>
        Mapas
      </Menu.Item>
      <Menu.Item
        className="login-navbar"
        key="signun"
        icon={<EditOutlined />}
      >
        Registrarse
      </Menu.Item>
      <Menu.Item
        className="login-navbar"
        key="signin"
        icon={<LoginOutlined />}
      >
        Ingresar
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
