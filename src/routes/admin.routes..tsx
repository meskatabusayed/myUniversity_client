import AdminDashbord from "../pages/admin/AdminDashbord";
import Create_Admin from "../pages/admin/Create_Admin";
import Create_Student from "../pages/admin/Create_Student";
import Create_faculty from "../pages/admin/Create_faculty";


export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashbord/>
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <Create_Admin/>
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <Create_faculty/>
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <Create_Student/>
      },
      
    ],
  },
];