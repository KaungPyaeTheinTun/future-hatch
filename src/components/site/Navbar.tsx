import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";

const links = [
  { href: "#mission", label: "Our Mission" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#impact", label: "Impact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // If the user manually scrolls the background page while the menu is open, close it
      if (open && window.scrollY > 20) {
        setOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // FIXED: Delay closing the menu slightly so the browser can fully register and execute the anchor navigation jump
  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    // Find target element and perform a stable anchor jump
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180); // Waits for the mobile drawer close animation to finish so layout doesn't break
    }
  };

  return (
    <>
      {/* Navbar Container 
          FIXED: Prevent the navbar from animating off-screen (-translate-y-full) if the mobile menu is open
      */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 bg-background/80 backdrop-blur-xl ${
          scrolled && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="text-[26px] leading-none tracking-[-0.02em] text-foreground font-semibold"
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontVariationSettings: "'opsz' 32",
            }}
          >
            ITVisionHub
          </a>

          <ul className="hidden md:flex items-center gap-8 text-md text-black font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleMobileLinkClick(e, l.href)}
                    className="text-foreground/80 font-medium py-1 w-full block active:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleMobileLinkClick(e, "#contact")}
                  className="inline-flex justify-center items-center px-4 py-2 rounded-lg bg-primary text-white font-medium w-full text-center"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Back-to-Top Circle Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            <ArrowUp size={22} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
