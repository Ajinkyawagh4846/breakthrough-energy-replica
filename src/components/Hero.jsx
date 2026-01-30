import { motion } from "framer-motion";
import { ScrollIndicator } from "./ScrollIndicator.jsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-in-a-field-1941-large.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(96,239,255,0.22),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(0,255,135,0.18),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pt-28 sm:px-6 sm:pt-32">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-accent-gradient" />
            CLIMATE-TECH • CAPITAL • CATALYST
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-heading text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.02em]"
          >
            <span className="block text-white">Empowering innovators</span>
            <span className="block bg-accent-gradient bg-clip-text text-transparent">
              to build the future
            </span>
            <span className="block text-white">of energy</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            A modern homepage replica inspired by Breakthrough Energy—focused on bold typography,
            motion, and a clean, high-contrast aesthetic.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-black shadow-glow transition hover:opacity-95"
            >
              Explore portfolio
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/28 hover:bg-white/10"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

