import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-16 lg:py-16 overflow-hidden bg-gradient-primary text-white">
      <div className="absolute inset-0 noise opacity-[0.12]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center"
      >
        <h2 className="font-display text-black text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
          Ready to build something that lasts?
        </h2>
        <p className="mt-6 text-lg text-black">Let's talk about your next project.</p>
        <a
          href="mailto:hello@itvisionhub.com"
          className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-black text-foreground font-medium hover:bg-black/80 transition-colors"
        >
          Start a Conversation <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
