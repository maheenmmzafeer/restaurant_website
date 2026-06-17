import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";

export default function AboutPage() {
  return (
    <PageShell mainClassName="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl space-y-12">
        <PageHeader
          eyebrow="About"
          title="About Us"
          description="A futuristic mountain cafe inspired dining experience where food, atmosphere and technology meet in one calm space."
        />

        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
            alt="Restaurant dining space"
            loading="lazy"
            className="h-[320px] rounded-2xl object-cover sm:h-[420px]"
          />

          <div className="space-y-6 leading-8 text-gray-300">
            <p>
              This frontend demo focuses on a clean restaurant presentation with
              a dark, atmospheric visual direction and simple multi-page
              navigation.
            </p>
            <p>
              The content stays intentionally minimal so the layout, spacing and
              imagery remain easy to review in a portfolio setting.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
