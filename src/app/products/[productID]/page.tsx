import { Product } from "@/types/Product";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productID: string }>;
}) => {
  //////

  const { productID } = await params;
  //   console.log(productID);

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productID}`,
  );
  const product: Product = await res.json();

  console.log(product);
  /////////////////
  return (
    <div>
      <div>
        {/* Product Information */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-4xl sm:h-20 sm:w-20 sm:text-5xl">
              {product.image}
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold text-slate-800 sm:text-3xl">
                {product.nameBn}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                প্রতি {product.unit} {product.categoryNameBn}
              </p>

              <div
                className={`mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${
                  product.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change.dir === "down"
                      ? "bg-emerald-50 text-emerald-700"
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

                <span>
                  {product.change.dir === "up"
                    ? `গতকালের তুলনায় দাম ${product.change.pct}% বেড়েছে`
                    : product.change.dir === "down"
                      ? `গতকালের তুলনায় দাম ${product.change.pct}% কমেছে`
                      : "গতকালের তুলনায় দামের পরিবর্তন নেই"}
                </span>
              </div>
            </div>
          </div>

          {/* Today's Price */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 sm:min-w-44 sm:text-right">
            <p className="text-sm font-medium text-slate-500">আজকের দাম</p>

            <div className="mt-1 flex items-baseline gap-2 sm:justify-end">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {product.today}
              </h2>
            </div>
            <div className="flex justify-end items-center gap-2">
              <span className="text-sm font-semibold text-slate-500">টাকা</span>
              <span>/</span>
              <p className="mt-1 text-xs text-slate-500">{product.unit}</p>
            </div>
            <div>
              <div
                className={`mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${
                  product.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change.dir === "down"
                      ? "bg-emerald-50 text-emerald-700"
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

                <span>
                  {product.change.dir === "up"
                    ? ` ${product.change.pct}% `
                    : product.change.dir === "down"
                      ? `${product.change.pct}%`
                      : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
                দামের সারসংক্ষেপ
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Minimum Price */}
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-5 transition hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-emerald-800">
                    সর্বনিম্ন দাম
                  </p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-emerald-600">
                    ↓
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-emerald-700">
                    {product.markets.length > 0
                      ? Math.min(...product.markets.map((market) => market.min))
                      : "—"}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    টাকা
                  </span>
                </div>

                <p className="mt-3 border-t border-emerald-100 pt-3 text-sm text-slate-600">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>

              {/* Maximum Price */}
              <div className="rounded-xl border border-red-100 bg-red-50/70 p-5 transition hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-red-800">
                    সর্বাধিক দাম
                  </p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-red-600">
                    ↑
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-red-700">
                    {product.markets.length > 0
                      ? Math.max(...product.markets.map((market) => market.max))
                      : "—"}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    টাকা
                  </span>
                </div>

                <p className="mt-3 border-t border-red-100 pt-3 text-sm text-slate-600">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              {/* Average Price */}
              <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5 transition hover:shadow-md sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-blue-800">গড় দাম</p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-blue-600">
                    ≈
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-blue-700">
                    {product.markets.length > 0
                      ? (
                          product.markets.reduce(
                            (total, market) => total + market.max,
                            0,
                          ) / product.markets.length
                        ).toFixed(2)
                      : "—"}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    টাকা
                  </span>
                </div>

                <p className="mt-3 border-t border-blue-100 pt-3 text-sm text-slate-600">
                  বাজারগুলোর সর্বোচ্চ দামের গড়
                </p>
              </div>
            </div>
          </div>
          {/*   details*/}
          <div>
            <div className="mt-8">
              <h2 className="mb-6 text-xl font-bold text-slate-800 sm:text-2xl">
                বাজারভিত্তিক আজকের দাম
              </h2>

              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold">
                        বাজার
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold">
                        বিভাগ
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                        সর্বনিম্ন
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                        সর্বাধিক
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                        গড়
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {product.markets.map((market) => {
                      const average = (market.min + market.max) / 2;

                      return (
                        <tr
                          key={market.market}
                          className="transition-colors hover:bg-slate-50"
                        >
                          <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-800">
                            {market.market}
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                            {market.division}
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-right text-emerald-700">
                            {market.min} টাকা
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-right text-rose-600">
                            {market.max} টাকা
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-right font-bold text-slate-900">
                            {Number.isInteger(average)
                              ? average
                              : average.toFixed(2)}{" "}
                            টাকা
                          </td>
                        </tr>
                      );
                    })}

                    {product.markets.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 py-8 text-center text-slate-500"
                        >
                          এই পণ্যের বাজারভিত্তিক দামের তথ্য পাওয়া যায়নি।
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                * বাজারভেদে দামের পার্থক্য হতে পারে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
