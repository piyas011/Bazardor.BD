import { Product } from "@/types/Product";
import DecreasedProductCard from "../Product/DecreasedProductCard";

const PriceDecreasedToday = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2 className="text-3xl my-6">
        <span className="text-green-600">▼</span> আজ দাম কমেছে
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products
          .filter((Fproduct) => Fproduct.change.dir === "down")
          .map((product) => (
            <div key={product.id}>
              <DecreasedProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PriceDecreasedToday;
