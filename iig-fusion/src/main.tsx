import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./styles/main.scss";
import { ROUTES } from "./routes.tsx";
const router = createBrowserRouter(ROUTES, {
  basename: import.meta.env.DEV ? "/" : "/",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
