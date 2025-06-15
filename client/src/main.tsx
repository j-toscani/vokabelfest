import "./base.css";
// @deno-types="@types/react"
import { StrictMode } from "react";
// @deno-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./Layout.tsx";
import Home from "./views/Home.tsx";
import { Auth } from "./views/Auth.tsx";
import { Student } from "./views/Student.tsx";
import { Teacher } from "./views/Teacher.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "student",
        Component: Student,
      },
      {
        path: "teacher",
        Component: Teacher,
      },
    ],
  },
  {
    path: "/login",
    Component: Auth,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
