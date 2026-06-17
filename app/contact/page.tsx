import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";

export default function ContactPage() {
  return (
    <PageShell mainClassName="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-4xl space-y-12">
        <PageHeader
          eyebrow="Contact"
          title="Contact"
          description="The contact page is a UI-only layout for location and message details."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6 text-gray-300">
            <p>Location: Rawalpindi, Murree Road, Saddar</p>
            <p>Phone: 051-5120704, 051-5130365</p>
          </div>

          <div className="space-y-4 rounded-2xl border border-cyan-500/10 bg-[#0B1622] p-6">
            <input
              className="w-full rounded-lg bg-[#111c2b] p-3"
              placeholder="Name"
            />
            <input
              className="w-full rounded-lg bg-[#111c2b] p-3"
              placeholder="Email"
            />
            <textarea
              className="h-28 w-full rounded-lg bg-[#111c2b] p-3"
              placeholder="Message"
            />

            <button className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-black">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
