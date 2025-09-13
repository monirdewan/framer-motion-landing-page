import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import Home from "@/pages/home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
        ]
    },
     {
        path:"/admin",
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                index:true,
                element:<Navigate to="dashboard" />
            },
            {
               path:"dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"service-list",
                element:<ServiceList />
            },
            {
                path:"add-service",
                element:<AddService />
            },
        ]
    }
])

export default router;