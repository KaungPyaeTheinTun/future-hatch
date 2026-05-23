import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { team } from "@/data/site";

export function Team() {
  return (
    <section id="team" className="py-28 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Team</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            The people building tomorrow's solutions.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-card rounded-2xl p-6 border border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className={`${m.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-display text-xl mb-5`}>
                {m.initials}
              </div>
              <h3 className="font-display text-xl">{m.name}</h3>
              <p className="text-sm text-primary mt-1">{m.title}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
              <a
                href="#"
                aria-label={`${m.name} on LinkedIn`}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-foreground text-background grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Linkedin size={16} />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-secondary transition-colors font-medium">
            Join Our Team <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
