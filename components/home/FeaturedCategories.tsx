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
    <section className="bg-[#050B14] px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-cyan-300 sm:text-4xl">
        Our Specialties
      </h2>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {categories.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-cyan-500/10 bg-[#0B1622] p-10 text-center transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-[#E6F1FF]">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
