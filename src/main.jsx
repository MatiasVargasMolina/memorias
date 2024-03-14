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
import MemoriaAlOtro from "./pages/MemoriaAlOtro.jsx";
import VecesHoy from "./pages/VecesHoy.jsx";

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
  {
    path: "/MemoriaAlOtro",
    element: <MemoriaAlOtro/>,
  },
  {
    path: "/vecesHoy",
    element: <VecesHoy/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);