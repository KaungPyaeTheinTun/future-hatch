import { clients } from "@/data/site";

function Row({ direction }: { direction: "left" | "right" }) {
  // Duplicating items to guarantee infinite scrolling loop space
  const items = [...clients, ...clients, ...clients];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
      <div
        className={`flex gap-4 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {items.map((c, i) => (
          <span
            key={i}
            className="px-6 py-3 rounded-full bg-secondary border border-border text-sm font-medium text-foreground/80 whitespace-nowrap"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section className="py-16 border-y border-border w-full">
      {/* FIX: Wrap everything inside the exact same max-w-7xl structure 
        so it tracks identically with the Navbar and Hero layout bounds.
      */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <p className="text-left md:text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Trusted by teams around the world
        </p>

        {/* The marquee rows will scale perfectly inline with your layout grid */}
        <div className="flex flex-col gap-4 overflow-hidden w-full">
          <Row direction="left" />
          <Row direction="right" />
        </div>
      </div>
    </section>
  );
}
