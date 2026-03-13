import Container from "@/components/ui/Container";
import Link from "next/link";

export default function AudienceSplit() {
  return (
    <section className="bg-white py-24">
      <Container className="grid gap-6 lg:grid-cols-2">
        <article
          id="businesses"
          className="quickcrew-card rounded-[2rem] border border-[#22B8C4]/12 bg-gradient-to-br from-white to-[#F5FCFD] p-8 shadow-[0_10px_35px_rgba(34,184,196,0.05)]"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
            For businesses
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Fill shifts without the usual chaos.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            QuickCrew helps hospitality businesses move faster when staffing
            needs change.
          </p>

          <ul className="mt-7 space-y-4 text-base leading-8 text-zinc-700">
            <li>• Post urgent staffing needs quickly</li>
            <li>• Reach workers through a simpler workflow</li>
            <li>• Reduce calls, texts, and manual coordination</li>
            <li>• Keep operations running smoothly</li>
          </ul>

          <Link
            href="/for-businesses"
            className="quickcrew-button-lift mt-9 inline-flex rounded-full bg-[#47B872] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(71,184,114,0.25)]"
          >
            Find Staff
          </Link>
        </article>

        <article
          id="workers"
          className="quickcrew-card rounded-[2rem] border border-[#22B8C4]/15 bg-[linear-gradient(180deg,#04252A_0%,#062E34_60%,#0A3A42_100%)] p-8 text-white shadow-[0_14px_36px_rgba(4,37,42,0.18)]"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8FE2EA]">
            For workers
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find flexible work that fits your schedule.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/78">
            Workers can discover opportunities, apply quickly, and manage shifts
            from their phone.
          </p>

          <ul className="mt-7 space-y-4 text-base leading-8 text-white/82">
            <li>• Browse available shifts in real time</li>
            <li>• Apply in seconds from mobile</li>
            <li>• Build experience across venues</li>
            <li>• Work around your availability</li>
          </ul>

          <Link
            href="/for-workers"
            className="quickcrew-button-lift mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_14px_34px_rgba(255,255,255,0.12)]"
          >
            Find Work
          </Link>
        </article>
      </Container>
    </section>
  );
}