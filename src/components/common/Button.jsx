import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '../../utils/cn.js';

const variants = {
  primary: 'bg-midnight-900 text-ivory-50 hover:bg-midnight-700',
  bronze: 'bg-bronze-500 text-midnight-950 hover:bg-bronze-400',
  outline: 'border border-midnight-900/25 text-midnight-900 hover:border-midnight-900 hover:bg-midnight-900 hover:text-ivory-50',
  'outline-light': 'border border-white/35 text-ivory-50 hover:border-ivory-50 hover:bg-ivory-50 hover:text-midnight-900',
  ghost: 'px-0! text-midnight-900 hover:text-bronze-600',
  'ghost-light': 'px-0! text-ivory-50 hover:text-bronze-300',
};

/**
 * One button for every call to action. Renders a <Link> for internal routes,
 * an <a> for external/mailto/tel links and a <button> otherwise.
 */
export default function Button({ to, href, variant = 'primary', icon = 'arrow', className, children, external, ...rest }) {
  const Icon = icon === 'external' ? ArrowUpRight : icon === 'arrow' ? ArrowRight : null;
  const classes = cn(
    'group inline-flex min-h-12 items-center justify-center gap-3 px-7 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-[var(--ease-luxe)] disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon aria-hidden="true" className="size-4 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:translate-x-1" strokeWidth={1.5} />}
    </>
  );
  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>;
  if (href) {
    const isExternal = external ?? /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
        {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return <button type="button" className={classes} {...rest}>{content}</button>;
}
