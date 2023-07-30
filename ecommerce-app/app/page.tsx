import ProductAttributes from "./components/product-attributes/product-attributes";
import ProductFootPrint from "./components/product-footprint/product-footprint";
import ProductImages from "./components/product-images/product-images";
import ProductInfo from "./components/product-info/product-info";
import RelatedProducts from "./components/related-products/related-products";
import { PRODUCT_DATA } from "./utils/product_data";

export default function Product() {
  const { product, foot_print, similar_product } = PRODUCT_DATA;

  return (
    <div>
      <div className="md:flex">
        <div className="md:w-1/2 w-full relative">
          <ProductImages images={product.images} />
        </div>
        <div className="md:w-1/2  w-full grid grid-cols-1 gap-4">
          <ProductInfo {...product} />
          <ProductFootPrint
            title={foot_print.title}
            lifeSpan={foot_print.life_span}
            returnPolicy={foot_print.return_policy}
          />
          <ProductAttributes attributes={product.attributes} />
        </div>
      </div>
      <RelatedProducts products={similar_product.products} />
    </div>
  );
}
