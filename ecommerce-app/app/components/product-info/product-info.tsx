import HeartIcon from "@/public/icons/heart.icon";
import { useMemo } from "react";
import GoogleReview from "../google-review/google-review";
import { PriceInfo } from "../price-info/price-info";
import { Product } from "./product-info.types";

export const ProductInfo: React.FC<Product> = (props: Product) => {
  const { google_review } = props;

  const rate: number = useMemo(() => {
    return Number(google_review.rate.split("/")[0].split(",").join("."));
  }, [google_review.rate]);

  const maxRate: number = useMemo(() => {
    return Number(google_review.rate.split("/")[1]);
  }, [google_review.rate]);

  return (
    <div className="shadow-md rounded p-2">
      <span className="px-2 py-1 text-xs rounded-full bg-red-400">
        {props.category} {!!props.subcategory && `| ${props.subcategory}`}
      </span>
      <div className="font-bold text-lg">{props.name}</div>
      <div
        className={` my-2 text-sm font-bold italic ${
          props.amount > 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {props.amount > 0 ? `${props.amount} in stock` : "Out of stock"}
      </div>
      <PriceInfo
        originalPrice={props.selling_price - props.discounted_price}
        discountPrice={props.discounted_price}
        currency={props.currency}
      />
      <div className="my-8 text-gray-400 text-sm">{props.description}</div>
      <div className="flex justify-between">
        <div className="flex">
          <button
            disabled={props.amount === 0}
            className={`${
              props.amount === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-500"
            } px-3 py-2 text-white`}
          >
            Add to cart
          </button>
          <button className="border p-2 ml-2">
            <HeartIcon />
          </button>
        </div>
        <GoogleReview rate={rate} maxRate={maxRate} />
      </div>
    </div>
  );
};

export default ProductInfo;
