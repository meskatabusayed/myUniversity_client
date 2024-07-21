import AdminDashbord from "../pages/admin/AdminDashbord";
import Create_Admin from "../pages/admin/Create_Admin";
import Create_Student from "../pages/admin/Create_Student";
import Create_faculty from "../pages/admin/Create_faculty";

export const adminPaths = [
            
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