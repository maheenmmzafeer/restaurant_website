import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";

export default function GalleryPage() {
  return (
    <PageShell mainClassName="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl space-y-12">
        <PageHeader
          eyebrow="Gallery"
          title="Gallery"
          description="Selected restaurant images used to support the visual direction of the demo."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
              alt: "Restaurant table setting",
            },
            {
              src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
              alt: "Dining room interior",
            },
            {
              src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
              alt: "Chef prepared meal",
            },
            {
              src: "https://images.unsplash.com/photo-1550547660-d9450f859349",
              alt: "Fine dining dish",
            },
            {
              src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
              alt: "Restaurant seating area",
            },
            {
              src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
              alt: "Warm dining space",
            },
          ].map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-64 w-full rounded-2xl border border-cyan-500/10 object-cover transition hover:scale-[1.03]"
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
