import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const workerFeatures = [
  {
    title: "Browse shifts easily",
    description:
      "QuickCrew helps workers discover available hospitality opportunities through a simple mobile-first experience.",
  },
  {
    title: "Apply in seconds",
    description:
      "Move quickly from discovering a shift to applying, without unnecessary friction or complexity.",
  },
  {
    title: "Stay flexible",
    description:
      "Find work that fits around your availability and manage opportunities from your phone.",
  },
];

const workerSteps = [
  {
    number: "01",
    title: "Discover shifts",
    description:
      "Browse available opportunities and review the role, location, pay, and timing clearly.",
  },
  {
    number: "02",
    title: "Apply quickly",
    description:
      "Use a simple mobile flow to apply for shifts that match your schedule and interest.",
  },
  {
    number: "03",
    title: "Manage opportunities",
    description:
      "Track saved roles, applications, and shift details through one cleaner workflow.",
  },
];

export default function ForWorkersPage() {
  return (
    <>
      <Header />

      <main>
        <section className="quickcrew-hero-bg relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#22B8C4]/20 blur-3xl" />
            <div className="absolute right-[-100px] top-[140px] h-[320px] w-[320px] rounded-full bg-[#47B872]/16 blur-3xl" />
            <div className="absolute bottom-[40px] left-[30%] h-[220px] w-[220px] rounded-full bg-[#F5A800]/10 blur-3xl" />
          </div>

          <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#22B8C4]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#148A94] backdrop-blur">
                For workers
              </span>

              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-6xl">
                Find flexible hospitality work faster.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
                QuickCrew helps workers discover shifts, apply quickly, and
                manage opportunities through a mobile-first experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#worker-features"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full bg-[#47B872] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.28)]"
                >
                  Explore Features
                </Link>

                <Link
                  href="#worker-cta"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full border border-[#22B8C4]/25 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#148A94] backdrop-blur"
                >
                  Get Started
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
                  Flexible opportunities
                </span>
                <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
                  Mobile-first workflow
                </span>
                <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
                  Built for hospitality
                </span>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative h-[580px] w-full max-w-[540px]">
                <div className="quickcrew-float absolute left-0 top-14 z-20 w-[220px] sm:w-[250px] lg:w-[270px]">
                  <div className="rounded-[2rem] border border-white/50 bg-white/70 p-3 shadow-[0_20px_60px_rgba(34,184,196,0.18)] backdrop-blur-xl">
                    <Image
                      src="/images/hero/login1.png"
                      alt="QuickCrew login screen"
                      width={900}
                      height={1800}
                      className="h-auto w-full rounded-[1.5rem]"
                      priority
                    />
                  </div>
                </div>

                <div className="quickcrew-float-delayed absolute right-0 top-0 z-30 w-[220px] sm:w-[250px] lg:w-[270px]">
                  <div className="rounded-[2rem] border border-white/50 bg-white/70 p-3 shadow-[0_20px_60px_rgba(34,184,196,0.18)] backdrop-blur-xl">
                    <Image
                      src="/images/hero/save.png"
                      alt="QuickCrew saved jobs screen"
                      width={900}
                      height={1800}
                      className="h-auto w-full rounded-[1.5rem]"
                      priority
                    />
                  </div>
                </div>

                <div className="quickcrew-float absolute bottom-0 left-[18%] z-10 w-[210px] sm:w-[240px] lg:w-[255px]">
                  <div className="rounded-[2rem] border border-white/50 bg-white/70 p-3 shadow-[0_20px_60px_rgba(34,184,196,0.18)] backdrop-blur-xl">
                    <Image
                      src="/images/hero/job-details.png"
                      alt="QuickCrew job details screen"
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

        <section className="border-y border-[#22B8C4]/10 bg-white">
          <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-medium text-zinc-700">
              Designed to help workers find opportunities faster and manage them
              more easily from mobile.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Flexible shifts", "Fast applications", "Simple mobile flow"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#22B8C4]/15 bg-[#F7FEFF] px-4 py-2 text-sm text-[#148A94]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </Container>
        </section>

        <section
          id="worker-features"
          className="quickcrew-section-soft relative bg-white py-24"
        >
          <Container className="relative z-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
                Why workers use QuickCrew
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Built around flexibility and speed.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                QuickCrew helps workers move from discovery to application with
                less friction, clearer information, and a cleaner experience on
                mobile.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {workerFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="quickcrew-card rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                >
                  <h3 className="text-2xl font-semibold text-zinc-950">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-zinc-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#F7FEFF] py-24">
          <Container className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                A simple way to find and apply for shifts.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                QuickCrew should help workers explore opportunities, apply
                faster, and keep track of roles through one cleaner flow.
              </p>
            </div>

            <div className="space-y-5">
              {workerSteps.map((step) => (
                <article
                  key={step.number}
                  className="quickcrew-card rounded-[2rem] border border-white/60 bg-white/85 p-7 shadow-[0_20px_60px_rgba(34,184,196,0.08)] backdrop-blur"
                >
                  <span className="inline-flex rounded-full bg-[#EAF9FB] px-3 py-1 text-sm font-semibold text-[#148A94]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-zinc-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-zinc-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-24">
          <Container className="grid gap-6 lg:grid-cols-2">
            <article className="quickcrew-card rounded-[2rem] border border-[#22B8C4]/12 bg-gradient-to-br from-white to-[#F5FCFD] p-8 shadow-[0_10px_35px_rgba(34,184,196,0.05)]">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
                What this helps reduce
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Less friction between finding and applying.
              </h2>
              <ul className="mt-7 space-y-4 text-base leading-8 text-zinc-700">
                <li>• Slower application processes</li>
                <li>• Confusing or unclear shift information</li>
                <li>• More effort to track opportunities</li>
                <li>• Extra friction around flexible work</li>
              </ul>
            </article>

            <article className="quickcrew-card rounded-[2rem] border border-[#22B8C4]/15 bg-[linear-gradient(180deg,#04252A_0%,#062E34_60%,#0A3A42_100%)] p-8 text-white shadow-[0_14px_36px_rgba(4,37,42,0.18)]">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
                What this helps improve
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Faster access to flexible work.
              </h2>
              <ul className="mt-7 space-y-4 text-base leading-8 text-white/82">
                <li>• Better visibility into available shifts</li>
                <li>• Faster applications from mobile</li>
                <li>• Cleaner way to manage opportunities</li>
                <li>• More flexibility around work availability</li>
              </ul>
            </article>
          </Container>
        </section>

        <section
          id="worker-cta"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#03181C_0%,#062A30_58%,#0B3D45_100%)] py-24 text-white"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[-40px] h-[260px] w-[260px] rounded-full bg-[#22B8C4]/14 blur-3xl" />
            <div className="absolute right-[-80px] bottom-[-20px] h-[280px] w-[280px] rounded-full bg-[#47B872]/12 blur-3xl" />
          </div>

          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
                For workers
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Ready to find flexible work faster?
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
                QuickCrew gives workers a simpler mobile-first experience for
                discovering shifts and applying with less friction.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full bg-[#47B872] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.24)]"
                >
                  Back to Home
                </Link>
                <Link
                  href="/for-businesses"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur"
                >
                  View Business Page
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}