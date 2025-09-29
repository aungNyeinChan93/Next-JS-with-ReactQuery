"use client";

import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";

export const getUserById = async (id: string) => {
  const { user } = await fetch(`/api/users/${id}`).then((res) =>
    res.ok ? res.json() : Promise.reject(new Error(" user data fetchine fail"))
  );
  return user;
};

const DetailUser: FC<{ id: string }> = ({ id }) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });
  if (error) return <p>{error?.message}</p>;
  if (isLoading) return <p>Loading ... </p>;
  return (
    <React.Fragment>
      <main>{user && id && <pre>{JSON.stringify(user, null, 2)}</pre>}</main>
    </React.Fragment>
  );
};

export default DetailUser;
