import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber.jsx";

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

const pillars = [
  {
    title: "Affordable",
    img: "https://images.unsplash.com/photo-1565372486056-6f243f91f13a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Reliable",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Clean",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
];

export function EnergyStatsSection() {
  return (
    <section className="relative border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={child} className="text-xs tracking-[0.28em] uppercase text-white/55">
            Energy outlook
          </motion.div>

          <motion.h2
            variants={child}
            className="mt-4 max-w-4xl font-heading text-3xl tracking-[-0.02em] sm:text-4xl"
          >
            The world&apos;s demand for energy will more than double by 2050
          </motion.h2>

          <motion.div variants={child} className="mt-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex items-baseline gap-4">
              <div className="text-2xl font-semibold text-white/80 sm:text-3xl">
                <span className="bg-accent-gradient bg-clip-text text-transparent">26k</span>
                <span className="ml-2 text-white/60">TWh in 2023</span>
              </div>
              <div className="text-white/35">→</div>
              <div className="text-3xl font-semibold sm:text-5xl">
                <span className="bg-accent-gradient bg-clip-text text-transparent">
                  <AnimatedNumber from={26} to={66} duration={1.4} format={(n) => `${n}k`} />
                </span>
                <span className="ml-3 text-base text-white/60 sm:text-lg">TWh in 2050</span>
              </div>
            </div>

            <div className="max-w-xl text-sm leading-relaxed text-white/70">
              Affordable, reliable, clean energy at global scale requires new technologies across
              generation, storage, and industry.
            </div>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={child}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div
                  className="absolute inset-0 scale-105 bg-cover bg-center opacity-40 transition duration-500 group-hover:opacity-55"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/35" />
                <div className="relative">
                  <div className="text-xs tracking-[0.28em] uppercase text-white/60">Pillar</div>
                  <div className="mt-3 font-heading text-2xl tracking-[-0.01em]">{p.title}</div>
                  <div className="mt-3 text-sm leading-relaxed text-white/70">
                    Building an energy system that is {p.title.toLowerCase()} for everyone.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

