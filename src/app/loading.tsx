export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 text-4xl shadow-sm">
        🛒
      </div>

      {/* Website Name */}
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        বাজার দর<span className="text-green-600">.BD</span>
      </h1>

      <p className="mt-2 text-center text-sm text-gray-500">
        বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর
      </p>

      {/* Loading Spinner */}
      <div className="mt-10 flex flex-col items-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-100 border-t-green-600" />

        <p className="mt-4 animate-pulse text-sm font-medium text-green-700">
          তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
        </p>
      </div>

      {/* Loading Skeleton */}
      <div className="mt-10 w-full max-w-md space-y-3">
        <div className="h-4 w-3/4 animate-pulse rounded-md bg-gray-200" />
        <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
        <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-200" />
      </div>

      <p className="mt-12 text-xs text-gray-400">সঠিক বাজারদর, সবার অধিকার।</p>
    </main>
  );
}
