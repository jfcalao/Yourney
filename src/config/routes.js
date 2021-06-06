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
]

export default routes
