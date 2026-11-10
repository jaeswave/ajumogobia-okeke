import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/** Fades and lifts its children into view once, when scrolled into the viewport. */
export default function Reveal({ as = 'div', delay = 0, y = 28, className, children, amount = 0.2, ...rest }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Parent/child pair for staggered lists. */
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
