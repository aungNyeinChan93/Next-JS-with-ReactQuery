"use client";

import React, { FC, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props {
  children: ReactNode;
}

const client = new QueryClient();

const ReactQueryProvider: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default ReactQueryProvider;
