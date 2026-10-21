import { Product } from "@/types/Product";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const products: Product[] = await res.json();

  return (
    <div className="group overflow-hidden py-3">
      <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
        {products.map((product) => (
          <span
            className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm"
            key={product.id}
          >
            <span>{product.image}</span>

            <span className="font-semibold text-gray-800">
              {product.nameBn}
            </span>

            <span className="text-sm text-gray-600">
              {product.today} টাকা / {product.unit}
            </span>

            <span
              className={`font-bold ${
                product.change.dir === "up"
                  ? "text-red-600"
                  : product.change.dir === "down"
                    ? "text-green-600"
                    : "text-gray-500"
              }`}
            >
              {product.change.dir === "up"
                ? "▲"
                : product.change.dir === "down"
                  ? "▼"
                  : "—"}{" "}
              {product.change.pct}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
