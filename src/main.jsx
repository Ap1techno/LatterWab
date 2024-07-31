
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Latter from "./latter/Latter.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/latter",
//     element: <Latter/>
//   },
//   {
//     path: "*",
//     element: <h1>404 Page is not Found</h1>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/letter",
    element: <Latter />,
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);

