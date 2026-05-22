import { clients } from "@/data/site";

function Row({ direction }: { direction: "left" | "right" }) {
  const items = [...clients, ...clients];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`flex gap-4 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {items.map((c, i) => (
          <span key={i} className="px-6 py-3 rounded-full bg-secondary border border-border text-sm font-medium text-foreground/80 whitespace-nowrap">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section className="py-20 border-y border-border">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
        Trusted by teams around the world
      </p>
      <div className="flex flex-col gap-4">
        <Row direction="left" />
        <Row direction="right" />
      </div>
    </section>
  );
}
