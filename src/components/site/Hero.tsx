import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.png";

const headline = "Turning Vision Into Technology".split(" ");

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-24 pb-16 px-4 sm:px-6 lg:px-10">
      <div className="relative max-w-[1400px] mx-auto rounded-[28px] overflow-hidden shadow-lift">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Serene futuristic skyline reflecting over calm water — vision becoming technology"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70" aria-hidden />
        </div>
        <div className="relative px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-48 min-h-[80vh] flex flex-col justify-end text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 mb-8"
          >
            <span className="w-8 h-px bg-white/50" /> IT Solutions · Software · Consulting
          </motion.span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            {headline.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.25em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg text-white/85"
          >
            We help businesses build, scale, and secure the technology that drives their future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-colors">
              Explore Services <ArrowRight size={16} />
            </a>
            <a href="#mission" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40 text-white bg-white/10 backdrop-blur hover:bg-white/20 transition-colors font-medium">
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="#mission"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground/60"
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}
