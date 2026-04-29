import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B14] text-white px-6 py-32">
        <div className="mx-auto max-w-4xl">

          <h1 className="text-5xl text-cyan-300 text-center mb-12">
            Contact
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-6 text-gray-300">
              <p>📍 Rawalpindi (Murree Road, Saddar)</p>
              <p>📞 051-5120704, 051-5130365</p>
            </div>

            <div className="space-y-4 bg-[#0B1622] p-6 rounded-2xl border border-cyan-500/10">

              <input className="w-full p-3 bg-[#111c2b] rounded-lg" placeholder="Name" />
              <input className="w-full p-3 bg-[#111c2b] rounded-lg" placeholder="Email" />
              <textarea className="w-full p-3 bg-[#111c2b] rounded-lg h-28" placeholder="Message" />

              <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold">
                Send Message
              </button>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}