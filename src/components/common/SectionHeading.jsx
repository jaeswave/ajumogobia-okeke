import Reveal from './Reveal.jsx';
import { cn } from '../../utils/cn.js';

export default function SectionHeading({ eyebrow, title, lead, index, align = 'left', light = false, className, as: H = 'h2', children }) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {(eyebrow || index) && (
        <p className={cn('eyebrow mb-6', light && 'eyebrow-light', align === 'center' && 'justify-center')}>
          {index && <span className="tabular-nums">{index}</span>}
          {eyebrow}
        </p>
      )}
      <H className={cn('text-[length:var(--text-headline)] leading-[1.02]', light && 'text-ivory-50')}>{title}</H>
      {lead && <p className={cn('mt-6 text-lg leading-relaxed', light ? 'text-white/70' : 'text-ink-500')}>{lead}</p>}
      {children}
    </Reveal>
  );
}
