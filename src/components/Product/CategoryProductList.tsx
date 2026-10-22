"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/Product";
import ProductSorting from "./ProductSorting";
import type { ProductSortOrder } from "./ProductSorting";
import Link from "next/link";

const CategoryProductList = ({ products }: { products: Product[] }) => {
  const [sortOrder, setSortOrder] = useState<ProductSortOrder>("default");

  const sortedProducts = useMemo(() => {
    if (sortOrder === "default") {
      return products;
    }

    const direction = sortOrder === "asc" ? 1 : -1;

    return [...products].sort((a, b) => {
      const priceA = Number(a.today);
      const priceB = Number(b.today);
      const isPriceAValid = Number.isFinite(priceA);
      const isPriceBValid = Number.isFinite(priceB);

      if (!isPriceAValid || !isPriceBValid) {
        if (isPriceAValid === isPriceBValid) {
          return 0;
        }
        return isPriceAValid ? -1 : 1;
      }

      return (priceA - priceB) * direction;
    });
  }, [products, sortOrder]);

  return (
    <>
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-slate-600">
          মোট
          <span className="font-bold text-slate-900 mx-1 text-2xl">
            {products.length}
          </span>
          টি পণ্য দেখানো হচ্ছে
        </p>

        <div>
          <ProductSorting
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sortedProducts.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-3xl transition group-hover:bg-emerald-50">
                {product.image}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-bold text-slate-800 sm:text-lg">
                  {product.nameBn}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  প্রতি{" "}
                  {product.unit === "kg"
                    ? "কেজি"
                    : product.unit === "litre"
                      ? "লিটার"
                      : product.unit}
                </p>
              </div>
            </div>

            <div className="my-5 border-t border-dashed border-slate-200" />

            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  আজকের দাম
                </p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  {product.today}
                  <span className="ml-1 text-sm font-semibold text-slate-500">
                    টাকা
                  </span>
                </p>
              </div>

              <div
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold ${
                  product.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change.dir === "down"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-slate-100 text-slate-600"
                }`}
              >
                <span aria-hidden="true">
                  {product.change.dir === "up"
                    ? "▲"
                    : product.change.dir === "down"
                      ? "▼"
                      : "−"}
                </span>
                <span>{product.change.pct}%</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <span
                className={`h-2 w-2 rounded-full ${
                  product.change.dir === "up"
                    ? "bg-red-500"
                    : product.change.dir === "down"
                      ? "bg-emerald-500"
                      : "bg-slate-400"
                }`}
              />
              <span>
                {product.change.dir === "up"
                  ? "আগের তুলনায় দাম বেড়েছে"
                  : product.change.dir === "down"
                    ? "আগের তুলনায় দাম কমেছে"
                    : "দামের কোনো পরিবর্তন নেই"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryProductList;
