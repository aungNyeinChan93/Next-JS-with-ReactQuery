"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

export const getAllRecipes = async () => {
  const { recipes } = await fetch(`https://dummyjson.com/recipes`).then((res) =>
    res.json()
  );
  return recipes;
};

const RecipeList = () => {
  const {
    isLoading,
    error,
    data: recipes,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (error instanceof Error) {
    return <>{error?.message}</>;
  }

  if (isLoading) {
    return <p className="!text-red-600 text-2xl">Loading</p>;
  }

  return (
    <React.Fragment>
      <main>
        <pre>{recipes && JSON.stringify(recipes, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default RecipeList;
