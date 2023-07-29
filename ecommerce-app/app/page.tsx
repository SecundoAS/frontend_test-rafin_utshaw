import ProductFootPrint from "./components/product-footprint/product-footprint";
import ProductImages from "./components/product-images/product-images";
import ProductInfo from "./components/product-info/product-info";
import { PRODUCT_DATA } from "./utils/product_data";

export default function Product() {
  const { product, foot_print } = PRODUCT_DATA;

  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <ProductImages images={product.images} />
        </div>
        <div className="w-1/2">
          <ProductInfo {...product} />
        </div>
      </div>
      <ProductFootPrint
        title={foot_print.title}
        lifeSpan={foot_print.life_span}
        returnPolicy={foot_print.return_policy}
      />
    </div>
  );
}
