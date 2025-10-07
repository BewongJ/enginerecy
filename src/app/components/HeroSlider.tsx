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
    <div className="relative w-full overflow-hidden bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* ข้อความตรงกลาง (ไม่บังปุ่ม) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4 pointer-events-none text-overlay">
        <h1 className="font-rockwell text-4xl sm:text-6xl font-bold drop-shadow-lg mb-3">
          ENGINE RECY
        </h1>
        <p className="text-lg sm:text-2xl font-arialrounded  px-4 py-2  ">
          Recycling junk car, creating new value for a sustainable world
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-auto"
      >
        {images.map((item, i) => (
          <SwiperSlide
            key={i}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i === 0}
              className="object-cover bg-black"
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ CSS สำหรับ Next.js */}
      <style jsx global>{`
        /* ปุ่มลูกศร Swiper */
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          width: 50px;
          height: 50px;
          background-color: rgba(0, 0, 0, 0.6);
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 50 !important;
          pointer-events: auto !important;
        }

        .swiper-button-prev {
          left: 25px !important;
        }
        .swiper-button-next {
          right: 25px !important;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: #facc15;
          color: black !important;
          transform: scale(1.1);
        }

        /* จุด pagination */
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #facc15;
          opacity: 1;
        }

        /* 📱 Responsive ปรับสำหรับมือถือ */
        @media (max-width: 768px) {
          /* ลดขนาดฟอนต์และเลื่อนข้อความขึ้น */
          .text-overlay {
            top: 20% !important;
            transform: translateY(0) !important;
          }

          .text-overlay h1 {
            font-size: 2rem !important;
          }

          .text-overlay p {
            font-size: 1rem !important;
            padding: 0.3rem 0.8rem !important;
          }

          /* ปุ่มเลื่อนลงด้านล่าง ไม่ชนข้อความ */
          .swiper-button-prev,
          .swiper-button-next {
            width: 40px;
            height: 40px;
            top: auto !important;
            bottom: 20px !important;
          }

          .swiper-button-prev {
            left: 15px !important;
          }

          .swiper-button-next {
            right: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
