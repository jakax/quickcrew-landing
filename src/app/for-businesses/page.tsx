import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const businessFeatures = [
  {
    title: "Post shifts quickly",
    description:
      "Create new staffing requests through a simple workflow designed for fast-moving hospitality teams.",
  },
  {
    title: "Receive applications faster",
    description:
      "Workers can discover opportunities and apply quickly from mobile, reducing the usual back-and-forth.",
  },
  {
    title: "Reduce admin pressure",
    description:
      "Keep staffing decisions in one cleaner flow instead of relying on scattered calls, texts, or manual coordination.",
  },
];

const businessSteps = [
  {
    number: "01",
    title: "Create a shift",
    description:
      "Add the role, timing, pay details, and requirements in a few quick steps.",
  },
  {
    number: "02",
    title: "Review applicants",
    description:
      "See incoming interest faster and evaluate who fits the shift best.",
  },
  {
    number: "03",
    title: "Fill the role",
    description:
      "Confirm the right worker and keep operations running smoothly.",
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="quickcrew-hero-bg relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#22B8C4]/20 blur-3xl" />
            <div className="absolute right-[-100px] top-[140px] h-[320px] w-[320px] rounded-full bg-[#47B872]/18 blur-3xl" />
          </div>

          <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#22B8C4]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#148A94] backdrop-blur">
                For hospitality businesses
              </span>

              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-6xl">
                Hire hospitality staff faster.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
                QuickCrew helps venues post shifts, receive applications, and
                move faster when staffing needs change.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#business-features"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full bg-[#47B872] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.28)]"
                >
                  Explore Features
                </Link>

                <Link
                  href="#business-cta"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full border border-[#22B8C4]/25 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#148A94] backdrop-blur"
                >
                  Get Started
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
                  Faster staffing workflow
                </span>
                <span className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur">
                  Mobile-first platform
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
                      src="/images/hero/job-list.png"
                      alt="QuickCrew job list"
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
                      src="/images/hero/job-details.png"
                      alt="QuickCrew job details"
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
                      src="/images/hero/save.png"
                      alt="QuickCrew saved jobs screen"
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
              Designed to help hospitality teams respond faster when shifts need
              to be filled.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Fast shift posting", "Cleaner workflow", "Less admin friction"].map(
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
          id="business-features"
          className="quickcrew-section-soft relative bg-white py-24"
        >
          <Container className="relative z-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
                Why businesses use QuickCrew
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Built for operational speed.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                QuickCrew helps businesses reduce friction in the staffing
                process and respond more confidently when roles need to be
                filled quickly.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {businessFeatures.map((feature) => (
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
                A simple path from shift to staffing.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                QuickCrew should make it easier for businesses to create shifts,
                review interest, and fill roles without the usual chaos.
              </p>
            </div>

            <div className="space-y-5">
              {businessSteps.map((step) => (
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
                Less scrambling, less admin.
              </h2>
              <ul className="mt-7 space-y-4 text-base leading-8 text-zinc-700">
                <li>• Last-minute back-and-forth</li>
                <li>• Manual coordination across messages and calls</li>
                <li>• Slower staffing decisions</li>
                <li>• Extra operational pressure during busy periods</li>
              </ul>
            </article>

            <article className="quickcrew-card rounded-[2rem] border border-[#22B8C4]/15 bg-[linear-gradient(180deg,#04252A_0%,#062E34_60%,#0A3A42_100%)] p-8 text-white shadow-[0_14px_36px_rgba(4,37,42,0.18)]">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
                What this helps improve
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Faster, clearer staffing decisions.
              </h2>
              <ul className="mt-7 space-y-4 text-base leading-8 text-white/82">
                <li>• Faster shift publishing</li>
                <li>• Better visibility into interest</li>
                <li>• Cleaner hiring workflow</li>
                <li>• More confidence when shifts need urgent coverage</li>
              </ul>
            </article>
          </Container>
        </section>

        <section
          id="business-cta"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#03181C_0%,#062A30_58%,#0B3D45_100%)] py-24 text-white"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[-40px] h-[260px] w-[260px] rounded-full bg-[#22B8C4]/14 blur-3xl" />
            <div className="absolute right-[-80px] bottom-[-20px] h-[280px] w-[280px] rounded-full bg-[#47B872]/12 blur-3xl" />
          </div>

          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
                For hospitality businesses
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Ready to hire staff faster?
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
                QuickCrew gives hospitality teams a cleaner, faster way to post
                shifts and move through staffing decisions.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full bg-[#47B872] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.24)]"
                >
                  Back to Home
                </Link>
                <Link
                  href="/for-workers"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur"
                >
                  View Worker Page
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