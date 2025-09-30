import ProductLists from "@/components/products/ProductLists";
import React, { Suspense } from "react";

const ProductsPage = async () => {
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<p>Loading . . .</p>}>
          <ProductLists />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;
