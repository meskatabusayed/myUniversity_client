
import { ReactNode } from "react";
import AdminDashbord from "../pages/admin/AdminDashbord";
import Create_Admin from "../pages/admin/Create_Admin";
import Create_Student from "../pages/admin/Create_Student";
import Create_faculty from "../pages/admin/Create_faculty";

type TRoute = {
    path : string;
    element : ReactNode;
}

 const adminPaths = [
    {
        name : "Dashboard",
        path: "dashboard",
        elment: <AdminDashbord/>
    },
    {
        name : "User Management",
        Children : [
            {
                name : "Create Admin",
                path : "create-admin",
                element : <Create_Admin/>
            },
            {
                name : "Create Faculty",
                path : "create-faculty",
                element : <Create_faculty/>
            },
            {
                name : "Create Student",
                path : "create-student",
                element : <Create_Student/>
            }
        ]
    }
];

export const adminRoutes = adminPaths.reduce((acc : TRoute[]  , item)  => {
    if(item.path && item.elment){
        acc.push({
            path : item.path,
            element: item.elment,
        })
    }
    if(item.Children){
        item.Children.forEach((child) => {
            acc.push({
                path: child.path,
                element : child.element,
            })
        })
    }
    return acc;
} , [])