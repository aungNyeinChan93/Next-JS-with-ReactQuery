import TestUserList from "@/components/demos/TestUserList";
import React, { Suspense } from "react";

const TestUsersPage = async () => {
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<>Loading . . . </>}>
          <TestUserList />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default TestUsersPage;
