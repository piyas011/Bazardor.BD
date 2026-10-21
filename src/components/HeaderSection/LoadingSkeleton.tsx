export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-5 rounded-2xl bg-white p-4 sm:p-6">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-7 w-2/3 rounded-lg bg-gray-200" />
        <div className="h-4 w-1/2 rounded-md bg-gray-100" />
      </div>

      {/* Product Cards Skeleton */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-100 p-3 sm:p-4"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
              <div className="h-5 w-5 rounded-md bg-green-200" />
            </div>

            <div className="mb-3 h-4 w-3/4 rounded bg-gray-200" />
            <div className="mb-2 h-6 w-1/2 rounded bg-gray-100" />
            <div className="h-3 w-2/3 rounded bg-gray-100" />
          </div>
        ))}
      </div>

      {/* Bottom Loading Indicator */}
      <div className="flex items-center justify-center gap-2 py-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:300ms]" />
        <span className="sr-only">তথ্য লোড হচ্ছে</span>
      </div>
    </div>
  );
}
