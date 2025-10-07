"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
}

export default function ProductCard({ id, name, price, image, link }: ProductCardProps) {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-black">
      <Link href={link}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain bg-black transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-300">{price}</p>
        </div>
      </Link>
    </div>
  );
}
