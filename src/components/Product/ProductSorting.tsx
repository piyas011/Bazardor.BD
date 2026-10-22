"use client";

export type ProductSortOrder = "default" | "asc" | "desc";

type ProductSortingProps = {
  sortOrder: ProductSortOrder;
  onSortOrderChange: (sortOrder: ProductSortOrder) => void;
};

const ProductSorting = ({
  sortOrder,
  onSortOrderChange,
}: ProductSortingProps) => {
  return (
    <div>
      <select
        value={sortOrder}
        onChange={(event) => {
          const value = event.target.value;
          if (value === "asc" || value === "desc" || value === "default") {
            onSortOrderChange(value);
          }
        }}
        aria-label="পণ্য সাজান"
        className="w-full max-w-56 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
      >
        <option value="default">ডিফল্ট</option>
        <option value="asc">দাম: কম থেকে বেশি</option>
        <option value="desc">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
};

export default ProductSorting;
