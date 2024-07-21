import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { adminPaths } from "./routes.admin";


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
        children : adminPaths
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