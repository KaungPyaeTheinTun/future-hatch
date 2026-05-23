import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import teamMain from "@/assets/team.png";
import teamMain1 from "@/assets/team1.png";
import teamMain2 from "@/assets/team2.png";

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Safely detect screen width on mount and window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax adjustment paths for background geometric artwork
  const gridY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

  // FIXED: Dynamic scale settings based on viewport size.
  // On mobile, width starts at 92% (full width with elegant side margins) and scales cleanly to 100%.
  const mainWidth = useTransform(
    scrollYProgress,
    [0, 0.75],
    isMobile ? ["92%", "100%"] : ["50%", "100%"],
  );

  const mainHeight = useTransform(
    scrollYProgress,
    [0, 0.75],
    isMobile ? ["50%", "100%"] : ["70%", "100%"],
  );

  const mainRadius = useTransform(scrollYProgress, [0, 0.65], ["28px", "0px"]);

  // Dynamic vertical tracking position adjusted for better mobile text clearance
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.75],
    isMobile ? ["40px", "0px"] : ["90px", "0px"],
  );

  // Text color transitions from dark to white as the image shifts underneath it
  const textColor = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    ["rgb(23, 23, 23)", "rgb(255, 255, 255)"],
  );

  const footerColor = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    ["rgb(115, 115, 115)", "rgba(255, 255, 255, 0.8)"],
  );

  return (
    <section
      ref={ref}
      className="relative bg-[#F4F3EF] text-neutral-900 w-full"
      style={{ minHeight: "220vh" }}
    >
      {/* Sticky view frame box layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Animated Headline Container Layer */}
        <div className="absolute top-[8%] sm:top-[5%] z-30 w-full max-w-5xl mx-auto px-6 text-center pointer-events-none">
          <motion.blockquote
            style={{ color: textColor }}
            className="font-display italic text-xl sm:text-4xl lg:text-5xl leading-[1.3] sm:leading-[1.25] font-medium tracking-tight transition-colors duration-200"
          >
            “We imagine a future where technology empowers every ambition.”
            <motion.footer
              style={{ color: footerColor }}
              className="not-italic font-body text-[10px] sm:text-sm mt-4 sm:mt-6 uppercase tracking-[0.2em] font-semibold transition-colors duration-200"
            >
              — The ITVisionHub Team
            </motion.footer>
          </motion.blockquote>
        </div>

        {/* Dynamic Image Grid Arena */}
        <div className="relative w-full h-full flex items-center justify-center z-10 px-4 sm:px-0">
          {/* Left Decorative Floating Graphic Frame */}
          <motion.div
            style={{ y: gridY }}
            className="absolute left-[3%] top-[35%] w-[20%] h-[35%] rounded-2xl overflow-hidden hidden md:block"
          >
            <img
              src={teamMain1}
              alt="The ITVisionHub Team working together"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>

          {/* CORE MAIN TEAM PHOTO CONTAINER 
              Dynamically reads isMobile to serve proper starting dimension states.
          */}
          <motion.div
            style={{
              width: mainWidth,
              height: mainHeight,
              borderRadius: mainRadius,
              y: imageY,
            }}
            className="relative overflow-hidden shadow-2xl will-change-[width,height,border-radius,transform] z-20 border border-white/10"
          >
            <img
              src={teamMain}
              alt="The ITVisionHub Team working together"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          </motion.div>

          {/* Right Decorative Floating Graphic Frame */}
          <motion.div
            style={{ y: gridY }}
            className="absolute right-[3%] bottom-[25%] w-[20%] h-[35%] rounded-2xl overflow-hidden hidden md:block"
          >
            <img
              src={teamMain2}
              alt="The ITVisionHub Team working together"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
