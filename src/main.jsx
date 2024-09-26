import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { App } from "./App";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Resources } from "./pages/Resources";
import { AboutVerial } from "./pages/AboutVerial";
import { Distribution } from "./pages/Distribution";

const appRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "resources",
    element: <Resources />,
  },
  {
    path: "about-verial",
    element: <AboutVerial />
  },
  {
    path: "distribution",
    element: <Distribution />
  }
];

const router = createBrowserRouter([
  {
    path: "/:lng",
    element: <App />,
    children: appRoutes,
  },
  {
    path: "/",
    element: <App />,
    children: appRoutes,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);
