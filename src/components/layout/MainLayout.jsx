import { Suspense, useCallback, useEffect, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SearchOverlay from '../search/SearchOverlay.jsx';
import LoadingState from '../common/LoadingState.jsx';
import { useScrollPosition } from '../../hooks/useScrollPosition.js';

/** Freezes the outlet element so the exiting page keeps rendering its own content. */
function AnimatedOutlet() {
  const outlet = useOutlet();
  const [frozen] = useState(outlet);
  return frozen;
}

function BackToTop() {
  const y = useScrollPosition();
  return (
    <AnimatePresence>
      {y > 700 && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
          className="fixed bottom-6 right-6 z-40 grid size-12 place-items-center border border-bronze-500/50 bg-midnight-900/90 text-ivory-50 backdrop-blur transition-colors hover:bg-bronze-500 hover:text-midnight-950"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowUp aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function MainLayout() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = useCallback(() => setSearchOpen(true), []);

  // In-page hash links scroll to their target once the page has rendered.
  useEffect(() => {
    if (!location.hash) return undefined;
    const t = setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start' }), 350);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  // ⌘K / Ctrl+K and "/" open search.
  useEffect(() => {
    const onKey = (e) => {
      const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '');
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header onOpenSearch={openSearch} />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => !location.hash && window.scrollTo({ top: 0, behavior: 'instant' })}>
        <motion.main
          id="main"
          key={location.pathname}
          tabIndex={-1}
          className="flex-1 focus:outline-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          <Suspense fallback={<LoadingState />}>
            <AnimatedOutlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
