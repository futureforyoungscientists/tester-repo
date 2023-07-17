import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOMClient from "react-dom/client";
import { MainPage } from "./screens/MainPage";
// import { AboutUsPage } from "./screens/AboutUsPage/AboutUsPage";
// import { BlogPage } from "./screens/BlogPage/BlogPage";

// import 'bootstrap/dist/css/bootstrap.css'
// import { NovaPage } from "./screens/NovaPage/NovaPage";
// import { NebulaPage } from "./screens/NebulaPage/NebulaPage";

const router = createBrowserRouter([
    {
      path: "/home",
      element: <MainPage/>,
    },
  ]);

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RouterProvider router={router}/>);



// import React from "react";
// import ReactDOMClient from "react-dom/client";
// import { MainPage } from "./screens/MainPage";

// const app = document.getElementById("app");
// const root = ReactDOMClient.createRoot(app);
// root.render(<MainPage />);
