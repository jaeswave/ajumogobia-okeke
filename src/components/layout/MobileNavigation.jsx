import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, Search, X } from 'lucide-react';
import Logo from '../common/Logo.jsx';
import { primaryNav } from '../../data/navigation.js';
import { firm } from '../../data/firm.js';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js';
import { cn } from '../../utils/cn.js';

const ease = [0.22, 1, 0.36, 1];

export default function MobileNavigation({ open, onClose, onOpenSearch }) {
  const [expanded, setExpanded] = useState(null);
  const panelRef = useRef(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    requestAnimationFrame(() => panelRef.current?.querySelector('button, a')?.focus());
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="backdrop" className="fixed inset-0 z-[60] bg-midnight-950/60 xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} aria-hidden="true" />
          <motion.div
            key="panel"
            id="mobile-navigation"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="grain fixed inset-y-0 right-0 z-[61] flex w-full max-w-md flex-col overflow-y-auto bg-midnight-900 text-ivory-50 xl:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex h-24 shrink-0 items-center justify-between px-6">
              <Logo light />
              <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-11 place-items-center text-ivory-50 hover:text-bronze-300">
                <X aria-hidden="true" className="size-6" strokeWidth={1.5} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="mx-6 mb-4 flex h-12 items-center gap-3 border border-white/15 px-4 text-left text-sm text-white/60 hover:border-white/40"
            >
              <Search aria-hidden="true" className="size-4" strokeWidth={1.5} />
              Search people, practices, insights…
            </button>

            <nav aria-label="Mobile" className="flex-1 px-6">
              <ul>
                {primaryNav.map((item, i) => (
                  <motion.li key={item.label} className="border-b border-white/10" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}>
                    {item.menu ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={expanded === item.label}
                          onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                          className="flex w-full items-center justify-between py-5 text-left font-serif text-[1.9rem] leading-none"
                        >
                          {item.label}
                          <ChevronDown aria-hidden="true" className={cn('size-5 text-bronze-400 transition-transform duration-500', expanded === item.label && 'rotate-180')} strokeWidth={1.5} />
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded === item.label && (
                            <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden">
                              <li>
                                <NavLink to={item.to} end className="block py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-bronze-300">
                                  Overview
                                </NavLink>
                              </li>
                              {item.menu.columns.flatMap((c) => c.links).map((link) => (
                                <li key={link.to + link.label}>
                                  <NavLink to={link.to} end className={({ isActive }) => cn('block py-2.5 text-[0.95rem] text-white/75 hover:text-white', isActive && 'text-bronze-300')}>
                                    {link.label}
                                  </NavLink>
                                </li>
                              ))}
                              <li className="h-4" aria-hidden="true" />
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink to={item.to} className={({ isActive }) => cn('block py-5 font-serif text-[1.9rem] leading-none', isActive && 'text-bronze-300')}>
                        {item.label}
                      </NavLink>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 px-6 pb-10 pt-8 text-sm text-white/70">
              <a href={`tel:${firm.phoneHref}`} className="flex items-center gap-3 hover:text-white">
                <Phone aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} />
                {firm.phone}
              </a>
              <a href={`mailto:${firm.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} />
                {firm.email}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
