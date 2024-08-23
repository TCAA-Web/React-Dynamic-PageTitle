import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productDetailsQuery } from "../queries/products";
import { useQuery } from "@tanstack/react-query";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = productDetailsQuery(params.id);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export const ProductDetailsPage = () => {
  const params = useParams();
  const { data } = useQuery(productDetailsQuery(params.id));

  return (
    <div>
      <h1>ProductDetailsPage</h1>
      <h2>{data.title}</h2>
      <br></br>

      <h4>
        Bemærk hvordan sidens titel opdateres dynamisk alt efter hvilket produkt
        du klikker ind på
      </h4>
    </div>
  );
};
