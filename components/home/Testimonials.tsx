const reviews = [
  "Best futuristic dining experience I’ve ever had.",
  "Feels like eating inside a sci-fi mountain resort.",
  "Food + atmosphere = unreal combination.",
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#050B14]">
      <h2 className="text-center text-4xl font-bold text-cyan-300 mb-12">
        What Visitors Say
      </h2>

      <div className="mx-auto max-w-4xl grid gap-6">
        {reviews.map((text, i) => (
          <div
            key={i}
            className="bg-[#0B1622] border border-cyan-500/10 p-6 rounded-2xl text-center"
          >
            <p className="text-gray-300 italic">“{text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}