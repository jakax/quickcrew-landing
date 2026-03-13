import Container from "@/components/ui/Container";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#03181C_0%,#062A30_58%,#0B3D45_100%)] py-20 sm:py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-40px] h-[260px] w-[260px] rounded-full bg-[#22B8C4]/14 blur-3xl" />
        <div className="absolute right-[-80px] bottom-[-20px] h-[280px] w-[280px] rounded-full bg-[#47B872]/12 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
            Get started
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to simplify staffing?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            Whether you need staff or you’re looking for flexible work,
            QuickCrew helps you move faster.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/for-businesses"
              className="quickcrew-button-lift inline-flex items-center justify-center rounded-full bg-[#47B872] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.24)]"
            >
              Find Staff
            </Link>

            <Link
              href="/for-workers"
              className="quickcrew-button-lift inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur"
            >
              Find Work
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium text-white/60">
              Download the app
            </p>

            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                aria-label="Download QuickCrew on the App Store"
                className="quickcrew-button-lift inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/14"
              >
                Download on the App Store
              </a>

              <a
                href="#"
                aria-label="Get QuickCrew on Google Play"
                className="quickcrew-button-lift inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/14"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}