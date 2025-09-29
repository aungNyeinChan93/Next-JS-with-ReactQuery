import CreateUserForm from "@/components/users/CreateUserForm";
import React from "react";

const CreateUserPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen">
        <CreateUserForm />
      </main>
    </React.Fragment>
  );
};

export default CreateUserPage;
