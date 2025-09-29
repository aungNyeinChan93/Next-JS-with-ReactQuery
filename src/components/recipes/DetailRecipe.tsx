"use client";

import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";

interface Props {
  id?: string;
}

export const getRecipeById = async (id: string) => {
  try {
    const recipe = await fetch(`https://dummyjson.com/recipes/${id}`).then(
      (res) =>
        res.ok
          ? res.json()
          : Promise.reject(new Error("Recipe data fetching Fail!"))
    );
    return recipe;
  } catch (error) {
    if (error instanceof Error) {
      return error?.message;
    }
  }
};

const DetailRecipe: FC<Props> = ({ id }) => {
  const {
    data: recipe,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipeById(id as string),
    enabled: !!id,
    staleTime: 1000 * 60,
  });

  if (error) return <p>{error?.message}</p>;
  if (isLoading) return <p>Loading ... </p>;
  return (
    <React.Fragment>
      <main>
        {recipe && id && <pre>{JSON.stringify(recipe, null, 2)}</pre>}
      </main>
    </React.Fragment>
  );
};

export default DetailRecipe;
