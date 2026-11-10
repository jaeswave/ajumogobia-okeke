import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Portrait from '../common/Portrait.jsx';
import { cn } from '../../utils/cn.js';

export default function LawyerCard({ person, className, large = false }) {
  return (
    <Link to={`/people/${person.slug}`} className={cn('group block', className)}>
      <div className="relative">
        <Portrait person={person} className={cn('w-full', large ? 'aspect-[4/5]' : 'aspect-[3/4]')} />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-bronze-500 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-x-100" />
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bronze-600">{person.title}</p>
          <h3 className={cn('mt-2 leading-tight transition-colors duration-300 group-hover:text-bronze-700', large ? 'text-[2.2rem]' : 'text-[1.6rem]')}>
            {person.name}
            {person.postNominals && <span className="ml-2 font-sans text-[0.7em] font-medium text-ink-500">{person.postNominals}</span>}
          </h3>
          <p className="mt-2 text-sm text-ink-500">{person.focus}</p>
        </div>
        <ArrowRight aria-hidden="true" className="mt-8 size-5 shrink-0 -translate-x-2 text-midnight-900 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={1.25} />
      </div>
    </Link>
  );
}
