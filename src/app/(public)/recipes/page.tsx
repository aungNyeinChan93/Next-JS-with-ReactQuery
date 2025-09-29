import RecipeList from "@/components/recipes/RecipeList";
import Link from "next/link";
import React from "react";

const RecipesPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 px-10 text-slate-600">
        <Link href={"/users"}>Go to users</Link>
        <RecipeList />
      </main>
    </React.Fragment>
  );
};

export default RecipesPage;
