import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/Error";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/collection",
        element: <Collection></Collection>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
