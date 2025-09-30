"use client";

import getPostsQueryOption from "@/query_options/posts/getPostsQueryOption";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

const PostLists = () => {
  const { data: posts } = useSuspenseQuery({ ...getPostsQueryOption() });
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default PostLists;
