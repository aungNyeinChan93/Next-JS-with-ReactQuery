"use client";

import getProductsOption from "@/query_options/products/getProductsOption";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import ProductCard from "./ProductCard";

const ProductLists = () => {
  const { data, error, isLoading } = useSuspenseQuery(getProductsOption());

  if (isLoading) return <>Loading . . .</>;
  if (error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <main className=" w-full min-h-screen max-w-7xl mx-auto my-10">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data &&
            Array.isArray(data) &&
            data?.map((product) => (
              <ProductCard key={product?.id as number} {...product} />
            ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductLists;
