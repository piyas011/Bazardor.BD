import Image from "next/image";
import CurrentDate from "../HeaderSection/Date";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="overflow-hidden rounded-2xl bg-linear-to-br from-green-50 via-white to-emerald-100">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 py-5 sm:grid-cols-2 sm:gap-6 sm:px-6 sm:py-7 lg:gap-10 lg:px-10 lg:py-8">
        {/* Hero Content */}
        <div className="order-2 sm:order-1">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-green-700 shadow-sm sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <CurrentDate />
          </div>

          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">
            আজকের বাজারের দাম
            <span className="mt-1 block text-green-600">এক নজরে</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন জানুন এক
            জায়গায়।
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="#AllProduct"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 sm:text-base"
            >
              সব পণ্য দেখুন
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 flex items-center justify-center sm:order-2">
          <div className="relative w-full max-w-47.5 sm:max-w-62.5 lg:max-w-[320px]">
            <div className="absolute inset-5 rounded-full bg-green-300/30 blur-2xl" />

            <Image
              src="/images/bazar-hero.png"
              alt="নিত্যপ্রয়োজনীয় পণ্য ও বাংলাদেশের বাজারদর"
              width={400}
              height={400}
              priority
              sizes="(max-width: 640px) 190px, (max-width: 1024px) 250px, 320px"
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
