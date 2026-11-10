import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SmartImage from '../common/SmartImage.jsx';
import { formatDate } from '../../utils/formatDate.js';
import { bylineText } from '../../utils/publications.js';
import { cn } from '../../utils/cn.js';

/** Editorial list row (default) or image card (`variant="card"`). */
export default function ArticleCard({ pub, variant = 'row', light = false, className }) {
  if (variant === 'card') {
    return (
      <Link to={`/publications/${pub.slug}`} className={cn('group flex h-full flex-col', className)}>
        <SmartImage src={pub.image} alt="" width={900} sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[16/10] w-full" imgClassName="transition-[opacity,transform]! duration-[1.4s]! ease-[var(--ease-luxe)] group-hover:scale-105" />
        <div className="flex flex-1 flex-col border-b border-stone-300 pb-8 pt-6">
          <p className="flex flex-wrap items-center gap-x-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-bronze-600">
            <span>{pub.topic}</span><span aria-hidden="true" className="h-px w-4 bg-current" />
            <time dateTime={pub.date} className="text-ink-500">{formatDate(pub.date)}</time>
          </p>
          <h3 className="mt-4 text-[1.6rem] leading-[1.15] transition-colors group-hover:text-bronze-700">{pub.title}</h3>
          <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-ink-500">{pub.excerpt}</p>
          <p className="mt-auto pt-6 text-sm text-ink-700">By {bylineText(pub)}</p>
        </div>
      </Link>
    );
  }
  return (
    <Link
      to={`/publications/${pub.slug}`}
      className={cn('group grid gap-3 border-b py-7 md:grid-cols-[9rem_1fr_auto] md:gap-8', light ? 'border-white/10' : 'border-stone-300', className)}
    >
      <div className={cn('text-[0.68rem] font-semibold uppercase tracking-[0.2em]', light ? 'text-white/45' : 'text-ink-500')}>
        <time dateTime={pub.date}>{formatDate(pub.date)}</time>
        <p className={cn('mt-1.5', light ? 'text-bronze-300' : 'text-bronze-600')}>{pub.topic}</p>
      </div>
      <div>
        <h3 className={cn('text-[1.45rem] leading-snug transition-colors duration-300 md:text-[1.65rem]', light ? 'text-ivory-50 group-hover:text-bronze-300' : 'group-hover:text-bronze-700')}>{pub.title}</h3>
        <p className={cn('mt-2 text-sm', light ? 'text-white/55' : 'text-ink-500')}>By {bylineText(pub)}</p>
      </div>
      <span className={cn('hidden size-11 place-items-center self-center border transition-all duration-500 md:grid', light ? 'border-white/20 text-white group-hover:border-bronze-300 group-hover:bg-bronze-300 group-hover:text-midnight-950' : 'border-stone-300 group-hover:border-midnight-900 group-hover:bg-midnight-900 group-hover:text-ivory-50')}>
        <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
        <span className="sr-only">Read more</span>
      </span>
    </Link>
  );
}
