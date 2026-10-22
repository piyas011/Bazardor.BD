import Image from "next/image";
import Link from "next/link";
import Date from "./Date";
import Categories from "./Categories";
import MarqueeText from "react-marquee-text";
import Marquee from "./Marquee";
import { Suspense } from "react";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex container  flex-col gap-4  py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8  ">
          {/* Logo and Website Info */}
          <div className="flex items-center gap-3 ">
            <Link
              href="/"
              className=" p-2 rounded-2xl flex justify-center items-center gap-2"
            >
              <Image
                className="rounded-lgp-1 object-contain "
                src="/logo.png"
                alt="বাজার দর"
                width={44}
                height={44}
                priority
              />

              <div className="min-w-0">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  বাজার দর
                  <span className="ml-1 text-green-600">.BD</span>
                </h1>

                <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                  <Suspense fallback={<div>লোড হচ্ছে...</div>}>
                    <Date />
                  </Suspense>
                </div>
              </div>
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="flex w-full items-center gap-3 sm:w-auto">
            <Link
              className="flex-1 rounded-lg border border-green-600 px-4 py-2 text-center text-sm font-semibold text-green-700 transition-colors hover:bg-green-50 sm:flex-none"
              href="/login"
            >
              সাইন ইন
            </Link>

            <Link
              className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:flex-none"
              href="/signup"
            >
              সাইন আপ করুন
            </Link>
          </div>
        </div>

        {/* All Categories: */}
        <div className="container mx-auto border-t border-gray-100">
          <Suspense
            fallback={
              <div
                role="status"
                aria-label="ক্যাটাগরি লোড হচ্ছে"
                className="flex gap-3 overflow-hidden py-2"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    className="h-11 w-28 shrink-0 animate-pulse rounded-xl bg-gray-100"
                  />
                ))}
              </div>
            }
          >
            <Categories />
          </Suspense>
        </div>
      </header>

      <div className="border-t border-gray-200 mt-2 ">
        <MarqueeText direction="right" pauseOnHover duration={10}>
          <Suspense
            fallback={
              <div
                role="status"
                aria-label="বাজারদরের তথ্য লোড হচ্ছে"
                className="flex gap-4 overflow-hidden py-3"
              >
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="h-10 w-52 shrink-0 animate-pulse rounded-lg bg-gray-100"
                  />
                ))}
              </div>
            }
          >
            <Marquee />
          </Suspense>
        </MarqueeText>
      </div>
    </>
  );
};

export default Header;
