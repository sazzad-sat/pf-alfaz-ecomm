import Image from "next/image";
import productCategoryDefaultImage from "./assets/product_category_default.png";

export default function ProductCategories() {
  return (
    <div className="container xl:w-[76.25rem]">
      <div className="bg-white px-6 py-3 flex flex-col gap-4 overflow-x-auto">
        <div className="flex justify-between sticky top-0 left-0">
          <div className="text-primary-600 text-xl">Categories</div>
        </div>

        <div className="grid grid-rows-2 grid-flow-col">
          {...Array(20).fill(0).map(i => (
            <div className="border-t border-r border-gray-200 flex flex-col items-center p-4 min-w-40">
              <Image src={productCategoryDefaultImage} className="w-24" alt="category"/>
              <div>Smart Watch</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}