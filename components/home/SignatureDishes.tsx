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
    <section className="py-24 px-6 bg-[#050B14]">
      <h2 className="text-center text-4xl font-bold text-green-300 mb-12">
        Signature Dishes
      </h2>

      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="bg-[#0B1622] border border-cyan-500/10 rounded-2xl overflow-hidden hover:scale-[1.03] transition"
          >
            <img
              src={dish.img}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="text-gray-400 mt-2 text-sm">{dish.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}