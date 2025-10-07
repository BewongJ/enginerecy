"use client";

import NavBar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Product Section */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-white">Engine Recy</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {/* ✅ Product Card */}
            <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Link href="/products/er">
                <div className="relative w-full h-full">
                  <Image
                    src="/img/product.png"
                    alt="Engine Recy Product"
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                  <p className="font-semibold">Engine Recy</p>
                  <p>Model : StreetRim Table</p>
                  <p className="text-gray-300">Price: 9,900 THB</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Contact + Footer */}
      <ContactSection />
      <Footer />
    </div>
  );
}
