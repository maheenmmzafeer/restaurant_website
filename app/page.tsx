import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import SignatureDishes from "@/components/home/SignatureDishes";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#050B14] text-[#E6F1FF]">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <SignatureDishes />
      <Testimonials />
      <Footer />
    </main>
  );
}