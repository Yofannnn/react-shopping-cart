import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import ErrorPage from "./components/pages/error-page.jsx";
import Home from "./components/pages/home.jsx";
import Products from "./components/pages/products.jsx";
import DetailsProductPage from "./components/pages/details-product.jsx";
import Cart from "./components/pages/cart.jsx";
import Login from "./components/pages/login.jsx";
import Register from "./components/pages/register.jsx";
import About from "./components/pages/about.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/account",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/:category",
    element: <Products />,
  },
  {
    path: "/:category/:id",
    element: <DetailsProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
