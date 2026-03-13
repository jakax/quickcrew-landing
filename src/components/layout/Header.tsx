"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`text-sm font-medium transition ${
          isActive
            ? "text-[#148A94]"
            : "text-zinc-600 hover:text-zinc-950"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/quickcrew-logo.png"
            alt="QuickCrew logo"
            width={180}
            height={52}
            className="h-auto w-[140px] sm:w-[160px] lg:w-[180px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950"
          >
            How it Works
          </Link>

          {navLink("/for-businesses", "Businesses")}
          {navLink("/for-workers", "Workers")}
          {navLink("/faq", "FAQ")}
        </nav>

        <Link
          href="/#final-cta"
          className="quickcrew-button-lift inline-flex items-center justify-center rounded-full bg-[#47B872] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(71,184,114,0.30)]"
        >
          Get Started
        </Link>
      </Container>
    </header>
  );
}