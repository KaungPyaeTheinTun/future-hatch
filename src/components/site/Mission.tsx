import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Mission</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Engineering technology that compounds your ambition.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            ITVisionHub partners with founders, operators, and CIOs to ship software that
            outperforms expectations. We pair pragmatic engineering with strategic clarity —
            turning ambitious roadmaps into systems your team can trust, scale, and defend.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a href="#impact" className="inline-flex items-center gap-1 font-medium group">
              Our Impact
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-1 font-medium text-primary group">
              Contact Us
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
