import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/data/site";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section id="impact" className="py-16 lg:py-16 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Impact</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            From quiet efforts to real results.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We measure success by the systems we leave behind — durable, observable, and ready
            to scale with the businesses we serve.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-card"
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
              <div className="relative">
                <div className="font-display text-6xl lg:text-7xl leading-none">
                  <Counter to={s.value} />{s.suffix}
                </div>
                <div className="mt-4 font-medium">{s.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
