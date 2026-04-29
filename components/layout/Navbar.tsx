import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050B14]/70 backdrop-blur-md border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link href="/" className="text-cyan-300 font-bold text-2xl">
          Lasania PK
        </Link>

        <div className="hidden md:flex gap-6 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/reservations"
          className="bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-cyan-300 transition"
        >
          Reserve
        </Link>

      </div>
    </nav>
  );
}