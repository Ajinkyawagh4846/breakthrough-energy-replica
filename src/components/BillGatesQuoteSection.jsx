import { motion } from "framer-motion";
import { useState } from "react";

export function BillGatesQuoteSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_50%,rgba(96,239,255,0.12),transparent_70%),radial-gradient(900px_500px_at_20%_80%,rgba(0,255,135,0.1),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center"
        >
          {/* Quote */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs tracking-[0.28em] uppercase text-white/55"
            >
              Founder&apos;s vision
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading text-3xl leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl"
            >
              &quot;When I see a tough problem, my first thought is always{" "}
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                &apos;how can innovation help solve this?&apos;
              </span>{" "}
              That&apos;s why Breakthrough Energy was started—to accelerate the innovation we need to
              get to zero emissions.&quot;
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-base font-medium text-white/80"
            >
              <div>Bill Gates</div>
              <div className="mt-1 text-sm text-white/60">Founder, Breakthrough Energy</div>
            </motion.div>
          </div>

          {/* Video thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Play video"
            >
              <div className="relative">
                <div className="h-20 w-20 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur transition-all group-hover:border-white/50 group-hover:bg-white/20" />
                <svg
                  className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isPlaying ? (
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  ) : (
                    <path d="M8 5v14l11-7z" />
                  )}
                </svg>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
