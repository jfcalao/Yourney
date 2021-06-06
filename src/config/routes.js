import Where from '../pages/Where';


//Layouts
import Home from '../pages/home'
import WhatToDo from '../pages/whatToDo'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/what',
    component: WhatToDo,
    exact: true,
  },
  {
    path: '/where',
    component: Where,
    exact: true,
  }
]

export default routes
