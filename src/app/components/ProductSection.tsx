"use client";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Comming Soon",
    desc: "",
    price: "",
    images: [
      "/img/product.png",
      "/img/product1.png",
      "/img/product2.png",
      "/img/product3.png",
    ],
  },
];

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section id="product" className="px-4 py-10">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">Products</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedProduct(item);
                setActiveImg(item.images[0]);
              }}
              className="cursor-pointer rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/30 hover:scale-[1.02] transition"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h4 className="text-base md:text-lg font-semibold">{item.name}</h4>
                <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-gradient-to-b from-black to-gray-900 text-gray-100 rounded-lg shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* รูปสินค้าใหญ่ */}
            <div className="flex flex-col items-center">
              <div className="w-full h-64 sm:h-80 md:h-[400px] flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-gray-100">
                <Image
                  src={activeImg || selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>

              {/* Thumbnail */}
              <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {selectedProduct.images.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className={`w-16 h-16 relative cursor-pointer border ${
                      activeImg === img ? "border-red-500" : "border-gray-300"
                    }`}
                    onClick={() => setActiveImg(img)}
                  >
                    <Image
                      src={img}
                      alt={`thumb-${idx}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ข้อมูลสินค้า */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-600">{selectedProduct.desc}</p>
              <p className="text-3xl font-extrabold text-red-500">
                {selectedProduct.price}
              </p>
            </div>

            {/* ปุ่มปิด */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-700 text-2xl md:text-3xl"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
