import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CornerDownLeft, Search, X } from 'lucide-react';
import Container from '../common/Container.jsx';
import { search, searchSuggestions } from '../../services/searchService.js';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js';
import { cn } from '../../utils/cn.js';

const ease = [0.22, 1, 0.36, 1];

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  useLockBodyScroll(open);

  const results = useMemo(() => search(query, 8), [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setCursor(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  const go = (to) => {
    onClose();
    navigate(to);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (results[cursor]) go(results[cursor].to);
      else if (query.trim()) go(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Search the website"
          className="fixed inset-0 z-[80] overflow-y-auto bg-ivory-50/[0.985] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onKeyDown={onKeyDown}
        >
          <Container className="py-8 md:py-14">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Search Ajumogobia &amp; Okeke</p>
              <button type="button" onClick={onClose} aria-label="Close search" className="grid size-11 place-items-center text-midnight-900 hover:text-bronze-600">
                <X aria-hidden="true" className="size-6" strokeWidth={1.5} />
              </button>
            </div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease, delay: 0.05 }} className="mt-10 flex items-center gap-4 border-b border-midnight-900 pb-4">
              <Search aria-hidden="true" className="size-7 shrink-0 text-bronze-500" strokeWidth={1.25} />
              <label htmlFor="site-search" className="sr-only">Search</label>
              <input
                ref={inputRef}
                id="site-search"
                type="search"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="People, practices, publications…"
                aria-controls="search-results"
                aria-activedescendant={results[cursor] ? `sr-${cursor}` : undefined}
                className="w-full bg-transparent font-serif text-3xl text-midnight-900 placeholder:text-ink-400/70 focus:outline-none md:text-5xl"
              />
            </motion.div>

            <div className="mt-10" aria-live="polite">
              {!query.trim() ? (
                <div>
                  <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-ink-400">Popular searches</p>
                  <div className="flex flex-wrap gap-2">
                    {searchSuggestions.map((s) => (
                      <button key={s} type="button" onClick={() => setQuery(s)} className="border border-stone-300 px-4 py-2 text-sm text-midnight-900 transition-colors hover:border-midnight-900">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length ? (
                <ul id="search-results" role="listbox" className="divide-y divide-stone-200 border-y border-stone-200">
                  {results.map((r, i) => (
                    <li key={r.to} id={`sr-${i}`} role="option" aria-selected={i === cursor}>
                      <Link
                        to={r.to}
                        onClick={onClose}
                        onMouseEnter={() => setCursor(i)}
                        className={cn('group grid grid-cols-[6.5rem_1fr_auto] items-center gap-4 py-5 transition-colors md:grid-cols-[8rem_1fr_auto]', i === cursor && 'bg-ivory-200/50')}
                      >
                        <span className="pl-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bronze-600">{r.type}</span>
                        <span>
                          <span className="block font-serif text-xl text-midnight-900 md:text-2xl">{r.title}</span>
                          <span className="mt-1 line-clamp-1 block text-sm text-ink-500">{r.subtitle}</span>
                        </span>
                        <ArrowRight aria-hidden="true" className="mr-3 size-4 text-midnight-900 opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.5} />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-ink-500">
                  No results for “{query}”. Try a practice area such as <button type="button" className="underline" onClick={() => setQuery('Litigation')}>Litigation</button> or a lawyer’s name.
                </p>
              )}
              {query.trim() && (
                <button type="button" onClick={() => go(`/search?q=${encodeURIComponent(query.trim())}`)} className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-midnight-900 hover:text-bronze-600">
                  See all results <CornerDownLeft aria-hidden="true" className="size-3.5" />
                </button>
              )}
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
