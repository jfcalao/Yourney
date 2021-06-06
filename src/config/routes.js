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
]

export default routes;