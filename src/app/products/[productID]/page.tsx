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
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Product Information */}
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-4xl sm:h-20 sm:w-20 sm:text-5xl">
              {product.image}
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
                {product.nameBn}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                প্রতি {product.unit} {product.nameBn}
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

              <span className="text-sm font-semibold text-slate-500">টাকা</span>
            </div>

            <p className="mt-1 text-xs text-slate-500">প্রতি {product.unit}</p>
          </div>
        </div>

        {/* Price Summary */}
        <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6"></div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
