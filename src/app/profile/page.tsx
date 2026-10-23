"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  UserRound,
  ShieldCheck,
  CalendarDays,
  Pencil,
} from "lucide-react";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const getInitials = (name?: string | null) => {
    if (!name?.trim()) return "U";

    const words = name.trim().split(/\s+/);
    return words.length > 1
      ? `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
      : words[0].slice(0, 2).toUpperCase();
  };

  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-9 animate-spin rounded-full border-4 border-green-100 border-t-green-600" />
          <p className="text-sm text-gray-500">প্রোফাইল লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <UserRound className="mx-auto mb-4 text-gray-400" size={42} />
          <h1 className="text-xl font-bold text-gray-900">লগইন করা হয়নি</h1>
          <p className="mt-2 text-sm text-gray-500">
            আপনার প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            সাইন ইন করুন
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] bg-gray-50 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back Navigation */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-green-600"
        >
          <ArrowLeft size={18} />
          হোম পেজে ফিরে যান
        </Link>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য দেখুন।
          </p>
        </div>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Profile Banner */}
          <div className="h-32 bg-linear-to-r from-green-600 via-green-500 to-lime-400 sm:h-40" />

          {/* Avatar and User Details */}
          <div className="px-5 pb-6 sm:px-8">
            <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-green-100 text-2xl font-bold text-green-700 shadow-sm sm:h-28 sm:w-28">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "Profile picture"}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  getInitials(user.name)
                )}
              </div>

              <Link
                href="/profile/edit"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-green-600 hover:bg-green-50 hover:text-green-700"
              >
                <Pencil size={16} />
                প্রোফাইল এডিট
              </Link>
            </div>

            <div className="mt-5">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {user.name || "ব্যবহারকারী"}
              </h2>
              <p className="mt-1 break-all text-sm text-gray-500">
                {user.email}
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                <ShieldCheck size={15} />
                অ্যাকাউন্ট সক্রিয়
              </div>
            </div>
          </div>
        </section>

        {/* Account Information */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-gray-900">অ্যাকাউন্টের তথ্য</h2>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের সঙ্গে সম্পর্কিত তথ্য।
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <UserRound size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">সম্পূর্ণ নাম</p>
                <p className="mt-1 wrap-break text-sm font-semibold text-gray-800">
                  {user.name || "নাম যোগ করা হয়নি"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Mail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">ইমেইল অ্যাড্রেস</p>
                <p className="mt-1 break-all text-sm font-semibold text-gray-800">
                  {user.email}
                </p>
                {"emailVerified" in user && (
                  <p className="mt-1 text-xs text-gray-500">
                    {user.emailVerified
                      ? "ইমেইল ভেরিফাই করা হয়েছে"
                      : "ইমেইল এখনো ভেরিফাই করা হয়নি"}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                <CalendarDays size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">অ্যাকাউন্ট স্ট্যাটাস</p>
                <p className="mt-1 text-sm font-semibold text-gray-800">
                  নিবন্ধিত ব্যবহারকারী
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-4">
          <ShieldCheck className="mt-0.5 shrink-0 text-green-700" size={20} />
          <div>
            <p className="text-sm font-semibold text-green-900">
              আপনার অ্যাকাউন্টের নিরাপত্তা
            </p>
            <p className="mt-1 text-xs leading-5 text-green-800">
              আপনার লগইন তথ্য নিরাপদ রাখুন এবং অপরিচিত কারও সঙ্গে পাসওয়ার্ড
              শেয়ার করবেন না।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
