import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { faqItems } from "@/content/faq";

export default function FAQPage() {
  return (
    <>
      <Header />

      <main>
        <section className="quickcrew-hero-bg relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#22B8C4]/20 blur-3xl" />
            <div className="absolute right-[-100px] top-[140px] h-[320px] w-[320px] rounded-full bg-[#47B872]/14 blur-3xl" />
          </div>

          <Container className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#22B8C4]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#148A94] backdrop-blur">
                Frequently asked questions
              </span>

              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-6xl">
                Answers to common questions.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
                QuickCrew is built to connect hospitality businesses with casual
                workers through a simpler, faster workflow. Here are some of the
                questions people may ask first.
              </p>
            </div>
          </Container>
        </section>

        <section className="border-y border-[#22B8C4]/10 bg-white">
          <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-medium text-zinc-700">
              A simple place to understand how QuickCrew works for businesses
              and workers.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Businesses", "Workers", "Mobile-first workflow"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#22B8C4]/15 bg-[#F7FEFF] px-4 py-2 text-sm text-[#148A94]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#FBFEFE] py-24">
          <Container>
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Common questions.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                These answers help explain the product clearly while keeping the
                page simple and easy to scan.
              </p>
            </div>

            <div className="mt-14 space-y-5">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="quickcrew-card rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.02)]"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-zinc-600">
                    {item.answer}
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
                Need information for businesses?
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Explore the business side.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Learn how QuickCrew helps hospitality teams post shifts and move
                faster through staffing decisions.
              </p>

              <Link
                href="/for-businesses"
                className="quickcrew-button-lift mt-8 inline-flex rounded-full bg-[#47B872] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.25)]"
              >
                View Business Page
              </Link>
            </article>

            <article className="quickcrew-card rounded-[2rem] border border-[#22B8C4]/15 bg-[linear-gradient(180deg,#04252A_0%,#062E34_60%,#0A3A42_100%)] p-8 text-white shadow-[0_14px_36px_rgba(4,37,42,0.18)]">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
                Looking from the worker side?
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Explore the worker experience.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/78">
                See how QuickCrew helps workers discover flexible opportunities
                and apply faster from mobile.
              </p>

              <Link
                href="/for-workers"
                className="quickcrew-button-lift mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_14px_34px_rgba(255,255,255,0.10)]"
              >
                View Worker Page
              </Link>
            </article>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#03181C_0%,#062A30_58%,#0B3D45_100%)] py-24 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[-40px] h-[260px] w-[260px] rounded-full bg-[#22B8C4]/14 blur-3xl" />
            <div className="absolute right-[-80px] bottom-[-20px] h-[280px] w-[280px] rounded-full bg-[#47B872]/12 blur-3xl" />
          </div>

          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
                Still exploring?
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Start with the QuickCrew homepage.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
                You can always return to the homepage to get the full product
                overview and navigate to the section that matters most.
              </p>

              <div className="mt-9 flex justify-center">
                <Link
                  href="/"
                  className="quickcrew-button-lift inline-flex items-center justify-center rounded-full bg-[#47B872] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.24)]"
                >
                  Back to Home
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