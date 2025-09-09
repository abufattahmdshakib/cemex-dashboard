import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotF from '../pages/NotF/NotF';
import DashboardLayout from '../Components/DashboardLayout/DashboardLayout';
import Home from '../Pages/Dashboard/Home/Home';
import Orders from '../Pages/Orders/Orders';
import Customers from '../Pages/Customers/Customers';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Orders",
        element: <Orders></Orders>
      },
      {
        path: "/Customers",
        element: <Customers />
      },
    ],
  },
  {
    path: "*",
    element: <NotF />
  },
]);
