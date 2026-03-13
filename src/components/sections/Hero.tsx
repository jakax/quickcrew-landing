import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 bg-[linear-gradient(180deg,#EAF9FB_0%,#CDEFF3_40%,#B7E7ED_60%,#EAF9FB_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#22B8C4]/20 blur-3xl" />
        <div className="absolute right-[-100px] top-[140px] h-[320px] w-[320px] rounded-full bg-[#47B872]/18 blur-3xl" />
        <div className="absolute bottom-[60px] left-[20%] h-[220px] w-[220px] rounded-full bg-[#F5A800]/12 blur-3xl" />
      </div>

      <div className="quickcrew-wave quickcrew-wave-one" />
      <div className="quickcrew-wave quickcrew-wave-two" />

      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-[#22B8C4]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#148A94] backdrop-blur">
            Built for hospitality teams in New Zealand
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-7xl">
            Find hospitality staff in minutes.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
            QuickCrew helps venues post shifts fast and connect with verified
            casual workers through a cleaner, mobile-first workflow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/for-businesses"
              className="inline-flex items-center justify-center rounded-full bg-[#47B872] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.28)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Find Staff
            </Link>

            <Link
              href="/for-workers"
              className="inline-flex items-center justify-center rounded-full border border-[#22B8C4]/25 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#148A94] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              Find Work
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
              Verified workers
            </span>
            <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
              Real-time applications
            </span>
            <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
              Mobile-first experience
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[340px] sm:h-[520px] sm:max-w-[420px] lg:h-[620px] lg:max-w-[560px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[320px] w-[320px] rounded-full bg-[#22B8C4]/25 blur-[120px]" />
            </div>
            <div className="quickcrew-float absolute left-0 top-16 z-20 w-[150px] sm:w-[210px] lg:w-[270px]">
              <div className="rounded-[2rem] border border-white/50 bg-white/70 p-3 shadow-[0_20px_60px_rgba(34,184,196,0.18)] backdrop-blur-xl">
                <Image
                  src="/images/hero/job-list.png"
                  alt="QuickCrew app job list screen"
                  width={900}
                  height={1800}
                  className="h-auto w-full rounded-[1.5rem]"
                  priority
                />
              </div>
            </div>

            <div className="quickcrew-float-delayed absolute right-0 top-0 z-30 w-[150px] sm:w-[210px] lg:w-[270px]">
              <div className="rounded-[2rem] border border-white/50 bg-white/70 p-3 shadow-[0_20px_60px_rgba(34,184,196,0.18)] backdrop-blur-xl">
                <Image
                  src="/images/hero/login1.png"
                  alt="QuickCrew app login screen"
                  width={900}
                  height={1800}
                  className="h-auto w-full rounded-[1.5rem]"
                  priority
                />
              </div>
            </div>

            <div className="quickcrew-float absolute bottom-0 left-[14%] z-10 w-[145px] sm:w-[200px] lg:w-[255px]">
              <div className="rounded-[2rem] border border-white/50 bg-white/70 p-3 shadow-[0_20px_60px_rgba(34,184,196,0.18)] backdrop-blur-xl">
                <Image
                  src="/images/hero/job-details.png"
                  alt="QuickCrew app job details screen"
                  width={900}
                  height={1800}
                  className="h-auto w-full rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}