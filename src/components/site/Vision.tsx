import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const tiles = [
  "bg-gradient-blue",
  "bg-gradient-purple",
  "bg-gradient-teal",
  "bg-gradient-pink",
];

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="relative py-32 lg:py-44 bg-bg-dark text-white overflow-hidden">
      <div className="absolute inset-0 noise opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display italic text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
        >
          “We imagine a future where technology empowers every ambition.”
          <footer className="not-italic font-body text-sm mt-8 uppercase tracking-[0.2em] text-white/60">
            — The ITVisionHub Team
          </footer>
        </motion.blockquote>
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              className={`${t} aspect-[4/5] rounded-2xl relative overflow-hidden`}
            >
              <div className="absolute inset-0 dot-grid opacity-25" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
