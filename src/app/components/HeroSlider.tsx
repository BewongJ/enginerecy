"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  { src: "/img/A4.png", alt: "Car 1" },
  { src: "/img/A6.jpg", alt: "Car 2" },
  { src: "/img/logo3.png", alt: "Car 3" },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ Overlay มืดให้อ่านข้อความชัด */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* ✅ ข้อความตรงกลาง */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
        <h1 className="font-rockwell text-4xl sm:text-6xl font-bold drop-shadow-lg mb-3">
          ENGINE RECY
        </h1>
        <p className="text-lg sm:text-2xl font-arialrounded bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm shadow-md">
          Recycling junk car, creating new value for a sustainable world
        </p>
      </div>

      {/* ✅ Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={i === 0}
                className="image-fit"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ CSS ปรับ responsive + crop ขอบดำ */}
      <style jsx global>{`
        /* --- ปุ่มเลื่อน --- */
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          transition: opacity 0.3s;
          top: 50%;
          transform: translateY(-50%);
          z-index: 30;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          opacity: 0.8;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #facc15;
          opacity: 1;
        }

        /* --- responsive ปุ่มใหญ่ขึ้นในมือถือ --- */
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 50px;
            height: 50px;
            color: #fff !important;
          }
        }

        /* --- ปรับภาพให้เต็มจอทุก device --- */
        .image-fit {
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 768px) {
          /* ✅ มือถือ: ตัดเฉพาะขอบดำบนล่าง */
          .image-fit {
            object-fit: cover !important;
            object-position: center 40% !important; /* เลื่อนขึ้นเล็กน้อยให้เห็นรถเต็ม */
            background-color: black;
          }
        }
      `}</style>
    </div>
  );
}
