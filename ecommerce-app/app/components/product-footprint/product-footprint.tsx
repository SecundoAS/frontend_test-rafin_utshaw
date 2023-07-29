import Image from "next/image";
import React from "react";
import { ProductFootPrintType } from "./product-footprint.types";

export const ProductFootPrint: React.FC<ProductFootPrintType> = (
  props: ProductFootPrintType
) => {
  const { title, lifeSpan, returnPolicy } = props;

  return (
    <div className={" shadow-md rounded p-2"}>
      <div className="font-bold text-xl mb-4"> {title}</div>
      <div className="flex">
        <div className="flex items-start">
          <Image
            alt="Lifespan logo"
            src={lifeSpan.icon}
            width={30}
            height={30}
          />
          <div className="ml-2">
            <div className="font-bold">{lifeSpan.title}</div>
            <div>{lifeSpan.description}</div>
          </div>
        </div>
        <div className=" ml-2 flex items-start">
          <Image
            alt="Return policy logo"
            src={returnPolicy.icon}
            width={30}
            height={30}
          />
          <div className="ml-2">
            <div className="font-bold">{returnPolicy.title}</div>
            <div>{returnPolicy.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFootPrint;
