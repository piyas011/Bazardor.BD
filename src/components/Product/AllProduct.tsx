import { Product } from "@/types/Product";
import AllProductsCard from "./AllProductsCard";

const AllProduct = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <div>
        <h2 className="text-4xl py-4 font-bold">সব পণ্য</h2>
        <p className="py-2">মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <AllProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
