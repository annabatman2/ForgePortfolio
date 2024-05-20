import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./roots/Root.jsx";
import { Contact } from "./roots/Contact.jsx";
import { Projects } from "./roots/Projects.jsx";
import { About } from "./roots/About.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
