"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";

import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignInForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    console.log(userInfo);

    //
    const { data, error } = await signIn.email({
      email: String(userInfo.email),
      password: String(userInfo.password),
      callbackURL: "/",
      rememberMe: true,
    });
    console.log(data, error);
  };

  const handleGithubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };

  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
      additionalParams: {
        prompt: "select_account",
      },
    });
  };

  return (
    <main className="flex  items-start justify-center bg-[#f0f5f0] px-4 py-12">
      <div className="w-full max-w-97.5">
        <header className="mb-5 text-center">
          <h1 className="text-2xl font-bold text-slate-900">লগইন</h1>
          <p className="mt-1 text-sm text-slate-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে প্রবেশ করুন।
          </p>
        </header>

        <section className="rounded-[14px] border border-[#dce5dc] bg-white/70 p-5 sm:p-6">
          <form className="space-y-4" onSubmit={handleSignInForm}>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm">
                ইমেইল
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="h-9 w-full rounded-md border border-[#cbd3cb] bg-transparent px-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="আপনার পাসওয়ার্ড"
                  autoComplete="current-password"
                  required
                  className="h-9 w-full rounded-md border border-[#cbd3cb] bg-transparent px-3 pr-14 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-700"
                >
                  {showPassword ? "লুকান" : "দেখুন"}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-xs text-emerald-700 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            <button
              type="submit"
              className="h-9 w-full rounded-md bg-[#07883f] text-sm font-bold text-white shadow-sm transition hover:bg-[#067435]"
            >
              লগইন
            </button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-[#dce3dc]" />
            <span className="text-xs text-slate-600">অথবা</span>
            <span className="h-px flex-1 bg-[#dce3dc]" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleGoogleSignIn()}
              type="button"
              className="flex h-9 items-center justify-center gap-2 rounded-md border border-slate-800 text-xs font-medium hover:bg-slate-100 cursor-pointer"
            >
              <span className="font-bold text-blue-600">
                <FcGoogle />
              </span>
              Google দিয়ে
            </button>

            <button
              onClick={() => handleGithubSignIn()}
              type="button"
              className="flex h-9 items-center justify-center gap-2 rounded-md border border-slate-800 text-xs font-medium hover:bg-slate-100 cursor-pointer"
            >
              <span>
                <FaGithub />
              </span>
              GitHub দিয়ে
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-slate-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-semibold text-emerald-700 underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </section>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-slate-500 underline hover:text-emerald-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
