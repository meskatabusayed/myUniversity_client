import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import { facultyPaths } from './faculty.routes';
import { studentPaths } from './student.routes';
import { routeGenerator } from '../utils/routeGenerator';
import { adminPaths } from './admin.routes.';
import Registration from '../pages/Registration';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/superAdmin',
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Registration/>
  },
]);

export default router;