import { Product } from "@/types/Product";
import AllProductsCard from "./AllProductsCard";

const AllProduct = ({ products }: { products: Product[] }) => {
  return (
    <section id="AllProduct" className="mt-12 px-4">
      <div>
        <h2 className="py-4 text-3xl font-bold sm:text-4xl">সব পণ্য</h2>
        <p className="py-2 text-sm text-gray-500">
          মোট {products.length}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <AllProductsCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProduct;
