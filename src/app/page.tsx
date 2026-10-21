import Banner from "@/components/MainSection/Banner";
import PriceDecreasedToday from "@/components/MainSection/PriceDecreasedToday";
import PriceIncreasedToday from "@/components/MainSection/PriceIncreasedToday";
import { Product } from "@/types/Product";

export default async function Home() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: Product[] = await res.json();

  return (
    <div className="container mx-auto">
      <div>
        <Banner />
      </div>
      <div>
        <PriceIncreasedToday products={data} />
      </div>
      <div>
        <PriceDecreasedToday products={data} />
      </div>
    </div>
  );
}
