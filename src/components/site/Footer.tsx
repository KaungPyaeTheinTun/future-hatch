import { Linkedin, Github, Twitter } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-3 gap-12">
        <div>
          <img
            src={logoFull}
            alt="ITVisionHub — we promised, we delivered"
            className="h-16 w-auto"
            loading="lazy"
          />
          <p className="mt-3 text-sm text-white/60">Turning Vision Into Technology</p>
        </div>
        <div>
          <p className="text-sm text-white/60 mb-3">Stay in the loop</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/30"
            />
            <button className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex lg:justify-end items-start gap-6">
          <a href="#" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/10 transition-colors"><Linkedin size={16} /></a>
          <a href="#" aria-label="GitHub" className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/10 transition-colors"><Github size={16} /></a>
          <a href="#" aria-label="Twitter" className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/10 transition-colors"><Twitter size={16} /></a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap justify-between items-center gap-4 text-xs text-white/50">
          <span>© 2025 ITVisionHub. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
