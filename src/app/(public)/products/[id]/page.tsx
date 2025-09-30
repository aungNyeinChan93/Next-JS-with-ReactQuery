import ProductDetail from "@/components/products/ProductDetail";
import React, { FC, Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductDetailPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<>Loading ... </>}>
          <ProductDetail id={id} />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default ProductDetailPage;
