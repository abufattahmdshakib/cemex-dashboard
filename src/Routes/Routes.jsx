import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotF from '../pages/NotF/NotF';
import DashboardLayout from '../Components/DashboardLayout/DashboardLayout';
import Home from '../Pages/Dashboard/Home/Home';
import Orders from '../Pages/Orders/Orders';
import Customers from '../Pages/Customers/Customers';
import Products from '../Pages/Products/Products';
import ServiceArea from '../Pages/ServiceArea/ServiceArea';
import AdminPanel from '../Pages/AdminPanel/AdminPanel';
import Reports from '../Pages/Reports/Reports';
import AiAssistant from '../Components/Navbar/AiAssistant/AiAssistant';



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
      {
        path: "/Products",
        element: <Products />
      },
      {
        path: "/ServiceArea",
        element: <ServiceArea />
      },
      {
        path: "/AdminPanel",
        element: <AdminPanel />
      },
      {
        path: "/Reports",
        element: <Reports />
      },
      {
        path: "/AiAssistant",
        element: <AiAssistant />
      },
    ],
  },
  {
    path: "*",
    element: <NotF />
  },
]);
