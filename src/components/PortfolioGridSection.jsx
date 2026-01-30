import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 },
  },
};

const child = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const items = [
  {
    count: 29,
    sector: "Manufacturing",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1400&q=80",
  },
  {
    count: 26,
    sector: "Electricity",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    count: 20,
    sector: "Agriculture",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    count: 17,
    sector: "Transportation",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80",
  },
  {
    count: 11,
    sector: "Building",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
];

function SectorCard({ count, sector, img }) {
  return (
    <motion.div
      variants={child}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-45 transition duration-500 group-hover:opacity-60"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/35" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <div>
          <div className="text-6xl font-semibold leading-none tracking-[-0.02em] text-white">
            <span className="bg-accent-gradient bg-clip-text text-transparent">{count}</span>
          </div>
          <div className="mt-4 text-xs tracking-[0.28em] uppercase text-white/60">Companies</div>
        </div>

        <div className="mt-10">
          <div className="font-heading text-2xl tracking-[-0.01em]">{sector}</div>
          <div className="mt-2 text-sm text-white/70">
            Explore technologies reshaping the sector.
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FullPortfolioCard() {
  return (
    <motion.a
      variants={child}
      href="#contact"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(700px_420px_at_20%_20%,rgba(96,239,255,0.24),transparent_55%),radial-gradient(700px_420px_at_80%_60%,rgba(0,255,135,0.18),transparent_55%)]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/35" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-white/60">Portfolio</div>
          <div className="mt-4 font-heading text-3xl tracking-[-0.02em]">
            Full Portfolio
          </div>
          <div className="mt-3 text-sm leading-relaxed text-white/70">
            View the complete set of sectors, themes, and companies.
          </div>
        </div>
        <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/85">
          <span className="bg-accent-gradient bg-clip-text text-transparent">Explore</span>
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.a>
  );
}

export function PortfolioGridSection() {
  return (
    <section id="portfolio" className="relative scroll-mt-28 border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={child} className="text-xs tracking-[0.28em] uppercase text-white/55">
            Portfolio
          </motion.div>
          <motion.h2
            variants={child}
            className="mt-4 max-w-4xl font-heading text-3xl tracking-[-0.02em] sm:text-4xl"
          >
            This is energy innovation on a global scale
          </motion.h2>

          <motion.div variants={child} className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            A snapshot of sectors where clean energy innovation is accelerating—built to scale,
            designed to last.
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <SectorCard key={it.sector} count={it.count} sector={it.sector} img={it.img} />
            ))}
            <FullPortfolioCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

