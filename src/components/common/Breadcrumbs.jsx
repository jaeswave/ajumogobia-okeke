import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export default function Breadcrumbs({ items, light = true, className }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={cn('flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] font-medium uppercase tracking-[0.2em]', light ? 'text-white/55' : 'text-ink-500')}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {last || !item.to ? (
                <span aria-current={last ? 'page' : undefined} className={light ? 'text-bronze-300' : 'text-bronze-600'}>{item.label}</span>
              ) : (
                <Link to={item.to} className={cn('link-underline transition-colors', light ? 'hover:text-white' : 'hover:text-midnight-900')}>{item.label}</Link>
              )}
              {!last && <ChevronRight aria-hidden="true" className="size-3 opacity-60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
