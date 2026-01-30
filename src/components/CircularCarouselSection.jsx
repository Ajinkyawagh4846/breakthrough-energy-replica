import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80"
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function CircularCarouselSection() {
  const track = [...images, ...images];

  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="text-xs tracking-[0.28em] uppercase text-black/55">Perspective</div>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.02em] sm:text-4xl">
            Energy is prosperity
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70">
            Innovation at scale means seeing the whole system—generation, storage, industry, and the
            infrastructure that connects it all.
          </p>
        </motion.div>
      </div>

      <div className="relative pb-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent sm:w-40" />

        <div className="overflow-hidden">
          <div className="marquee flex gap-6 px-6">
            {track.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="h-[220px] w-[220px] flex-none overflow-hidden rounded-full ring-1 ring-black/10 sm:h-[300px] sm:w-[300px]"
              >
                <img
                  src={src}
                  alt="Energy / technology"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

