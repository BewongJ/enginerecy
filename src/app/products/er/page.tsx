"use client";

import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [open, setOpen] = useState(false);

  const images = [
    "/img/product.png",
    "/img/product1.png",
    "/img/product2.png",
    "/img/product3.png",
    "/img/product4.png",
    "/img/product5.png",
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setSelectedImage((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setSelectedImage((prev) => (prev - 1 + images.length) % images.length),
    trackMouse: true,
  });

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-gray-100 min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow">
        {/* ✅ รูปและข้อความอยู่ระดับเดียวกันไม่มีช่องว่าง */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6 items-start md:items-start">
          {/* ✅ Left: Images */}
          <div className="flex flex-col justify-start">
            {/* ✅ Mobile: swipe slider */}
            <div
              className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-lg md:hidden flex items-start justify-center"
              {...handlers}
            >
              <Image
                src={images[selectedImage]}
                alt="main product"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === selectedImage ? "bg-yellow-500" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ✅ Desktop: thumbnails + main image */}
            <div className="hidden md:flex gap-6 items-start">
              {/* thumbnails */}
              <div className="flex flex-col gap-3 justify-start">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border ${
                      selectedImage === index
                        ? "border-yellow-500"
                        : "border-gray-700"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={img}
                      alt={`thumb-${index}`}
                      fill
                      className="object-cover hover:opacity-90 transition"
                    />
                  </div>
                ))}
              </div>

              {/* ✅ main large image (ชิดบนแนวเดียวกับข้อความ) */}
              <div className="relative flex-1 h-[700px] rounded-2xl overflow-hidden shadow-lg flex items-start justify-center">
                <Image
                  src={images[selectedImage]}
                  alt="main product"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* ✅ Right Info (ชิดบนสุดแนวเดียวกับรูป) */}
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white leading-tight">
              Engine Recy
            </h1>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white leading-tight">
              Model: StreetRim Table
            </h1>

            <p className="text-gray-400 mb-4">
              The wheels table is made from junk car.
            </p>
            <p className="text-2xl font-semibold mb-6 text-white">
              Price: 9,900 THB
            </p>

            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-between w-full md:w-[350px] font-semibold text-lg text-black bg-white rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <span>Product Details</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* ✅ Background blur when open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ✅ Slide-over panel */}
      <div
        className={`fixed bg-white text-gray-900 z-50 shadow-2xl transform transition-transform duration-300
          h-full sm:h-full
          w-full sm:w-[400px]
          bottom-0 sm:top-0
          sm:right-0
          ${
            open
              ? "translate-y-0 sm:translate-x-0"
              : "translate-y-full sm:translate-x-full"
          }
          rounded-t-2xl sm:rounded-none
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Product Details</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)] text-gray-800 leading-relaxed">
          <p>
            <strong>Product Description</strong>
            <br />
            Perfect for use as a center table in your living room or paired with
            picnic chairs to add a cool and unique touch to your relaxing
            corner.
          </p>

          <p>
            <strong>Designed by:</strong> Engine Recy
            <br />
            <strong>Model:</strong> StreetRim Table
          </p>

          <p>
            <strong>Materials:</strong>
            <br />
            The table base is made from genuine alloy wheels from automotive
            parts, cleaned, rust-proofed and painted in matte black.
            <br />
            <br />
            The top is made of 5mm thick clear tempered glass. Glass diameter:
            56.5cm. Provides strength and beauty.
            <br />
            <br />
            The base is made of round plywood, 46.5 cm in diameter, coated in
            black.
          </p>

          <p>
            <br />
            Total height: 36 cm
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
