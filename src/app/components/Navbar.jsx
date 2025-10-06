"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-800 bg-neutral-950 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <a href="#top" className="flex items-center gap-2">
          <img src="/img/logo.png" alt="ENGINE RECY logo" className="h-5 w-auto sm:h-12" />

          <span className="font-rockwell text-[18px] whitespace-nowrap">
            ENGINE RECY
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg font-arialrounded leading-none tracking-wide">
          <Link href="/" className="text-primary-400 hover:text-primary-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-primary-400">
            Product
          </Link>
          <Link href="/contact" className="hover:text-primary-400">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-neutral-900">
          <Link
            href="/"
            className="text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/product"
            className="hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
