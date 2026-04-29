import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B14] text-white px-6 py-32">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
            className="rounded-2xl h-[420px] object-cover"
          />

          <div>
            <h1 className="text-5xl font-bold text-cyan-300 mb-6">
              About Us
            </h1>

            <p className="text-gray-300 leading-8">
              A futuristic mountain café inspired dining experience where
              food, atmosphere and technology merge into one calm space.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}