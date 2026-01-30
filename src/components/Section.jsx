import { motion } from "framer-motion";

export function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="relative scroll-mt-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs tracking-[0.28em] uppercase text-white/55">{eyebrow}</div>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.02em] sm:text-4xl">
            <span className="bg-accent-gradient bg-clip-text text-transparent">{title}</span>
          </h2>
          <div className="mt-8">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}

