import Container from "@/components/ui/Container";

export default function TrustBar() {
  const items = [
    "Built for hospitality teams",
    "Designed for mobile-first speed",
    "Focused on flexible staffing",
  ];

  return (
    <section className="relative border-y border-[#22B8C4]/10 bg-white">
      <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium text-zinc-700">
          Built for hospitality businesses and flexible workers in New Zealand
        </p>

        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
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
  );
}