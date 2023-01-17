import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], () => getProducts());

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid gird-col-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {products &&
          products.map((item) => <ProductCard key={item.id} product={item} />)}
      </ul>
    </>
  );
}
