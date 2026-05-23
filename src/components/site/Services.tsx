import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/site";
import { Sparkles, BarChart2, ShieldCheck, Zap } from "lucide-react";

const iconMap: Record<string, any> = {
  "01": Sparkles,
  "02": BarChart2,
  "03": ShieldCheck,
  "04": Zap,
};

export function Services() {
  const [active, setActive] = useState(0);
  const cur = services[active];

  const CardIcon = iconMap[cur.id] || Sparkles;

  return (
    <section
      id="services"
      className="py-28 lg:py-16 bg-secondary/40 relative w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              What we do, end to end.
            </h2>
          </div>
        </div>

        {/* Core Layout Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center relative w-full">
          {/* Left Side Interactive List */}
          <ul className="flex flex-col w-full relative z-10">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className="relative">
                  {/* GiveWell Dynamic Item Background Track Overlay */}
                  {isActive && (
                    <motion.div
                      layoutId="activeRowBackground"
                      className="absolute inset-0 bg-background/30 rounded-xl z-0 pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="w-full text-left py-8 border-t border-border flex gap-6 items-baseline relative z-10 px-2 transition-all duration-300 group"
                  >
                    <span
                      className={`text-sm font-mono transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {s.id}
                    </span>
                    <span
                      className={`font-display text-2xl sm:text-3xl leading-tight transition-all duration-300 ${
                        isActive
                          ? "text-foreground translate-x-2 font-medium"
                          : "text-muted-foreground group-hover:text-foreground group-hover:translate-x-1"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
            <li className="border-t border-border" />
          </ul>

          {/* Right Side Floating Panel Track */}
          <div className="relative w-full h-[480px] lg:h-[540px] flex items-center justify-center lg:justify-center z-20">
            <motion.div
              layout
              key={cur.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              /* HOVER STYLES LOOKUP:
                 - hover:-translate-y-2 shifts the card up elegantly
                 - hover:rotate-1 adds a subtle analog twist reminiscent of modern Webflow aesthetics
                 - shadow-xl changes to shadow-2xl on hover to simulate elevation gain
              */
              className={`w-full max-w-[420px] h-full rounded-2xl shadow-xl p-8 sm:p-10 flex flex-col justify-center items-center text-center text-neutral-900 border border-white/20 overflow-hidden relative cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl ${
                active % 2 === 0
                  ? "bg-gradient-to-tr from-[#A6EFFF] via-[#D9F5FF] to-[#F0FAFF]"
                  : "bg-gradient-to-tr from-[#ECCFFF] via-[#F5EFFF] to-[#FAF7FF]"
              }`}
            >
              {/* Overlay Textured Layer */}
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Centered Icon Layer with pulse hover trace effect */}
              <div className="mb-8 p-5 rounded-2xl bg-white/50 backdrop-blur-sm shadow-md relative z-10 transition-transform duration-500 group-hover:scale-110">
                <CardIcon size={42} className="text-neutral-900" strokeWidth={1.5} />
              </div>

              {/* Text Blocks */}
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="font-display text-3xl mb-4 text-neutral-900 font-semibold tracking-tight">
                  {cur.title}
                </h3>
                <p className="text-neutral-700/90 text-sm sm:text-base leading-relaxed max-w-xs">
                  {cur.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
