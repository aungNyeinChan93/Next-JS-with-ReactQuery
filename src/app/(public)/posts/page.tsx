import PostLists from "@/components/posts/PostList";
import React, { Suspense } from "react";

const PostsPage = async () => {
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<>Loading . . .</>}>
          <PostLists />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;
