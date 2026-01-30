import { motion } from "framer-motion";

const pillars = [
  {
    title: "DISCOVER",
    subtitle: "Identify breakthrough technologies",
    description:
      "We seek out the most promising innovations that can scale globally and transform how we generate, store, and use energy.",
    gradient: "from-red-500 via-pink-500 to-rose-500",
  },
  {
    title: "DEVELOP",
    subtitle: "Accelerate from lab to market",
    description:
      "Through strategic partnerships and capital, we help visionary teams navigate the path from prototype to commercial deployment.",
    gradient: "from-blue-500 via-cyan-400 to-teal-400",
  },
  {
    title: "DEPLOY",
    subtitle: "Scale solutions globally",
    description:
      "We work with governments, corporations, and communities to deploy clean energy solutions at the scale needed to reach net zero.",
    gradient: "from-green-500 via-emerald-400 to-teal-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ThreePillarsSection() {
  return (
    <section className="relative border-t border-gray-200 bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs tracking-[0.28em] uppercase text-gray-500">Our approach</div>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.02em] text-black sm:text-4xl">
            Three pillars of impact
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 md:grid-cols-3"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              variants={child}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-gray-300 hover:shadow-xl"
            >
              <div className="mb-6">
                <h3
                  className={`font-heading text-4xl tracking-[-0.02em] bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}
                >
                  {pillar.title}
                </h3>
                <div className="mt-3 text-lg font-medium text-gray-900">{pillar.subtitle}</div>
              </div>
              <p className="text-base leading-relaxed text-gray-600">{pillar.description}</p>

              {/* Decorative gradient line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${pillar.gradient} transition-all duration-500 group-hover:w-full`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
