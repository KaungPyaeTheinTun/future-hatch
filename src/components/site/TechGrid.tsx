import { motion } from "framer-motion";

const techIcons = [
  { name: "PHP", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg" },
  { name: "ASP.NET", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg" },
  {
    name: "Digital Ocean",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/digitalocean.svg",
  },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg" },
  {
    name: "MSSQL",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg",
  },
];

export function TechGrid() {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-neutral-200/60 overflow-hidden">
      {/* Asymmetrical Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 divide-x divide-y divide-neutral-200/60 border-l border-neutral-200/60">
        {/* Left Side Branding Typography Box */}
        <div className="col-span-2 p-8 sm:p-10 flex flex-col justify-center bg-white min-h-[140px] md:min-h-[160px]">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-tight">
            Your framework,
            <br />
            your way.
          </h3>
        </div>

        {/* Dynamic Map Rendering Technology Grid Nodes */}
        {techIcons.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            // FIXED: Added flex-col, adjusted items spacing, and expanded node heights slightly to make titles look clean and readable
            className="flex flex-col items-center justify-center gap-3 p-6 bg-white h-[140px] md:h-[160px] group relative"
          >
            {/* Ambient subtle background hover flare */}
            <div className="absolute inset-0 bg-neutral-50/0 group-hover:bg-neutral-50/50 transition-colors duration-200" />

            {/* Official Brand Colors Tech Vector Logo */}
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105 relative z-10 select-none pointer-events-none"
            />

            {/* FIXED: Added explicit Technology Item Name Title Text Layer */}
            <span className="text-xs font-semibold tracking-wide text-neutral-500 group-hover:text-neutral-900 transition-colors relative z-10 select-none pointer-events-none">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
