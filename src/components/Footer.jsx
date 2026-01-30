import { motion } from "framer-motion";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#mission" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#careers" },
  ],
  Portfolio: [
    { label: "All Companies", href: "#portfolio" },
    { label: "Sectors", href: "#sectors" },
    { label: "Impact", href: "#impact" },
    { label: "Case Studies", href: "#cases" },
  ],
  Resources: [
    { label: "Research", href: "#research" },
    { label: "Reports", href: "#reports" },
    { label: "News", href: "#news" },
    { label: "Blog", href: "#blog" },
  ],
  Connect: [
    { label: "Contact", href: "#contact" },
    { label: "Newsletter", href: "#newsletter" },
    { label: "Twitter", href: "#twitter" },
    { label: "LinkedIn", href: "#linkedin" },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const child = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {Object.entries(footerLinks).map(([column, links]) => (
            <motion.div key={column} variants={child}>
              <h3 className="mb-4 font-heading text-sm font-semibold tracking-[-0.01em]">
                <span className="bg-accent-gradient bg-clip-text text-transparent">{column}</span>
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-4 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Breakthrough Energy. All rights reserved.</div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#privacy"
                className="transition-colors hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="transition-colors hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
