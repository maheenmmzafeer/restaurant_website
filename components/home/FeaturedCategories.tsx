const categories = [
  "BBQ Flames",
  "Mountain Steaks",
  "Aqua Seafood",
  "Cyber Chinese",
  "Desert Desserts",
  "Signature Platters",
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 px-6 bg-[#050B14]">
      <h2 className="text-center text-4xl font-bold text-cyan-300 mb-12">
        Our Specialties
      </h2>

      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
        {categories.map((item) => (
          <div
            key={item}
            className="bg-[#0B1622] border border-cyan-500/10 rounded-2xl p-10 text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-[#E6F1FF]">
              {item}
            </h3>          
          </div>
        ))}
      </div>
    </section>
  );
}