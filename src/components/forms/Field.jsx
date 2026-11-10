import { cn } from '../../utils/cn.js';

/** Labelled form control wrapper with accessible error wiring. */
export default function Field({ id, label, required, error, hint, children, className }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
        {label}
        {required && <span aria-hidden="true" className="ml-1 text-bronze-600">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-2 text-xs text-ink-400">{hint}</p>}
      {error && <p id={`${id}-error`} className={cn('mt-2 text-sm text-red-700')}>{error.message}</p>}
    </div>
  );
}

export const fieldA11y = (id, error, hint) => ({
  id,
  'aria-invalid': error ? 'true' : 'false',
  'aria-describedby': error ? `${id}-error` : hint ? `${id}-hint` : undefined,
});
