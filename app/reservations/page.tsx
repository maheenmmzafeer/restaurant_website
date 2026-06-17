import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";

export default function ReservationsPage() {
  return (
    <PageShell mainClassName="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-3xl space-y-10">
        <PageHeader
          eyebrow="Reservations"
          title="Reserve Table"
          description="A simple reservation request form kept as a visual demo only."
        />

        <div className="space-y-4 rounded-2xl border border-cyan-500/10 bg-[#0B1622] p-8">
          <input
            className="w-full rounded-lg bg-[#111c2b] p-3"
            placeholder="Name"
          />
          <input
            className="w-full rounded-lg bg-[#111c2b] p-3"
            placeholder="Phone"
          />
          <input
            className="w-full rounded-lg bg-[#111c2b] p-3"
            placeholder="Date & Time"
          />

          <button className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-black">
            Confirm Reservation
          </button>
        </div>
      </div>
    </PageShell>
  );
}
