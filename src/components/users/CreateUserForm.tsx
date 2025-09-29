"use client";

import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const queryClient = new QueryClient();

export const createUser = async (formData: any) => {
  const data = await fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(new Error("create user fail"))
  );
  console.log({ data });

  return data;
};

const CreateUserForm = () => {
  const router = useRouter();
  const defaultFormData = { name: "", email: "" };
  const [formData, setFormData] = useState(defaultFormData);

  const {
    mutate: userMutate,
    isPending,
    error,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userMutate(formData);
    setFormData(defaultFormData);
    return router.push("/users");
  };

  if (isPending) return <>Pending . . .</>;
  if (error instanceof Error) return <>{error?.message}</>;

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center ">
        <form onSubmit={formSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-4 p-4 bg-slate-600 rounded-2xl">
            <p className="text-center p-4 text-2xl ">Create User Form</p>
            <input
              type="text"
              name="name"
              id="name"
              value={formData!.name}
              placeholder="enter your name"
              className="b-1 border-amber-300 rounded-2xl p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData((prev) => ({ ...prev!, name: e.target.value }));
              }}
            />
            <input
              type="email"
              name="email"
              id="email"
              value={formData!.email}
              placeholder="enter your email"
              className="b-1 border-amber-300 rounded-2xl p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData((prev) => ({ ...prev!, email: e.target.value }));
              }}
            />
            <input type="submit" value="Save" />
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default CreateUserForm;
