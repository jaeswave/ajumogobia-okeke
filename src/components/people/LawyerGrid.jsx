import { AnimatePresence, motion } from 'framer-motion';
import LawyerCard from './LawyerCard.jsx';
import EmptyState from '../common/EmptyState.jsx';

export default function LawyerGrid({ people }) {
  if (!people.length) return <EmptyState title="No matching people">Try a different name or clear the filters.</EmptyState>;
  return (
    <motion.ul layout className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {people.map((p) => (
          <motion.li key={p.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <LawyerCard person={p} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
