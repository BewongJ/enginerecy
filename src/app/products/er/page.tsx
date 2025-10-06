"use client";

import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, X } from "lucide-react";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState("/img/product.png");
  const [open, setOpen] = useState(false);

  const images = [
    "/img/product.png",
    "/img/product1.png",
    "/img/product2.png",
    "/img/product3.png",
    "/img/product4.png",
    "/img/product5.png",
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-gray-100 min-h-screen flex flex-col">
      <NavBar />

      {/* main product detail */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
          {/* Left images */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border ${
                    selectedImage === img
                      ? "border-yellow-500"
                      : "border-gray-700"
                  }`}
                  onClick={() => setSelectedImage(img)}
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

            <div className="relative flex-1 h-[800px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={selectedImage}
                alt="main product"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Engine Recy Model : StreetRim Table
            </h1>
            <p className="text-gray-400 mb-4">ฐานโต๊ะผลิตจาก ล้อแม๊ก</p>
            <p className="text-2xl font-semibold mb-6 text-white">9900 THB</p>

            <div className="space-y-4 mb-8">
              <div>
                <p className="font-medium mb-1">ขนาด</p>
                <p className="text-gray-300">ความสูงรวม: 36 ซม.</p>
              </div>
            </div>

            {/* ✅ ปุ่มอยู่ใต้ราคา */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-between w-full md:w-[350px] font-semibold text-lg text-black bg-white rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <span>รายละเอียดสินค้า</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* Background blur */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Slide-over panel */}
      <div
        className={`fixed bg-white text-gray-900 z-50 shadow-2xl transform transition-transform duration-300
          h-full sm:h-full
          w-full sm:w-[400px]
          bottom-0 sm:top-0
          sm:right-0
          ${open ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-x-full"}
          rounded-t-2xl sm:rounded-none
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">รายละเอียดสินค้า</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-64px)]">
          <p>ชื่อสินค้า : Engine Recy Model : StreetRim Table</p>
          <p>ออกแบบโดย : Designed by : Engine Recy</p>

          <p className="font-semibold mt-2">วัสดุและการดูแล:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              ฐานโต๊ะผลิตจาก ล้อแม๊กจริงจากอะไหล่รถยนต์ ผ่านการทำความสะอาด
              เคลือบกันสนิม และพ่นสีดำด้าน
            </li>
            <li>
              ด้านบนเป็น กระจกนิรภัยใสหนา 5 มม. เส้นผ่านศูนย์กลางกระจก: 56.5 ซม.
              ให้ความแข็งแรงและสวยงาม
            </li>
            <li>
              ด้านล่างเป็น ฐานไม้อัดวงกลม เส้นผ่านศูนย์กลาง 46.5 CM เคลือบสีดำ
            </li>
          </ul>

          <p className="font-semibold mt-2">ขนาดสินค้า:</p>
          <p>ความสูงรวม: 36 ซม.</p>
        </div>
      </div>

      {/* ✅ Footer จะอยู่ล่างเสมอ */}
      <Footer />
    </div>
  );
}
