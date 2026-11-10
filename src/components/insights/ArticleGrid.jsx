import { AnimatePresence, motion } from 'framer-motion';
import ArticleCard from './ArticleCard.jsx';
import EmptyState from '../common/EmptyState.jsx';

export default function ArticleGrid({ items, onReset }) {
  if (!items.length) {
    return (
      <EmptyState title="No publications match your filters">
        <button type="button" onClick={onReset} className="underline underline-offset-4 hover:text-midnight-900">Clear all filters</button>
      </EmptyState>
    );
  }
  return (
    <motion.ul layout className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {items.map((pub) => (
          <motion.li key={pub.slug} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <ArticleCard pub={pub} variant="card" />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
