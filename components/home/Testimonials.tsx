const reviews = [
  "Best futuristic dining experience I've ever had.",
  "Feels like eating inside a sci-fi mountain resort.",
  "Food and atmosphere create a striking combination.",
];

export default function Testimonials() {
  return (
    <section className="bg-[#050B14] px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-cyan-300 sm:text-4xl">
        What Visitors Say
      </h2>

      <div className="mx-auto grid max-w-4xl gap-6">
        {reviews.map((text, i) => (
          <div
            key={i}
            className="rounded-2xl border border-cyan-500/10 bg-[#0B1622] p-6 text-center"
          >
            <p className="italic text-gray-300">"{text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
