import './style.css'
import {Menu} from 'antd'
import {
  AppstoreOutlined,
  LoginOutlined,
  EditOutlined,
  CompassOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import {useState} from 'react'
import {Link} from 'react-router-dom'

/* const {SubMenu} = Menu */
const Navigation = () => {
  const [estado, setEstado] = useState({
    current: 'where',
  })

  const handleClick = (e) => {
    console.log('click ', e)
    setEstado({current: e.key})
  }

  const {current} = estado
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item key="where" icon={<CompassOutlined />}>
        <Link to="/where">¿Dónde ir?</Link>
      </Menu.Item>
      <Menu.Item key="what" icon={<AppstoreOutlined />}>
        <Link to="/what">¿Qué hacer?</Link>
      </Menu.Item>
      <Menu.Item className="login-navbar" key="signun" icon={<EditOutlined />}>
        <Link to="/signup">Registrarse</Link>
      </Menu.Item>
      <Menu.Item className="login-navbar" key="signin" icon={<LoginOutlined />}>
        <Link to="/login">Ingresar</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navigation
