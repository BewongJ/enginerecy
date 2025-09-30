"use client";
import Image from "next/image";

const products = [
  { id: 1, name: "Coming Soon", desc: "", img: "/img/product.png" },
];

export default function ProductSection() {
  return (
    <section id="product" className="px-4 py-10">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Products
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/30"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="text-base md:text-lg font-semibold">
                  {item.name}
                </h4>
                <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
