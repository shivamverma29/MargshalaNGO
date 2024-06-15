<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from '../components/Home/Home.jsx'
import Sign from '../components/Sign/Sign.jsx'
import Stories from '../components/ExploreStories/Stories.jsx'

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Sign from "../components/Sign/Sign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
<<<<<<< HEAD
        element: <Home/>
    },
    {
        path: "login",
        element: <Sign/>
    },
    {
      path: "stories",
      element: <Stories/>
  },
    ]
  }
])
=======
        element: <Home />,
      },
      {
        path: "/login",
        element: <Sign />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);
>>>>>>> f2a98e2fa20a05c404e6187ba47741ea0ca07c19

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
