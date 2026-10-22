import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderSection/Header";
import Footer from "@/components/Footer/Footer";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "BazarDor.BD – বাংলাদেশের দৈনিক বাজারদর",
  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর জানুন। চাল, ডাল, তেল, মাছ, মাংস, ডিম, শাকসবজি ও অন্যান্য পণ্যের দাম এবং বিভিন্ন বাজারের মূল্য তুলনা করুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${NotoSerifBengali} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="container mx-auto">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
