import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 z-50 w-full border-b border-cyan-500/10 bg-[#050B14]/75 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide text-cyan-300">
          Lasania PK
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link className="transition hover:text-cyan-300" href="/">
            Home
          </Link>
          <Link className="transition hover:text-cyan-300" href="/menu">
            Menu
          </Link>
          <Link className="transition hover:text-cyan-300" href="/about">
            About
          </Link>
          <Link className="transition hover:text-cyan-300" href="/gallery">
            Gallery
          </Link>
          <Link className="transition hover:text-cyan-300" href="/contact">
            Contact
          </Link>
        </div>

        <Link
          href="/reservations"
          className="rounded-full border border-cyan-400/40 bg-cyan-400 px-4 py-2 font-semibold text-[#050B14] transition hover:bg-cyan-300"
        >
          Reserve
        </Link>
      </div>
    </nav>
  );
}
