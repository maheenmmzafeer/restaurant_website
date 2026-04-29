import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B14] text-white px-6 py-32">
        <h1 className="text-5xl text-cyan-300 text-center mb-12">
          Gallery
        </h1>

        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-5">
          {[
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
            "https://images.unsplash.com/photo-1550547660-d9450f859349",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-64 w-full object-cover rounded-2xl border border-cyan-500/10 hover:scale-105 transition"
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}