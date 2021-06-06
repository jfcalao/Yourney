<<<<<<< HEAD
import Home from '../pages/home';
import Admin_Home from '../pages/Admin/Admin_Home';


const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/admin",
        component: Admin_Home,
        exact: true
    }
=======
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
>>>>>>> ae54e3ca2bb3181d00ffb2da081b4252e7d5f53b
]

export default routes
