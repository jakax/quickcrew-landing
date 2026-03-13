import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#22B8C4]/10 bg-white">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <Image
            src="/images/logo/quickcrew-logo.png"
            alt="QuickCrew logo"
            width={170}
            height={50}
            className="h-auto w-[150px] sm:w-[170px]"
          />
          <p className="mt-4 text-base leading-8 text-zinc-600">
            A faster, more modern way to connect hospitality businesses with
            casual workers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-zinc-600">
          <Link
            href="#how-it-works"
            className="transition hover:text-[#148A94]"
          >
            How it Works
          </Link>
          <Link
            href="/for-businesses"
            className="transition hover:text-[#148A94]"
          >
            Businesses
          </Link>
          <Link href="/for-workers" className="transition hover:text-[#148A94]">
            Workers
          </Link>
          <Link href="/faq" className="transition hover:text-[#148A94]">
            FAQ
          </Link>
        </div>
      </Container>
    </footer>
  );
}