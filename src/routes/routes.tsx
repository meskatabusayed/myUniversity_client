import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDashbord from "../pages/admin/AdminDashbord";
import Create_Student from "../pages/admin/Create_Student";
import Create_Admin from "../pages/admin/Create_Admin";
import Create_faculty from "../pages/admin/Create_faculty";

const router  = createBrowserRouter([
    {
        path: '/',
        element : <App/>,
        children : [
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element:<Contact/>
            }
        ]
    },
    {
        path: '/admin',
        element : <App/>,
        children : [
            
            {
                path: "dashbord",
                element: <AdminDashbord/>
            },
            {
                path: "create-admin",
                element: <Create_Admin/>
            },
            {
                path: "create-faculty",
                element: <Create_faculty/>
            },
            {
                path: "create-student",
                element: <Create_Student/>
            },
            
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registration",
        element: <Registration/>
    }
]);

export default router;