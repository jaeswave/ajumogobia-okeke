import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SmartImage from '../common/SmartImage.jsx';
import Icon from '../common/Icon.jsx';
import { cn } from '../../utils/cn.js';

export default function PracticeCard({ practice, index, tall = false }) {
  return (
    <Link to={`/practices/${practice.slug}`} className="group relative flex h-full flex-col overflow-hidden bg-midnight-900 text-ivory-50">
      <SmartImage src={practice.image} alt="" width={1000} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={cn('absolute! inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-35')} imgClassName="transition-[opacity,transform]! duration-[1.6s]! ease-[var(--ease-luxe)] group-hover:scale-[1.06]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/50 to-midnight-950/10" />
      <div className={cn('relative flex flex-1 flex-col justify-between p-8 md:p-10', tall ? 'min-h-[30rem]' : 'min-h-[22rem]')}>
        <div className="flex items-start justify-between">
          <Icon name={practice.icon} className="size-8 text-bronze-300" />
          <span className="font-serif text-lg tabular-nums text-white/50">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div>
          <h3 className="text-[1.9rem] leading-[1.08] text-ivory-50 md:text-[2.2rem]">{practice.name}</h3>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-luxe)] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] max-lg:grid-rows-[1fr]">
            <p className="overflow-hidden text-[0.95rem] leading-relaxed text-white/75"><span className="block pt-4">{practice.summary}</span></p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bronze-300">
            Explore <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
