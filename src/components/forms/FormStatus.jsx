import { CircleAlert, CircleCheck, Info } from 'lucide-react';
import { cn } from '../../utils/cn.js';

/**
 * Honest submission feedback shared by all forms.
 * `status`: 'sent' | 'not-configured' | 'error'
 */
export default function FormStatus({ result, fallbackEmail, subject, light = false, sentMessage }) {
  if (!result) return null;
  const mailto = `mailto:${fallbackEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
  const tone = {
    sent: { Icon: CircleCheck, cls: light ? 'border-emerald-300/40 text-emerald-100' : 'border-emerald-700/30 bg-emerald-50 text-emerald-900' },
    'not-configured': { Icon: Info, cls: light ? 'border-bronze-400/50 text-bronze-100' : 'border-bronze-500/40 bg-bronze-300/15 text-ink-800' },
    error: { Icon: CircleAlert, cls: light ? 'border-red-300/50 text-red-100' : 'border-red-700/30 bg-red-50 text-red-900' },
  }[result.status];
  const { Icon } = tone;
  return (
    <div role={result.status === 'error' ? 'alert' : 'status'} className={cn('mt-6 flex items-start gap-3 border px-4 py-3 text-sm leading-relaxed', tone.cls)}>
      <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      <p>
        {result.status === 'sent' && (sentMessage || 'Thank you — your submission has been received.')}
        {result.status === 'not-configured' && (
          <>
            Your details are valid, but online submission has not yet been enabled on this website, so nothing has been sent. Please email us directly at{' '}
            <a className="font-semibold underline underline-offset-4" href={mailto}>{fallbackEmail}</a>.
          </>
        )}
        {result.status === 'error' && (
          <>
            {result.message} Please try again, or email{' '}
            <a className="font-semibold underline underline-offset-4" href={mailto}>{fallbackEmail}</a>.
          </>
        )}
      </p>
    </div>
  );
}
