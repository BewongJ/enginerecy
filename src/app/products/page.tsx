import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "INGERO หน้าบาน",
      price: "750 บาท",
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "VEDDINGE หน้าบาน",
      price: "700 บาท",
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "BODBYN หน้าบาน",
      price: "500 บาท",
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "SÄLJAN แผ่นท็อปโต๊ะ",
      price: "1,250 บาท",
      image: "/images/product4.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-gray-100 min-h-screen flex flex-col">
      <NavBar />
      <HeroSlider />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Engine Recy</h1>
          <p className="text-gray-400 mb-8"></p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Link href="/products/er">
                <Image
                  src="/img/product.png"
                  alt="Modern kitchen design"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-sm">
                  <p className="font-semibold">Engine Recy </p>
                  <p className="font-semibold" >Model : StreetRim Table</p>
                  <p className="text-gray-300">9,900 THB</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ✅ Footer แยกออกมา อยู่ล่างเสมอ */}
      <Footer />
    </div>
  );
}
