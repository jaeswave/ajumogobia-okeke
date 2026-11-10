import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Search } from 'lucide-react';
import Container from '../common/Container.jsx';
import Logo from '../common/Logo.jsx';
import MegaMenu from './MegaMenu.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import { primaryNav } from '../../data/navigation.js';
import { useScrollPosition } from '../../hooks/useScrollPosition.js';
import { cn } from '../../utils/cn.js';

export default function Header({ onOpenSearch }) {
  const y = useScrollPosition();
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const hoverTimer = useRef(null);
  const headerRef = useRef(null);

  // Hide on scroll down, reveal on scroll up — keeps reading space generous.
  useEffect(() => {
    const delta = y - lastY.current;
    if (Math.abs(delta) > 6) {
      setHidden(delta > 0 && y > 480 && !openMenu);
      lastY.current = y;
    }
  }, [y, openMenu]);

  // Close menus on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape and outside click close the mega menu.
  useEffect(() => {
    if (!openMenu) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        const trigger = headerRef.current?.querySelector(`[data-menu-trigger="${openMenu}"]`);
        setOpenMenu(null);
        trigger?.focus();
      }
    };
    const onPointer = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [openMenu]);

  const scheduleOpen = useCallback((label) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(label), label ? 90 : 220);
  }, []);

  const solid = y > 40 || Boolean(openMenu);
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`));
  const active = primaryNav.find((item) => item.label === openMenu);

  return (
    <>
      <a href="#main" className="sr-only z-[70] bg-bronze-500 px-4 py-2 text-midnight-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header
        ref={headerRef}
        onMouseLeave={() => openMenu && scheduleOpen(null)}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow,color] duration-700 ease-[var(--ease-luxe)]',
          solid ? 'bg-ivory-50/95 shadow-[0_1px_0_rgb(15_20_38/0.08)] backdrop-blur-md' : 'bg-transparent',
          hidden ? '-translate-y-full' : 'translate-y-0',
        )}
      >
        <Container wide className={cn('flex items-center justify-between gap-6 transition-[height] duration-500', y > 40 ? 'h-20' : 'h-24')}>
          <Logo light={!solid} />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => {
                const current = isActive(item.to);
                const base = cn(
                  'relative flex h-12 items-center gap-1.5 px-3.5 text-[0.8rem] font-semibold tracking-[0.04em] transition-colors duration-300',
                  solid ? 'text-midnight-900 hover:text-bronze-600' : 'text-ivory-50/90 hover:text-white',
                );
                const underline = (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3.5 bottom-2 h-px origin-left bg-bronze-500 transition-transform duration-500 ease-[var(--ease-luxe)]',
                      current || openMenu === item.label ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                );
                if (!item.menu) {
                  return (
                    <li key={item.label}>
                      <NavLink to={item.to} className={base} aria-current={current ? 'page' : undefined} onMouseEnter={() => openMenu && scheduleOpen(null)}>
                        {item.label}
                        {underline}
                      </NavLink>
                    </li>
                  );
                }
                const expanded = openMenu === item.label;
                return (
                  <li key={item.label} onMouseEnter={() => scheduleOpen(item.label)}>
                    <button
                      type="button"
                      data-menu-trigger={item.label}
                      aria-expanded={expanded}
                      aria-controls="mega-menu"
                      aria-haspopup="true"
                      className={base}
                      onClick={() => setOpenMenu(expanded ? null : item.label)}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          setOpenMenu(item.label);
                          requestAnimationFrame(() => document.querySelector('#mega-menu a')?.focus());
                        }
                      }}
                    >
                      {item.label}
                      <ChevronDown aria-hidden="true" className={cn('size-3.5 transition-transform duration-500', expanded && 'rotate-180')} strokeWidth={1.75} />
                      {current && <span className="sr-only"> (current section)</span>}
                      {underline}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search the website"
              className={cn(
                'group flex h-11 items-center gap-3 px-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors',
                solid ? 'text-midnight-900 hover:text-bronze-600' : 'text-ivory-50 hover:text-bronze-300',
              )}
            >
              <Search aria-hidden="true" className="size-[1.15rem]" strokeWidth={1.5} />
              <span className="hidden md:inline">Search</span>
              <kbd className={cn('hidden border px-1.5 py-0.5 font-sans text-[0.6rem] tracking-normal 2xl:inline', solid ? 'border-stone-300 text-ink-500' : 'border-white/25 text-white/60')}>⌘K</kbd>
            </button>
            <Link
              to="/contact"
              className={cn(
                'hidden h-11 items-center border px-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500 lg:inline-flex',
                solid ? 'border-midnight-900 bg-midnight-900 text-ivory-50 hover:bg-midnight-700' : 'border-white/40 text-ivory-50 hover:bg-ivory-50 hover:text-midnight-900',
              )}
            >
              Book a consultation
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className={cn('grid size-11 place-items-center xl:hidden', solid ? 'text-midnight-900' : 'text-ivory-50')}
            >
              <Menu aria-hidden="true" className="size-6" strokeWidth={1.5} />
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {active?.menu && (
            <motion.div
              key="mega"
              id="mega-menu"
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-stone-200 bg-ivory-50 shadow-[0_30px_60px_-30px_rgb(11_20_38/0.35)] xl:block"
              onMouseEnter={() => clearTimeout(hoverTimer.current)}
            >
              <MegaMenu item={active} onNavigate={() => setOpenMenu(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>{openMenu && <motion.div key="scrim" aria-hidden="true" className="fixed inset-0 z-40 hidden bg-midnight-950/40 backdrop-blur-[2px] xl:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} />}</AnimatePresence>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} onOpenSearch={onOpenSearch} />
    </>
  );
}
