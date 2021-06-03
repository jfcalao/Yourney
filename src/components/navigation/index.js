import "./style.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";

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
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="where" icon={<MailOutlined />}>
        ¿Dónde ir?
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
        icon={<AppstoreOutlined />}
      >
        Registrarse
      </Menu.Item>
      <Menu.Item
        className="login-navbar"
        key="signin"
        icon={<AppstoreOutlined />}
      >
        Ingresar
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
