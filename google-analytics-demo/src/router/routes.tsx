import RootLayout from "@/layouts/RootLayout";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        children: [
          { index: true, element: <HomePage /> },
          { path: "/products", element: <ProductsPage /> },
          { path: "/about", element: <AboutPage /> },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
