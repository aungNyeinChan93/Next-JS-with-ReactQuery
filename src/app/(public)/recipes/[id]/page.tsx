import DetailRecipe from "@/components/recipes/DetailRecipe";
import React, { FC } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const DetailRecipePage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <main className="container mx-auto">
        <DetailRecipe id={id} />
      </main>
    </React.Fragment>
  );
};

export default DetailRecipePage;
