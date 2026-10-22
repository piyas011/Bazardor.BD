import CategoryProductList from "@/components/Product/CategoryProductList";
import { Product } from "@/types/Product";

const Category = async ({
  params,
}: {
  params: Promise<{ categoryID: string }>;
}) => {
  const { categoryID } = await params;
  console.log("category section", categoryID);

  ////////////////////////
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryID}`,
  );
  const categoryData: Product[] = await res.json();

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-4 sm:flex-row sm:items-center sm:p-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm">
          {categoryData[0]?.categoryIcon}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
            {categoryData[0]?.categoryNameBn ?? "পণ্যের ক্যাটাগরি"}
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {categoryData.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>

        <div className="w-fit rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-700">
          {categoryData.length}টি পণ্য
        </div>
      </div>

      <CategoryProductList products={categoryData} />
    </div>
  );
};

export default Category;
