import './App.css'
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Configuracion de rutas
import routes from './config/routes'
import Navigation from './components/navigation'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

//Renderiza ruta padre y pasa rutas hijas al componente
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <route.component routes={route.routes} {...props} />
      )} /*Se usa render porque va a renderizar otras rutas*/
    />
  )
}

export default App
