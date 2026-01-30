import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterSection() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "" });
      alert("Thank you for subscribing!");
    }, 1000);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_30%_50%,rgba(96,239,255,0.08),transparent_70%),radial-gradient(800px_400px_at_70%_50%,rgba(0,255,135,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs tracking-[0.28em] uppercase text-white/55"
          >
            Stay informed
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-heading text-3xl tracking-[-0.02em] text-white sm:text-4xl"
          >
            No Noise.{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">Just Breakthroughs.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Get the latest updates on breakthrough technologies, portfolio companies, and the path to
            zero emissions.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Full Name"
              required
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur transition-all focus:border-white/25 focus:bg-white/8 focus:ring-2 focus:ring-white/20 sm:w-auto sm:min-w-[280px]"
              aria-label="Your Full Name"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your Email"
              required
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur transition-all focus:border-white/25 focus:bg-white/8 focus:ring-2 focus:ring-white/20 sm:w-auto sm:min-w-[280px]"
              aria-label="Your Email"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-accent-gradient px-8 py-4 text-sm font-medium text-black shadow-glow transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
