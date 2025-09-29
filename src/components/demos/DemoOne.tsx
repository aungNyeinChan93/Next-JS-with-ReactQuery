"use client";

import { getAllQuotes } from "@/app/(tests)/test-quotes/page";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const DemoOne = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getAllQuotes"],
    queryFn: () => getAllQuotes(),
  });
  console.log({ data });

  return (
    <React.Fragment>
      <main>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</main>
    </React.Fragment>
  );
};

export default DemoOne;
