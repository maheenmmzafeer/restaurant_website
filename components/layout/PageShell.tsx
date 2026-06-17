import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type PageShellProps = {
  children: ReactNode;
  mainClassName?: string;
};

export default function PageShell({
  children,
  mainClassName = "",
}: PageShellProps) {
  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen bg-[#050B14] text-[#E6F1FF] ${mainClassName}`.trim()}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
