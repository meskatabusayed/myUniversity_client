
import { ReactNode } from "react";
import AdminDashbord from "../pages/admin/AdminDashbord";
import Create_Admin from "../pages/admin/Create_Admin";
import Create_Student from "../pages/admin/Create_Student";
import Create_faculty from "../pages/admin/Create_faculty";

import { NavLink } from "react-router-dom";

type TRoute = {
    path : string;
    element : ReactNode;
}

type TSidebarItem = {
    key : string;
    label : ReactNode;
    children ? : TSidebarItem[];
}

 const adminPaths = [
    {
        name : "Dashboard",
        path: "dashboard",
        elment: <AdminDashbord/>
    },
    {
        name : "User Management",
        children : [
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

export const adminSidebarItems = adminPaths.reduce((acc : TSidebarItem[], item) => {
    if(item.path && item.name){
        acc.push({
            key : item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    }

    if(item.children){
        acc.push({
            key : item.name,
            label : item.name,
            children : item.children.map((child) => ({
                key : child.name,
                label : <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }

            ))
        })
    }

    return acc;
} , [])

export const adminRoutes = adminPaths.reduce((acc : TRoute[]  , item)  => {
    if(item.path && item.elment){
        acc.push({
            path : item.path,
            element: item.elment,
        })
    }
    if(item.children){
        item.children.forEach((child) => {
            acc.push({
                path: child.path,
                element : child.element,
            })
        })
    }
    return acc;
} , [])