import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { ProductDetailsPage } from "./pages/ProductDetailsPage.jsx";
import { loader as productLoader } from "./pages/ProductPage.jsx";
import { loader as productDetailLoader } from "./pages/ProductDetailsPage.jsx";
import { MainLayout } from "./layouts/MainLayout.jsx";
import { QueryClient } from "@tanstack/react-query";
import { HomePage } from "./pages/HomePage.jsx";
import "./App.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
        loader: productLoader(queryClient),
        errorElement: <ErrorPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
        loader: productDetailLoader(queryClient),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
