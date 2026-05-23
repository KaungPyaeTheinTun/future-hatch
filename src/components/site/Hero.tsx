import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.png";

const headline = "Turning Vision Into Technology".split(" ");

export function Hero() {
  return (
    // Reduced outer padding (pt-16 pb-10) to make the overall section smaller
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-16 pb-8 px-4 sm:px-6 lg:px-10"
    >
      <div className="relative max-w-[1400px] mx-auto rounded-[28px] overflow-hidden shadow-lift grid grid-cols-1 items-stretch">
        {/* Background Image Layer */}
        <div className="col-start-1 row-start-1 relative w-full h-full">
          <img
            src={heroImage}
            alt="Serene futuristic skyline reflecting over calm water"
            className="w-full h-full object-cover block"
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70"
            aria-hidden
          />
        </div>

        {/* Content Layer — Reduced vertical padding for a tighter fit */}
        <div className="col-start-1 row-start-1 relative px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 flex flex-col justify-end text-white z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 mb-6"
          >
            <span className="w-6 h-px bg-white/50" /> IT Solutions · Software · Consulting
          </motion.span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl">
            {headline.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.25em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-base text-white/85"
          >
            We help businesses build, scale, and secure the technology that drives their future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Explore Services <ArrowRight size={14} />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/40 text-white bg-white/10 backdrop-blur hover:bg-white/20 transition-colors text-sm font-medium"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#mission"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-foreground/60"
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
