import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="flex flex-col items-center gap-3 text-white/70"
      >
        <div className="h-12 w-8 rounded-full border border-white/25 bg-white/5 backdrop-blur">
          <motion.div
            className="mx-auto mt-2 h-2 w-2 rounded-full bg-accent-gradient"
            animate={{ y: [0, 18, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="text-xs tracking-[0.28em] uppercase">Scroll</div>
      </motion.div>
    </div>
  );
}

