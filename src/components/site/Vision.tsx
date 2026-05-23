import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero.png";

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // GiveWell-style: image starts small + rounded, scales up to fill as it enters view
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.1]);
  const radius = useTransform(scrollYProgress, [0, 0.5], ["48px", "0px"]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.2, 0.65]);

  return (
    <section ref={ref} className="relative bg-bg-dark text-white">
      <div className="relative h-[220vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div
            style={{ scale, borderRadius: radius }}
            className="relative w-[88vw] h-[80vh] overflow-hidden will-change-transform"
          >
            <img
              src={heroImage}
              alt="Vision becoming reality — skyline reflecting on calm water"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent"
            />
            <motion.div
              style={{ y: textY }}
              className="absolute inset-0 flex items-end justify-center pb-16 lg:pb-24 px-6"
            >
              <blockquote className="max-w-4xl text-center font-display italic text-3xl sm:text-5xl lg:text-6xl leading-[1.1] text-white">
                “We imagine a future where technology empowers every ambition.”
                <footer className="not-italic font-body text-xs sm:text-sm mt-6 uppercase tracking-[0.2em] text-white/70">
                  — The ITVisionHub Team
                </footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
