import UserLists from "@/components/users/UserLists";
import Link from "next/link";
import React from "react";

const UsersPage = async () => {
  return (
    <React.Fragment>
      <main className="container mx-auto">
        <Link className="p-2 bg-slate-400" href={"/users/create-user"}>
          Create User ➕
        </Link>
        <UserLists />
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
