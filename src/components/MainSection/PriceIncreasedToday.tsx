import { Product } from "@/types/Product";
import ProductCard from "../Product/ProductCard";

const PriceIncreasedToday = ({ products }: { products: Product[] }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="mb-5 text-3xl font-bold">
        <span className="text-red-600">▲</span> আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products
          .filter((product) => product.change.dir === "up")
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default PriceIncreasedToday;
