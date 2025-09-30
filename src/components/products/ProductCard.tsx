import Link from "next/link";
import React from "react";

interface Props {
  thumbnail?: string;
  title?: string;
  category?: string;
  id: string | number;
}

const ProductCard = ({ thumbnail, title, category, id }: Props) => {
  return (
    <React.Fragment>
      <Link href={`/products/${id}`} className="group block overflow-hidden">
        <div className="relative h-[350px] sm:h-[450px]">
          <img
            src={
              thumbnail ||
              "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
            }
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src="/next.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>

          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">{category}</p>

            <p className="text-xs tracking-wide uppercase">6 Colors</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProductCard;
