import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import IntroScreen from "@/components/ui/intro";
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

import { TooltipProvider } from "./components/ui/tooltip";

const queryClient = new QueryClient();

function IndexPage() {
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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>

        <div className="mt-6">
          <Link to="/" className="inline-flex rounded-md bg-primary px-4 py-2">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <IntroScreen />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
