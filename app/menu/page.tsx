import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";
import { menuSections } from "@/src/data/menu";

export default function MenuPage() {
  return (
    <PageShell mainClassName="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-16">
        <PageHeader
          eyebrow="Menu"
          title="Our Menu"
          description="A compact menu showcase with the restaurant's barbecue, steaks, seafood, fusion dishes and desserts."
        />

        {Object.entries(menuSections).map(([section, items]) => (
          <section key={section} className="space-y-8">
            <h2 className="text-2xl font-semibold text-green-300 sm:text-3xl">
              {section}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-cyan-500/10 bg-[#0B1622] shadow-lg transition duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold sm:text-xl">
                        {item.name}
                      </h3>
                      <span className="font-bold text-cyan-300">
                        Rs {item.price}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-400">
                      Crafted with premium ingredients and signature flavor.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
