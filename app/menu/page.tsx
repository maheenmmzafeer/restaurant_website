import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const menuSections = {
  "Signature BBQ": [
    {
      name: "Chicken Tikka",
      price: "850",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    },
    {
      name: "Seekh Kabab",
      price: "900",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
    },
  ],
  "Premium Steaks": [
    {
      name: "Pepper Steak",
      price: "2200",
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462",
    },
    {
      name: "Ribeye Steak",
      price: "2500",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
  ],
  "Chinese Fusion": [
    {
      name: "Chicken Chow Mein",
      price: "1200",
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56",
    },
    {
      name: "Dynamite Chicken",
      price: "1450",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    },
  ],
  "Seafood": [
    {
      name: "Grilled Salmon",
      price: "2400",
      image:
        "https://images.unsplash.com/photo-1559847844-5315695dadae",
    },
    {
      name: "Butter Garlic Fish",
      price: "2100",
      image:
        "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62",
    },
  ],
  Desserts: [
    {
      name: "Chocolate Lava Cake",
      price: "700",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    },
    {
      name: "Lotus Cheesecake",
      price: "850",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    },
  ],
};

export default function MenuPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B14] text-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-cyan-300 text-center mb-16">
            Our Menu
          </h1>

          {Object.entries(menuSections).map(([section, items]) => (
            <section key={section} className="mb-20">
              <h2 className="text-3xl font-semibold text-green-300 mb-8">
                {section}
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-2xl bg-[#0B1622] border border-cyan-500/10 hover:scale-[1.03] transition duration-300 shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="text-cyan-300 font-bold">
                          Rs {item.price}
                        </span>
                      </div>

                      <p className="text-sm text-gray-400 mt-2">
                        Crafted with premium ingredients and signature flavor.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}