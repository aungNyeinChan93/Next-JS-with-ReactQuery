"use client";

import deleteUserMutationOption from "@/query_options/users/deleteUserMutationOption";
import getUsersQueryOption from "@/query_options/users/getUsersQueryOption";
import {
  QueryClient,
  useMutation,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React from "react";

const TestUserList = () => {
  const queryClient = new QueryClient();
  const { data: users } = useSuspenseQuery({ ...getUsersQueryOption() });

  const { mutate, data, error, isPending } = useMutation({
    ...deleteUserMutationOption(),
    mutationKey: ["test-users"],
    onSuccess: () => {
      alert("delete success");
      queryClient.invalidateQueries({ queryKey: ["test-users"] });
    },
  });
  return (
    <React.Fragment>
      <main className=" flex justify-center items-center">
        <section className="w-full max-w-lg  text-center text-lg">
          {users?.map((user) => (
            <div
              className="flex justify-between  p-5 rounded-xl px-4 bg-slate-500 w-full  my-1"
              key={user?.id}
            >
              <p className="">{user?.email}</p>
              <button type="button" onClick={() => mutate(user?.id)}>
                ❌
              </button>
            </div>
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default TestUserList;
