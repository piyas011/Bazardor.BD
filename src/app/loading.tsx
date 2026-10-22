import LoadingSkeleton from "@/components/HeaderSection/LoadingSkeleton";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="বাজারদরের তথ্য লোড হচ্ছে"
      className="container mx-auto space-y-8 px-4 py-6"
    >
      <div className="grid min-h-56 animate-pulse items-center gap-6 rounded-2xl bg-green-50 p-6 sm:grid-cols-2 sm:p-10">
        <div className="space-y-4">
          <div className="h-4 w-28 rounded bg-green-100" />
          <div className="h-9 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-100" />
          <div className="h-4 w-5/6 rounded bg-gray-100" />
        </div>
        <div className="mx-auto h-36 w-36 rounded-full bg-green-100" />
      </div>

      {["আজ দাম বেড়েছে", "আজ দাম কমেছে"].map((title) => (
        <section key={title} className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-400">{title}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="h-36 animate-pulse rounded-xl border border-gray-100 bg-white p-4"
              >
                <div className="mb-4 h-5 w-2/3 rounded bg-gray-100" />
                <div className="mb-3 h-7 w-1/3 rounded bg-gray-200" />
                <div className="h-4 w-1/2 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-400">সব পণ্য</h2>
          <div className="mt-2 h-4 w-40 animate-pulse rounded bg-gray-100" />
        </div>
        <LoadingSkeleton />
      </section>

      <span className="sr-only">তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন</span>
    </div>
  );
}
