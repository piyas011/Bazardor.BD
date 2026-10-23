import Image from "next/image";
import Link from "next/link";
import Date from "./Date";
import Categories from "./Categories";
import MarqueeText from "react-marquee-text";
import Marquee from "./Marquee";
import { Suspense } from "react";
import {
  CategoriesSkeleton,
  DateSkeleton,
  MarqueeSkeleton,
} from "@/components/Skeletons/LoadingSkeletons";
import AuthenticationButtons from "../auth/AuthenticationButtons";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-white/90">
        <div className="container mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3 rounded-xl transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <Image
                className="shrink-0 rounded-xl bg-green-50 p-1 object-contain"
                src="/logo.png"
                alt="বাজার দর"
                width={44}
                height={44}
                priority
              />

              <div className="min-w-0">
                <h1 className="truncate text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
                  বাজার দর
                  <span className="ml-1 text-green-600">.BD</span>
                </h1>

                <div className="mt-0.5 truncate text-xs text-gray-500 sm:text-sm">
                  <Suspense fallback={<DateSkeleton />}>
                    <Date />
                  </Suspense>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative flex w-full items-center justify-end sm:w-auto sm:shrink-0">
            <AuthenticationButtons />
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<CategoriesSkeleton />}>
              <Categories />
            </Suspense>
          </div>
        </div>
      </header>

      <div className="border-b border-green-100 bg-green-50/70 text-green-900">
        <MarqueeText direction="right" pauseOnHover duration={10}>
          <Suspense fallback={<MarqueeSkeleton />}>
            <Marquee />
          </Suspense>
        </MarqueeText>
      </div>
    </>
  );
};

export default Header;
