import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#050B14]/70" />

      <div className="relative text-center max-w-3xl px-6">
        <h1 className="text-6xl font-bold text-cyan-300">
          Lasania Pakistan Restaurant
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          A calm place above the clouds where food meets imagination
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/menu">
            <button
              className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold transition duration-200 hover:bg-cyan-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Menu
            </button>
          </Link>

          <Link href="/reservations">
            <button
              className="border border-cyan-400 px-6 py-3 rounded-full transition duration-200 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-lg"
            >
              Book Table
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}