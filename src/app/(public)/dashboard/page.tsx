import BannerData from "@/components/dashboard/BannerData";
import React, { Suspense } from "react";

const DashboardPage = async () => {
  return (
    <React.Fragment>
      <main>
        <BannerData />
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
