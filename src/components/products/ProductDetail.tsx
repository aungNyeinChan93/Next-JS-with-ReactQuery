"use client";

import getProductOption from "@/query_options/products/getProductOption";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "./ProductCard";

interface Props {
  id: string;
}

const ProductDetail = ({ id }: Props) => {
  const { data } = useSuspenseQuery({
    ...getProductOption(id as string),
    staleTime: 60000 * 60 * 60,
  });
  return (
    <React.Fragment>
      <main className="w-full max-w-3xl min-h-screen mx-auto my-20">
        <ProductCard {...data} />
      </main>
    </React.Fragment>
  );
};

export default ProductDetail;
