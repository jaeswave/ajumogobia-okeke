import { Info } from 'lucide-react';
import { cn } from '../../utils/cn.js';

/**
 * Visible marker for content awaiting the Firm's confirmation.
 * Set VITE_SHOW_REVIEW_NOTES=false for the public launch build to hide all markers.
 */
const SHOW = import.meta.env.VITE_SHOW_REVIEW_NOTES !== 'false';

export default function PendingNote({ children, className }) {
  if (!SHOW) return null;
  return (
    <p className={cn('flex items-start gap-3 border-l-2 border-bronze-500 bg-bronze-300/15 px-4 py-3 text-sm leading-relaxed text-ink-700', className)}>
      <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bronze-600" />
      <span><strong className="font-semibold">Awaiting confirmation · </strong>{children}</span>
    </p>
  );
}
