import { Product } from "@/types/Product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-red-100 hover:shadow-md sm:p-5 ">
      {/* Product Info */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl transition-colors group-hover:bg-green-100">
          {product.image}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-bold text-gray-900">{product.nameBn}</p>

          <span className="mt-1 inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
            {product.categoryNameBn}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100" />

      {/* Price Info */}
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">আজকের দাম</p>

          <p className="mt-1 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            {product.today}
            <span className="ml-1 text-sm font-medium text-gray-500">টাকা</span>
          </p>

          <p className="mt-1 text-xs text-gray-400">
            প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
          </p>
        </div>

        {/* Price Change */}
        <div className="flex shrink-0 items-center gap-1.5 rounded-lg bg-red-50 px-2.5 py-2 text-sm font-bold text-red-600">
          <span aria-hidden="true">▲</span>
          <span>{product.change.pct}%</span>
        </div>
      </div>

      {/* Previous Price */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
        <span className="text-xs text-gray-500">গতকালের দাম</span>

        <span className="text-sm font-semibold text-gray-700">
          {product.yesterday} টাকা
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
