
import { ReactNode } from "react";
import AdminDashbord from "../pages/admin/AdminDashbord";
import Create_Admin from "../pages/admin/Create_Admin";
import Create_Student from "../pages/admin/Create_Student";
import Create_faculty from "../pages/admin/Create_faculty";

import { NavLink } from "react-router-dom";



type TSidebarItem = {
    key : string;
    label : ReactNode;
    children ? : TSidebarItem[];
}

export const adminPaths = [
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

