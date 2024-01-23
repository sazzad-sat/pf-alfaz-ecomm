import ProductCard from "@/app/_components/product_card";
import {flashSaleProductsData, freeDeliveryProductsData, normalProductsData} from "@/app/_components/data";
import expandRightIcon from "./assets/expand_right.svg";
import Image from "next/image";

export default function BikeAccessoriesProducts() {
  return (
    <div className="container xl:w-[76.25rem]">

      <div className="bg-white px-6 py-3 flex flex-col gap-4 overflow-x-auto">
        <div className="flex justify-between sticky top-0 left-0">
          <div className="text-primary-600 text-xl">Bike Accessories</div>
          <button className="text-primary-500 flex">See more <Image src={expandRightIcon} alt="icon"/></button>
        </div>

        <div className="flex gap-3">
          {normalProductsData.map(data => <ProductCard data={data}/>)}
        </div>
      </div>
    </div>
  );
}