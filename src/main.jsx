import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CicatrizDeCiudad from "./pages/CicatrizDeCiudad";
import SitiosDeMemoria from "./pages/SitiosDeMemoria.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/sitiosDeMemoria",
    element: <SitiosDeMemoria/>,
  },
  {
    path: "/cicatrizDeUnaCiudad",
    element: <CicatrizDeCiudad/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);