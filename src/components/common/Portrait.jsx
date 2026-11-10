import { useState } from 'react';
import { UserRound } from 'lucide-react';
import { cn } from '../../utils/cn.js';

/** Lawyer portrait with a neutral placeholder when no approved photograph exists. */
export default function Portrait({ person, className, eager = false }) {
  const [failed, setFailed] = useState(!person.portrait);
  return (
    <div className={cn('relative overflow-hidden bg-stone-200', className)}>
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-stone-200 text-ink-400">
          <UserRound aria-hidden="true" className="size-14" strokeWidth={0.9} />
          <span className="mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em]">Portrait to follow</span>
        </div>
      ) : (
        <img
          src={person.portrait}
          alt={`Portrait of ${person.name}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover object-top grayscale-[35%] transition-all duration-1000 ease-[var(--ease-luxe)] group-hover:scale-[1.04] group-hover:grayscale-0"
        />
      )}
    </div>
  );
}
