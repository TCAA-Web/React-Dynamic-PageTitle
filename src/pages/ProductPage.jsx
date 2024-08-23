import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { productListQuery } from "../queries/products";
import { Card } from "../components/Card/Card";
import { CardHeader } from "../components/CardHeader/CardHeader";
import { CardBody } from "../components/CardBody/CardBody";
import { CardFooter } from "../components/CardFooter/CardFooter";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const loader = (queryClient) => async () => {
  const query = productListQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const ProductPage = () => {
  const { data, isLoading } = useQuery(productListQuery());
  console.log(data);

  return (
    <div>
      <h3>ProductPage</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Wrapper title={"All products"} subtitle={""}>
          {data.products.map((item, index) => {
            return (
              <Card key={item.title + index}>
                <CardHeader text={item.title} />
                <CardBody
                  imageUrl={item.images[0]}
                  content={item.textContent + (index + 1)}
                />
                <Link to={`${item.id}`} key={item.id}>
                  {item.title}
                </Link>
                <CardFooter content={item.footerContent} />
              </Card>
            );
          })}
        </Wrapper>
      )}
    </div>
  );
};
