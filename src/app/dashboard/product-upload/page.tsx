import ProductForm from "@/forms/ProductUpload";
import React from "react";

export default function ProductUpload() {
  return (
    <div className="pt-10 pl-10 pr-8 pb-10 bg-[#f7f7f7] dark:bg-[#171717] h-screen">
      <div className="flex items-center justify-center">
        <ProductForm />
      </div>
    </div>
  );
}
