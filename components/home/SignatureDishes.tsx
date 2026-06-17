const dishes = [
  {
    name: "Nebula Steak",
    desc: "Smoked flame-grilled mountain cut",
    img: "https://images.unsplash.com/photo-1558030006-450675393462",
  },
  {
    name: "Cyber BBQ Platter",
    desc: "Fusion of spices and fire",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    name: "Aqua Grilled Fish",
    desc: "Fresh river catch with herbs",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae",
  },
];

export default function SignatureDishes() {
  return (
    <section className="bg-[#050B14] px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-green-300 sm:text-4xl">
        Signature Dishes
      </h2>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="overflow-hidden rounded-2xl border border-cyan-500/10 bg-[#0B1622] transition hover:scale-[1.03]"
          >
            <img
              src={dish.img}
              alt={dish.name}
              loading="lazy"
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{dish.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
