"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  { src: "/img/A4.png", alt: "Car 1" },
  { src: "/img/A8.jpg", alt: "Car 2" },
  { src: "/img/A6.jpg", alt: "Car 3" },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-full">
      {/* ข้อความคงที่ */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <div className="font-rockwell text-4xl mb-4">ENGINE RECY</div>
        <p className="mb-6 bg-black-500 font-arialrounded text-2xl">
          Recycling junk car, creating new value for a sustainable world
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-[600px]" // ปรับให้รองรับ tailwind
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className="relative w-full h-[600px]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i === 0} // โหลดภาพแรกเร็วสุด
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
