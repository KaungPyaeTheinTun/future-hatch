import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { team } from "@/data/site";
import teamMain1 from "@/assets/team1.png";
import teamMain2 from "@/assets/team2.png";

// Explicit design definition to match your screenshot layout precisely
const CARD_CONFIGS = [
  {
    // Card 1: Left Tall Lavender Block
    bg: "bg-[#D6CBEB] text-[#1E192E]",
    secondaryText: "text-[#4A3F63]",
    gridClass:
      "col-span-1 md:row-span-2 min-h-[460px] md:min-h-[640px] flex flex-col justify-between p-8 md:p-10",
    isImage: false,
  },
  {
    // Card 2: Center Top Image
    bg: "bg-neutral-200",
    secondaryText: "",
    gridClass: "col-span-1 md:row-span-1 h-[280px] md:h-auto",
    isImage: true,
  },
  {
    // Card 3: Right Top Sky Blue Block
    bg: "bg-[#8ECCE4] text-[#112933]",
    secondaryText: "text-[#2A4D5C]",
    gridClass: "col-span-1 md:row-span-1 min-h-[280px] flex flex-col justify-between p-8",
    isImage: false,
  },
  {
    // Card 4: Center Bottom Orange Block
    bg: "bg-[#EA9470] text-[#331408]",
    secondaryText: "text-[#66311C]",
    gridClass: "col-span-1 md:row-span-1 min-h-[280px] flex flex-col justify-between p-8",
    isImage: false,
  },
  {
    // Card 5: Right Bottom Image
    bg: "bg-neutral-200",
    secondaryText: "",
    gridClass: "col-span-1 md:row-span-1 h-[280px] md:h-auto",
    isImage: true,
  },
];

export function Team() {
  const displayTeam = team.slice(0, 5);

  return (
    <section id="team" className="py-24 bg-[#F4F3EF] text-neutral-900 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Layout Section */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-semibold tracking-tight text-neutral-900">
            The people building tomorrow's solutions.
          </h2>
        </div>

        {/* 3-COLUMN ASYMMETRICAL BENTO GRID GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
          {displayTeam.map((m, i) => {
            const config = CARD_CONFIGS[i];

            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group relative rounded-[28px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${config.gridClass} ${config.bg}`}
              >
                {config.isImage ? (
                  /* IMAGE CARDS (Cards 2 & 5 mapped natively to unique assets) */
                  <div className="w-full h-full relative">
                    <img
                      src={i === 1 ? teamMain1 : teamMain2} // FIXED: Dynamic unique asset reference allocation
                      alt={m.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                      <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                      <p className="text-sm text-white/80">{m.title}</p>
                    </div>
                  </div>
                ) : (
                  /* TEXT-BASED WATERCOLOR CONTENT CARDS (Cards 1, 3, & 4) */
                  <>
                    {/* FIXED: SVG Filter layer overlay creating the Webflow watercolor-grain effect dynamically */}
                    <div
                      className="absolute inset-0 opacity-[0.22] mix-blend-color-burn pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Secondary high-contrast lighting map for added texture depth */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.5),_transparent_70%)]" />

                    {/* Top Content Row */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display text-2xl font-bold tracking-tight">
                            {m.name}
                          </h3>
                          <p
                            className={`text-sm font-semibold mt-0.5 opacity-90 ${config.secondaryText}`}
                          >
                            {m.title}
                          </p>
                        </div>

                        {/* LinkedIn Icon Integration */}
                        <a
                          href={m.linkedin || "#"}
                          aria-label={`${m.name} on LinkedIn`}
                          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center hover:bg-white/40 transition-colors border border-white/10 text-current"
                        >
                          <Linkedin size={15} />
                        </a>
                      </div>

                      {/* Main Paragraph Description */}
                      <p
                        className={`text-[15px] sm:text-base leading-relaxed mt-6 font-medium max-w-sm ${config.secondaryText}`}
                      >
                        {m.bio}
                      </p>
                    </div>

                    {/* Bottom Line Separator and Decorative Meta Row */}
                    <div className="mt-8 pt-4 border-t border-current/15 w-full flex items-center justify-between opacity-70 group-hover:opacity-100 transition-opacity relative z-10">
                      <span className="text-[11px] tracking-[0.15em] uppercase font-bold">
                        {String(i + 1).padStart(2, "0")} // ITVISIONHUB STRATEGY
                      </span>
                      <ArrowRight
                        size={14}
                        className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-200"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer Call to Action Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 shadow-sm transition-all font-medium group"
          >
            Join Our Team
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
