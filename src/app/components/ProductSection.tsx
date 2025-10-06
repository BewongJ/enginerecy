"use client";
import { useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: string;
  images: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Engine Recy Model : StreetRim Table",
    desc: "9,900",
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [showDetail, setShowDetail] = useState(false); // ✅ state สำหรับ sidebar

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
              <div className="aspect-[4/5] relative">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-fill"
                />
              </div>

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

      {/* Popup Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedProduct(null);
            setShowDetail(false);
          }}
        >
          <div
            className="relative bg-gradient-to-b from-black to-gray-900 text-gray-100 rounded-lg shadow-lg 
            w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-6 md:p-10 
            items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* รูปสินค้าใหญ่ */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-full h-64 sm:h-80 md:h-[400px] flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-gray-100 rounded-lg">
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
                {selectedProduct.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-16 h-16 relative cursor-pointer border rounded-md ${
                      activeImg === img ? "border-red-500" : "border-gray-300"
                    }`}
                    onClick={() => setActiveImg(img)}
                  >
                    <Image
                      src={img}
                      alt={`thumb-${idx}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ข้อมูลสินค้า */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 px-4 md:px-6">
              <h2 className="text-2xl font-bold text-gray-100">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-300">{selectedProduct.desc}</p>
              <p className="text-3xl font-extrabold text-red-500">
                {selectedProduct.price}
              </p>

              {/* ✅ ปุ่ม "รายละเอียดสินค้า →" */}
              <button
                onClick={() => setShowDetail(true)}
                className="flex items-center justify-between w-full max-w-[220px] border-b-2 border-transparent hover:border-gray-400 transition py-2 mt-2"
              >
                <span className="font-semibold  ">
                  รายละเอียดสินค้า
                </span>
                <span className="text-xl ml-2">→</span>
              </button>
            </div>

            {/* ปุ่มปิด */}
            <button
              onClick={() => {
                setSelectedProduct(null);
                setShowDetail(false);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-2xl md:text-3xl"
            >
              ✕
            </button>
          </div>

          {/* ✅ Slide รายละเอียดสินค้า */}
          <div
            className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white text-black z-[60] shadow-2xl transform transition-transform duration-500 ${
              showDetail ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-5 border-b bg-gray-50">
              <h3 className="text-lg font-semibold">รายละเอียดสินค้า</h3>
              <button
                onClick={() => setShowDetail(false)}
                className="text-2xl font-bold hover:text-red-600"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto h-full leading-relaxed">
              <p>ชื่อสินค้า: {selectedProduct.name}</p>
              <p>ราคา: {selectedProduct.desc}</p>
              <hr className="border-gray-300" />
              <p>
                รายละเอียดเพิ่มเติม: หน้าบาน Engine Recy รุ่น StreetRim Table
                ออกแบบโดยทีมงานไทย คุณภาพสูง แข็งแรง และทนความร้อน
              </p>
              <p>รับประกันสินค้า 25 ปี</p>
              <p>ประเทศผู้ออกแบบ: Thailand</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
