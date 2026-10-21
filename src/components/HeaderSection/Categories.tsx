import { CategoryType } from "@/types/CategoryType";
import Link from "next/link";

const Categories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const categories: CategoryType[] = await res.json();

  return (
    <div className="w-full py-1 mt-1">
      <div className="flex gap-3 overflow-x-auto sm:flex-wrap sm:overflow-visible">
        {categories.map((link) => (
          <Link
            href={`/category/${link.slug}`}
            key={link.id}
            className="group flex min-w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-green-500 hover:bg-green-50 hover:text-green-700 hover:shadow-md sm:px-5"
          >
            <span className="text-xl transition-transform duration-200 group-hover:scale-110">
              {link.icon}
            </span>

            <span>{link.nameBn}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
