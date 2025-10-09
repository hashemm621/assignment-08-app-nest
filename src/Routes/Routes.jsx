import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from '../Pages/Apps/Apps';
import Installation from "../Pages/Installation/Installation";
import Page404 from '../Pages/Page404/Page404';
import AppDetails from '../Pages/AppDetails/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path:'/apps/:id',
        element:<AppDetails/>
      }
    ],
  },
]);
export default router;
