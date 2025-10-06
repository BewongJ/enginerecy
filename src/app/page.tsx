import NavBar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";

export default function Page() {
  return (
    <div className=" bg-gradient-to-b from-black to-gray-900 text-gray-100">
      <NavBar />
      <HeroSlider />
      <ProductSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
