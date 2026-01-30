import { motion } from "framer-motion";
import { Hero } from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Section } from "./components/Section.jsx";
import { CircularCarouselSection } from "./components/CircularCarouselSection.jsx";
import { EnergyStatsSection } from "./components/EnergyStatsSection.jsx";
import { PortfolioGridSection } from "./components/PortfolioGridSection.jsx";
import { BillGatesQuoteSection } from "./components/BillGatesQuoteSection.jsx";
import { ThreePillarsSection } from "./components/ThreePillarsSection.jsx";
import { NewsletterSection } from "./components/NewsletterSection.jsx";
import { Footer } from "./components/Footer.jsx";

function Card({ title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <div className="text-sm font-medium text-white/90">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{body}</div>
    </div>
  );
}

export default function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <Navbar />
      <main className="bg-black">
        <Hero />

        <CircularCarouselSection />
        <EnergyStatsSection />
        <PortfolioGridSection />

        <BillGatesQuoteSection />

        <ThreePillarsSection />

        <NewsletterSection />

        <Section id="about" eyebrow="About" title="A design-forward, motion-first experience">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-base leading-relaxed text-white/75">
              This replica captures the spirit of a modern climate-tech homepage: sharp typography,
              subtle gradients, and confident motion. Built with Vite, React, Tailwind CSS, and
              Framer Motion for smooth, composable animations.
            </div>
            <div className="rounded-2xl border border-white/10 bg-[radial-gradient(600px_300px_at_30%_20%,rgba(96,239,255,0.18),transparent_55%),radial-gradient(600px_300px_at_70%_60%,rgba(0,255,135,0.14),transparent_55%)] p-6">
              <div className="text-sm font-medium text-white/90">Design system</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>
                  <span className="text-white/85">Heading font:</span> Outfit 900
                </li>
                <li>
                  <span className="text-white/85">Body font:</span> DM Sans
                </li>
                <li>
                  <span className="text-white/85">Accent:</span> #00ff87 → #60efff
                </li>
                <li>
                  <span className="text-white/85">Motion:</span> page fade, hero stagger, scroll loop
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build the future together">
          <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm text-white/75">
                This is a static replica (no backend). Replace with your real form handling when
                integrating.
              </div>
              <form className="mt-6 grid gap-3">
                <input
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/25"
                  placeholder="Name"
                  aria-label="Name"
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/25"
                  placeholder="Email"
                  aria-label="Email"
                />
                <textarea
                  className="min-h-28 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/25"
                  placeholder="Message"
                  aria-label="Message"
                />
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-black shadow-glow transition hover:opacity-95"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="text-sm font-medium text-white/90">Quick links</div>
              <div className="mt-4 grid gap-2 text-sm text-white/70">
                <a className="hover:text-white" href="#home">
                  Home
                </a>
                <a className="hover:text-white" href="#portfolio">
                  Portfolio
                </a>
                <a className="hover:text-white" href="#about">
                  About
                </a>
              </div>
              <div className="mt-8 text-xs tracking-[0.28em] uppercase text-white/55">Notes</div>
              <div className="mt-3 text-sm leading-relaxed text-white/70">
                Video background uses the provided Mixkit URL. Typography loads from Google Fonts.
              </div>
            </div>
          </div>
        </Section>

        <Footer />
      </main>
    </motion.div>
  );
}

