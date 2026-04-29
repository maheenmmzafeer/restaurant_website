import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ReservationsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B14] text-white px-6 py-32">
        <div className="mx-auto max-w-3xl">

          <h1 className="text-5xl text-cyan-300 text-center mb-10">
            Reserve Table
          </h1>

          <div className="bg-[#0B1622] border border-cyan-500/10 p-8 rounded-2xl space-y-4">

            <input className="w-full p-3 bg-[#111c2b] rounded-lg" placeholder="Name" />
            <input className="w-full p-3 bg-[#111c2b] rounded-lg" placeholder="Phone" />
            <input className="w-full p-3 bg-[#111c2b] rounded-lg" placeholder="Date & Time" />

            <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold">
              Confirm Reservation
            </button>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}