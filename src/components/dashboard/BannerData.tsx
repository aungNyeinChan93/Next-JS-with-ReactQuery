"use client";

import getPostsQueryOption from "@/query_options/posts/getPostsQueryOption";
import getProductsOption from "@/query_options/products/getProductsOption";
import { useQueries, useSuspenseQueries } from "@tanstack/react-query";
import React, { Suspense } from "react";

const BannerData = () => {
  const [products, posts] = useQueries({
    queries: [getProductsOption(), getPostsQueryOption()],
  });
  if (posts?.isLoading) return <>POSTS LOADING</>;
  if (products?.isLoading) return <>PRODUCTS LOADING</>;
  return (
    <React.Fragment>
      <main className="flex justify-between items-start p-10 bg-slate-50 text-slate-600">
        <section className=" basis-1/2">
          <div>{JSON.stringify(products, null, 2)}</div>
        </section>
        <section className=" basis-1/2">
          <div>{JSON.stringify(posts, null, 2)}</div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default BannerData;
