"use client";

import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const getAllUsers = async () => {
  const { users } = await fetch(`/api/users`).then((res) =>
    res.ok ? res.json() : new Error("user data fetching error")
  );
  return users;
};

export const deleteUser = async (id: string) => {
  const { deleteUser } = await fetch(`/api/users/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());

  return deleteUser;
};

const UserLists = () => {
  const router = useRouter();
  const queryClient = new QueryClient();

  const {
    isError,
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    // staleTime: 1000 * 60 * 60 * 24,
  });

  const {
    mutate: userDeleteMutate,
    isPending,
    error: mutateError,
  } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (isError && error instanceof Error) return <>{error?.message}</>;
  if (isLoading) return <>Loading . . .</>;
  if (isPending) return <>PRnding . . .</>;
  if (mutateError instanceof Error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <Link href={"/recipes"}>Go to recipes</Link>
      <main>
        {users &&
          Array.isArray(users) &&
          users?.map((user) => {
            return (
              <div
                key={user?.id}
                className="p-4 text-lg bg-green-50 text-slate-500 my-2 rounded "
              >
                <div className="flex justify-between">
                  <p>{user?.firstName}</p>
                  <p>{user?.id}</p>
                  <div>
                    <button
                      onClick={() => {
                        userDeleteMutate(user?.id);
                        // router.push("/users");
                        // return;
                      }}
                      className="text-2xl"
                      type="button"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </main>
    </React.Fragment>
  );
};

export default UserLists;
