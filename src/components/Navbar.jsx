import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-gradient shadow-glow" />
            <span className="font-heading text-sm tracking-[0.18em] text-white/90">
              BREAKTHROUGH
            </span>
            <span className="text-sm tracking-[0.18em] text-white/55">ENERGY</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
            >
              Let’s talk
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
            className="md:hidden rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/85"
          >
            Menu
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-3 md:hidden"
            >
              <div className="rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur">
                <div className="grid gap-1">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

