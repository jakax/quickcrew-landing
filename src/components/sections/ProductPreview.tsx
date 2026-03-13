import Container from "@/components/ui/Container";
import Image from "next/image";

export default function ProductPreview() {
  return (
    <section className="quickcrew-section-soft relative bg-[#F7FEFF] py-24">
      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="quickcrew-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
            Product preview
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            A faster way to manage casual staffing.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Show the product clearly. This is where QuickCrew starts feeling
            like a real platform instead of a generic landing page.
          </p>

          <ul className="mt-8 space-y-4 text-base leading-8 text-zinc-700">
            <li>
              <span className="mr-2 font-semibold text-[#148A94]">•</span>
              Post shifts in a few taps
            </li>
            <li>
              <span className="mr-2 font-semibold text-[#148A94]">•</span>
              Review applications more quickly
            </li>
            <li>
              <span className="mr-2 font-semibold text-[#148A94]">•</span>
              Keep everything in a simple mobile workflow
            </li>
            <li>
              <span className="mr-2 font-semibold text-[#148A94]">•</span>
              Reduce back-and-forth and admin friction
            </li>
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="quickcrew-card rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-[0_20px_60px_rgba(34,184,196,0.10)] backdrop-blur">
            <Image
              src="/images/hero/job-list.png"
              alt="QuickCrew app job list"
              width={900}
              height={1800}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>

          <div className="quickcrew-card sm:translate-y-8 rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-[0_20px_60px_rgba(34,184,196,0.10)] backdrop-blur">
            <Image
              src="/images/hero/job-details.png"
              alt="QuickCrew app job details"
              width={900}
              height={1800}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}