import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({
  from = 0,
  to = 100,
  duration = 1.2,
  format = (n) => String(n),
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(from);
  const [display, setDisplay] = useState(format(from));

  useMotionValueEvent(mv, "change", (latest) => {
    setDisplay(format(Math.round(latest)));
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [duration, inView, mv, to]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

