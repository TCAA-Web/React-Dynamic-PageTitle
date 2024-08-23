import { Outlet, useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import { productDetailsQuery } from "../queries/products";
import { useEffect } from "react";

export const MainLayout = () => {
  let location = useLocation();
  let params = useParams();
  const { data } = useQuery(productDetailsQuery(params.id));

  let stringArray = location.pathname.split("/");

  let routePath = stringArray[1];
  let upperCaseFirstLetter = routePath.charAt(0).toUpperCase();
  let routePathUpperCase = upperCaseFirstLetter + routePath.slice(1);
  let path;

  if (params.id) {
    path = routePathUpperCase + " - " + data?.title;
  } else {
    path = upperCaseFirstLetter + routePath.slice(1);
  }

  useEffect(() => {
    document.title = path;
  }, [location]);

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
