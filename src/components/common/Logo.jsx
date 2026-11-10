import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn.js';

/**
 * Typographic wordmark. Replace with the Firm's official vector logo once supplied
 * (the existing site only has a low-resolution PNG).
 */
export default function Logo({ light = false, className, compact = false }) {
  return (
    <Link to="/" aria-label="Ajumogobia & Okeke — home" className={cn('group inline-flex items-center gap-3.5', className)}>
      <span className={cn('grid size-11 shrink-0 place-items-center border font-serif text-[1.15rem] leading-none transition-colors duration-500', light ? 'border-bronze-400/60 text-ivory-50' : 'border-bronze-500/70 text-midnight-900')}>
        <span>A<em className="text-bronze-500">&amp;</em>O</span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={cn('whitespace-nowrap font-serif text-[1.15rem] font-medium tracking-[0.01em] sm:text-[1.35rem] transition-colors duration-500', light ? 'text-ivory-50' : 'text-midnight-900')}>
            Ajumogobia <em className="font-normal text-bronze-500">&amp;</em> Okeke
          </span>
          <span className={cn('mt-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.34em] transition-colors duration-500', light ? 'text-white/55' : 'text-ink-500')}>
            Established 1984
          </span>
        </span>
      )}
    </Link>
  );
}
