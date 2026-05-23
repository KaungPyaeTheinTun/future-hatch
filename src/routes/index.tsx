import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Services } from "@/components/site/Services";
import { Partners } from "@/components/site/Partners";
import { Vision } from "@/components/site/Vision";
import { Team } from "@/components/site/Team";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ITVisionHub — Turning Vision Into Technology" },
      { name: "description", content: "ITVisionHub helps businesses build, scale, and secure the technology that drives their future — custom software, cloud, consulting, and cybersecurity." },
      { property: "og:title", content: "ITVisionHub — Turning Vision Into Technology" },
      { property: "og:description", content: "Custom software, cloud infrastructure, IT consulting and cybersecurity for ambitious teams." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400&family=Inter:opsz,wght@14..32,400..700&family=Lato:wght@300;400;700;900&family=Manrope:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="font-lato">
        <Mission />
        <Services />
        <Partners />
        <Vision />
        <Team />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
