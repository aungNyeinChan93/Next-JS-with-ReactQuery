"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

export const getAllQuotes = async () => {
  const { quotes } = await fetch(`https://dummyjson.com/quotes`).then((res) =>
    res.json()
  );
  return quotes;
};

const TestQuotePage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getAllQuotes"],
    queryFn: getAllQuotes,
  });

  if (isLoading) {
    return <>Loading . . . </>;
  }

  if (error) <>{error && error.message}</>;
  return (
    <React.Fragment>
      <main>{data && JSON.stringify(data, null, 2)}</main>
    </React.Fragment>
  );
};

export default TestQuotePage;
