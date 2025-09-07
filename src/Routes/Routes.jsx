import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotF from '../pages/NotF/NotF';
import Home from '../Pages/Home/Home';
import DashboardLayout from '../Components/DashboardLayout/DashboardLayout';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  { path: "*", element: <NotF /> },
]);
