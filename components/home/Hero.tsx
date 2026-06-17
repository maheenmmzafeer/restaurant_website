import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-6 pt-24 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#050B14]/70" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold leading-tight text-cyan-300 sm:text-5xl lg:text-6xl">
          Lasania Pakistan Restaurant
        </h1>

        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          A calm place above the clouds where food meets imagination
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-200 hover:bg-cyan-300 hover:shadow-lg"
          >
            Explore Menu
          </Link>

          <Link
            href="/reservations"
            className="inline-flex rounded-full border border-cyan-400 px-6 py-3 font-semibold transition duration-200 hover:bg-cyan-400 hover:text-black hover:shadow-lg"
          >
            Book Table
          </Link>
        </div>
      </div>
    </section>
  );
}
