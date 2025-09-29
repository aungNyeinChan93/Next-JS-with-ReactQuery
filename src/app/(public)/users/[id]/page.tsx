import DetailUser from "@/components/users/DetailUser";
import React, { FC } from "react";

interface Props {
  params: Promise<{ id: string }>;
}
const DetailUserPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <main>
        <DetailUser id={id} />
      </main>
    </React.Fragment>
  );
};

export default DetailUserPage;
