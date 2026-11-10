import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Loader2 } from 'lucide-react';
import FormStatus from './FormStatus.jsx';
import { subscribeToNewsletter } from '../../services/newsletterService.js';
import { firm } from '../../data/firm.js';
import { cn } from '../../utils/cn.js';

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NewsletterForm({ light = true, id = 'newsletter' }) {
  const [result, setResult] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (values) => {
    setResult(null);
    const res = await subscribeToNewsletter(values);
    setResult(res);
    if (res.status === 'sent') reset();
  };

  const errorId = `${id}-error`;
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-describedby={errors.email ? errorId : undefined}>
      <label htmlFor={`${id}-email`} className={cn('mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.24em]', light ? 'text-white/55' : 'text-ink-500')}>
        Email address
      </label>
      <div className={cn('flex items-end gap-3 border-b transition-colors focus-within:border-bronze-400', light ? 'border-white/25' : 'border-stone-300', errors.email && 'border-red-400!')}>
        <input
          id={`${id}-email`}
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={cn('w-full bg-transparent py-3 text-base focus:outline-none', light ? 'text-ivory-50 placeholder:text-white/35' : 'text-ink-900 placeholder:text-ink-400')}
          {...register('email', {
            required: 'Please enter your email address.',
            pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email address.' },
          })}
        />
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('website')} />
        <button type="submit" disabled={isSubmitting} aria-label="Subscribe to the newsletter" className={cn('mb-2 grid size-10 shrink-0 place-items-center transition-colors', light ? 'text-bronze-300 hover:text-ivory-50' : 'text-midnight-900 hover:text-bronze-600')}>
          {isSubmitting ? <Loader2 aria-hidden="true" className="size-5 animate-spin" /> : <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.5} />}
        </button>
      </div>
      {errors.email && (
        <p id={errorId} className={cn('mt-2 text-sm', light ? 'text-red-300' : 'text-red-700')}>{errors.email.message}</p>
      )}
      <FormStatus result={result} light={light} fallbackEmail={firm.email} subject="Newsletter subscription" sentMessage="Thank you — you are now subscribed to our monthly newsletter." />
    </form>
  );
}
