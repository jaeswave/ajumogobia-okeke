import Reveal from '../common/Reveal.jsx';
import PracticeCard from './PracticeCard.jsx';
import { cn } from '../../utils/cn.js';

/** Asymmetric editorial grid: every fourth card spans two columns. */
export default function PracticeGrid({ practices }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {practices.map((p, i) => (
        <Reveal as="li" key={p.slug} delay={(i % 3) * 0.07} amount={0.15} className={cn(i % 4 === 0 && 'lg:col-span-2')}>
          <PracticeCard practice={p} index={i} tall={i % 4 === 0} />
        </Reveal>
      ))}
    </ul>
  );
}
