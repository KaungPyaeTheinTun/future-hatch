import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const headline = "Turning Vision Into Technology".split(" ");

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-mesh">
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          <span className="w-8 h-px bg-foreground/40" /> IT Solutions · Software · Consulting
        </motion.span>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[1.05] max-w-5xl">
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
          className="mt-8 max-w-xl text-lg text-muted-foreground"
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
          <a href="#mission" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background/50 backdrop-blur hover:bg-background transition-colors font-medium">
            Our Story
          </a>
        </motion.div>
      </div>
      <motion.a
        href="#mission"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}
