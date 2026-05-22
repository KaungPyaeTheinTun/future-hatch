import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/site";

export function Services() {
  const [active, setActive] = useState(0);
  const cur = services[active];

  return (
    <section id="services" className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              What we do, end to end.
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <ul className="flex flex-col">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left py-6 border-t border-border flex gap-6 items-baseline transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className={`text-sm font-mono ${isActive ? "text-primary" : ""}`}>{s.id}</span>
                    <span className={`font-display text-2xl sm:text-3xl leading-tight transition-all ${isActive ? "translate-x-1" : ""}`}>
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
            <li className="border-t border-border" />
          </ul>
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl overflow-hidden shadow-card bg-card h-full flex flex-col"
              >
                <div className={`${cur.gradient} aspect-[16/10] relative`}>
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <div className="absolute bottom-6 left-6 text-white/90 font-display text-5xl">{cur.id}</div>
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="font-display text-3xl mb-4">{cur.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cur.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
