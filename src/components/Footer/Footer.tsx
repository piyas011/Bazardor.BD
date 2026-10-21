import Link from "next/link";

const quickLinks = [
  { name: "হোম", href: "/" },
  { name: "সকল পণ্যের দাম", href: "/products" },
  { name: "বাজারদরের তুলনা", href: "/compare" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
];

const categories = [
  { name: "চাল ও শস্য", href: "/category/rice-grains" },
  { name: "মাছ ও মাংস", href: "/category/fish-meat" },
  { name: "শাকসবজি", href: "/category/vegetables" },
  { name: "ফলমূল", href: "/category/fruits" },
  { name: "তেল ও মসলা", href: "/category/oil-spices" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-tight text-white"
            >
              bazar<span className="text-emerald-400">Dor</span>
              <span className="text-emerald-400">.BD</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর জানুন সহজেই।
              বাজারে যাওয়ার আগে দাম যাচাই করুন, সচেতন সিদ্ধান্ত নিন।
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              প্রতিদিনের বাজারদর এক জায়গায়
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-5 text-base font-bold text-white">
              গুরুত্বপূর্ণ লিংক
            </h2>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="mb-5 text-base font-bold text-white">
              পণ্যের ক্যাটাগরি
            </h2>

            <ul className="space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="transition-colors duration-200 hover:text-emerald-400"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h2 className="mb-5 text-base font-bold text-white">
              তথ্য ও সহায়তা
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-200 hover:text-emerald-400"
                >
                  যোগাযোগ করুন
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors duration-200 hover:text-emerald-400"
                >
                  গোপনীয়তা নীতি
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors duration-200 hover:text-emerald-400"
                >
                  ব্যবহারের শর্তাবলি
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="transition-colors duration-200 hover:text-emerald-400"
                >
                  মূল্যসংক্রান্ত সতর্কতা
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-xl border border-white/10 bg-white/3 p-4">
          <p className="text-xs leading-6 text-slate-400">
            <span className="font-semibold text-slate-300">
              মূল্যসংক্রান্ত বিজ্ঞপ্তি:
            </span>{" "}
            বাজার, স্থান, সময় ও পণ্যের মানভেদে দাম পরিবর্তিত হতে পারে।
            কেনাকাটার আগে স্থানীয় বাজারে বর্তমান মূল্য যাচাই করে নিন।
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} bazarDor.BD — সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p className="text-xs text-slate-500">
            বাংলাদেশের বাজারদর, আপনার হাতের নাগালে।
          </p>
        </div>
      </div>
    </footer>
  );
}
