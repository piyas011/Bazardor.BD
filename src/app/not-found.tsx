"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <h1 className="text-[120px] font-black leading-none tracking-tight text-emerald-100 sm:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-600 text-5xl shadow-xl shadow-emerald-600/20 sm:h-28 sm:w-28">
              🛒
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
          Page Not Found
        </p>

        <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-4xl">
          দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি সরানো হয়েছে, ঠিকানা পরিবর্তন হয়েছে অথবা
          পৃষ্ঠাটি বর্তমানে উপলব্ধ নেই।
        </p>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <span aria-hidden="true">⌂</span>
            হোম পেজে ফিরে যান
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            ← আগের পৃষ্ঠায় ফিরুন
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-sm text-slate-400">
          প্রয়োজনীয় পণ্যের দৈনিক বাজারদর জানতে{" "}
          <Link
            href="/"
            className="font-semibold text-emerald-700 underline-offset-4 hover:underline"
          >
            bazarDor.BD
          </Link>
          -তে ফিরে আসুন।
        </p>
      </div>
    </main>
  );
}
