import type { ReactNode } from "react";

type AuthFormSkeletonProps = {
  variant: "login" | "signup";
};

function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse motion-reduce:animate-none rounded bg-slate-200 ${className}`}
    />
  );
}

function LoadingStatus({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div role="status" aria-busy="true" className={className}>
      {children}
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-slate-100 bg-white p-4"
    >
      <div className="flex items-center gap-3">
        <SkeletonBlock className="h-14 w-14 shrink-0 rounded-xl bg-emerald-100" />
        <div className="min-w-0 flex-1 space-y-2">
          <SkeletonBlock className="h-5 w-3/4" />
          <SkeletonBlock className="h-4 w-1/2 bg-slate-100" />
        </div>
      </div>
      <div className="my-5 border-t border-dashed border-slate-200" />
      <div className="flex items-end justify-between gap-3">
        <div className="w-1/2 space-y-2">
          <SkeletonBlock className="h-3 w-2/3 bg-slate-100" />
          <SkeletonBlock className="h-7 w-3/4" />
        </div>
        <SkeletonBlock className="h-9 w-16 rounded-lg bg-emerald-100" />
      </div>
      <SkeletonBlock className="mt-4 h-3 w-3/4 bg-slate-100" />
    </div>
  );
}

function ProductGridSkeleton({
  count,
  className,
}: {
  count: number;
  className: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function HomePageSkeleton() {
  return (
    <LoadingStatus
      label="হোম পেজের বাজারদরের তথ্য লোড হচ্ছে"
      className="container mx-auto"
    >
      <section
        aria-hidden="true"
        className="grid min-h-56 animate-pulse motion-reduce:animate-none items-center gap-6 rounded-2xl bg-linear-to-br from-green-50 via-white to-emerald-100 p-6 sm:grid-cols-2 sm:p-10"
      >
        <div className="space-y-4">
          <SkeletonBlock className="h-5 w-32 bg-emerald-100" />
          <SkeletonBlock className="h-9 w-3/4" />
          <SkeletonBlock className="h-4 w-full bg-slate-100" />
          <SkeletonBlock className="h-4 w-5/6 bg-slate-100" />
          <SkeletonBlock className="h-10 w-36 rounded-lg bg-emerald-200" />
        </div>
        <SkeletonBlock className="mx-auto h-36 w-36 rounded-full bg-emerald-100 sm:h-48 sm:w-48" />
      </section>

      <section className="mt-20 space-y-5 px-4 py-6">
        <SkeletonBlock className="h-8 w-56 bg-slate-300" />
        <ProductGridSkeleton
          count={3}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        />
      </section>

      <section className="mt-32 space-y-5">
        <SkeletonBlock className="h-8 w-56 bg-slate-300" />
        <ProductGridSkeleton
          count={3}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        />
      </section>

      <section className="mt-30 space-y-4">
        <div className="space-y-2">
          <SkeletonBlock className="h-10 w-44 bg-slate-300" />
          <SkeletonBlock className="h-4 w-48 bg-slate-100" />
        </div>
        <ProductGridSkeleton
          count={8}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        />
      </section>
    </LoadingStatus>
  );
}

export function CategoryPageSkeleton() {
  return (
    <LoadingStatus
      label="ক্যাটাগরির পণ্য লোড হচ্ছে"
      className="space-y-6"
    >
      <section
        aria-hidden="true"
        className="flex animate-pulse motion-reduce:animate-none flex-col gap-4 rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-4 sm:flex-row sm:items-center sm:p-6"
      >
        <SkeletonBlock className="h-16 w-16 shrink-0 rounded-2xl bg-emerald-100" />
        <div className="min-w-0 flex-1 space-y-2">
          <SkeletonBlock className="h-7 w-48" />
          <SkeletonBlock className="h-4 w-64 bg-slate-100" />
        </div>
        <SkeletonBlock className="h-8 w-24 rounded-full bg-emerald-100" />
      </section>

      <div
        aria-hidden="true"
        className="flex animate-pulse motion-reduce:animate-none flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <SkeletonBlock className="h-6 w-48 bg-slate-100" />
        <SkeletonBlock className="h-10 w-full rounded-lg sm:w-48" />
      </div>

      <ProductGridSkeleton
        count={6}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
      />
    </LoadingStatus>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <LoadingStatus
      label="পণ্যের তথ্য ও বাজারভিত্তিক দাম লোড হচ্ছে"
      className="space-y-6"
    >
      <section
        aria-hidden="true"
        className="flex animate-pulse motion-reduce:animate-none flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="flex min-w-0 items-start gap-4">
          <SkeletonBlock className="h-16 w-16 shrink-0 rounded-2xl bg-emerald-100 sm:h-20 sm:w-20" />
          <div className="flex-1 space-y-3 pt-1">
            <SkeletonBlock className="h-7 w-48 sm:w-64" />
            <SkeletonBlock className="h-4 w-36 bg-slate-100" />
            <SkeletonBlock className="h-9 w-52 rounded-lg bg-emerald-100" />
          </div>
        </div>
        <div className="space-y-3 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:min-w-44">
          <SkeletonBlock className="h-4 w-20 bg-slate-100" />
          <SkeletonBlock className="h-10 w-28" />
          <SkeletonBlock className="h-4 w-24 bg-slate-100" />
        </div>
      </section>

      <section
        aria-hidden="true"
        className="animate-pulse motion-reduce:animate-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
      >
        <SkeletonBlock className="mb-5 h-7 w-48 bg-slate-300" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-100 bg-slate-50 p-5"
            >
              <SkeletonBlock className="h-5 w-28 bg-slate-200" />
              <SkeletonBlock className="mt-4 h-9 w-32" />
              <SkeletonBlock className="mt-4 h-4 w-full bg-slate-100" />
            </div>
          ))}
        </div>
      </section>

      <section
        aria-hidden="true"
        className="animate-pulse motion-reduce:animate-none"
      >
        <SkeletonBlock className="mb-6 h-7 w-64 bg-slate-300" />
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid grid-cols-5 gap-4 bg-slate-100 p-4">
            {Array.from({ length: 5 }, (_, index) => (
              <SkeletonBlock key={index} className="h-4 bg-slate-300" />
            ))}
          </div>
          {Array.from({ length: 4 }, (_, row) => (
            <div
              key={row}
              className="grid grid-cols-5 gap-4 border-t border-slate-100 p-4"
            >
              {Array.from({ length: 5 }, (_, column) => (
                <SkeletonBlock
                  key={column}
                  className="h-4 bg-slate-100"
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </LoadingStatus>
  );
}

export function AuthFormSkeleton({ variant }: AuthFormSkeletonProps) {
  const fieldCount = variant === "signup" ? 3 : 2;
  const label = variant === "signup" ? "সাইন আপ ফর্ম লোড হচ্ছে" : "লগইন ফর্ম লোড হচ্ছে";

  return (
    <LoadingStatus
      label={label}
      className="flex items-start justify-center bg-[#f0f5f0] px-4 py-12"
    >
      <div
        aria-hidden="true"
        className="w-full max-w-97.5 animate-pulse motion-reduce:animate-none"
      >
        <div className="mb-5 space-y-2 text-center">
          <SkeletonBlock className="mx-auto h-8 w-32 bg-slate-300" />
          <SkeletonBlock className="mx-auto h-4 w-full max-w-80 bg-slate-100" />
        </div>
        <section className="space-y-4 rounded-[14px] border border-[#dce5dc] bg-white/70 p-5 sm:p-6">
          {Array.from({ length: fieldCount }, (_, index) => (
            <div key={index} className="space-y-2">
              <SkeletonBlock className="h-4 w-20 bg-slate-300" />
              <SkeletonBlock className="h-9 w-full rounded-md bg-slate-100" />
            </div>
          ))}
          {variant === "login" && (
            <SkeletonBlock className="ml-auto h-4 w-36 bg-slate-100" />
          )}
          <SkeletonBlock className="h-9 w-full rounded-md bg-emerald-200" />
          <div className="flex items-center gap-3 py-1">
            <SkeletonBlock className="h-px flex-1 bg-slate-200" />
            <SkeletonBlock className="h-3 w-10 bg-slate-100" />
            <SkeletonBlock className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <SkeletonBlock className="h-9 rounded-md bg-slate-100" />
            <SkeletonBlock className="h-9 rounded-md bg-slate-100" />
          </div>
          <SkeletonBlock className="mx-auto h-4 w-48 bg-slate-100" />
        </section>
        <SkeletonBlock className="mx-auto mt-6 h-4 w-40 bg-slate-100" />
      </div>
    </LoadingStatus>
  );
}

export function CategoriesSkeleton() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="flex gap-3 overflow-hidden py-2"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <SkeletonBlock
          key={index}
          className="h-11 w-28 shrink-0 rounded-xl"
        />
      ))}
      <span className="sr-only">ক্যাটাগরি লোড হচ্ছে</span>
    </div>
  );
}

export function MarqueeSkeleton() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="flex gap-4 overflow-hidden py-3"
    >
      {Array.from({ length: 4 }, (_, index) => (
        <SkeletonBlock
          key={index}
          className="h-10 w-52 shrink-0 rounded-lg"
        />
      ))}
      <span className="sr-only">বাজারদরের তথ্য লোড হচ্ছে</span>
    </div>
  );
}

export function DateSkeleton() {
  return (
    <div role="status" aria-busy="true" className="inline-flex">
      <SkeletonBlock className="h-4 w-28 bg-slate-200" />
      <span className="sr-only">তারিখ লোড হচ্ছে</span>
    </div>
  );
}
