import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import Field, { fieldA11y } from './Field.jsx';
import FormStatus from './FormStatus.jsx';
import { EMAIL_PATTERN } from './NewsletterForm.jsx';
import { registerAlumnus } from '../../services/newsletterService.js';
import { firm } from '../../data/firm.js';

export default function AlumniForm() {
  const [result, setResult] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ mode: 'onTouched', defaultValues: { newsletter: true } });

  const onSubmit = async (values) => {
    setResult(null);
    const res = await registerAlumnus(values);
    setResult(res);
    if (res.status === 'sent') reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-8 sm:grid-cols-2">
      <Field id="al-first" label="First name" required error={errors.firstName}>
        <input type="text" autoComplete="given-name" className="field-input" {...fieldA11y('al-first', errors.firstName)} {...register('firstName', { required: 'Please enter your first name.' })} />
      </Field>
      <Field id="al-last" label="Last name" required error={errors.lastName}>
        <input type="text" autoComplete="family-name" className="field-input" {...fieldA11y('al-last', errors.lastName)} {...register('lastName', { required: 'Please enter your last name.' })} />
      </Field>
      <Field id="al-email" label="Email address" required error={errors.email} className="sm:col-span-2">
        <input type="email" autoComplete="email" className="field-input" {...fieldA11y('al-email', errors.email)} {...register('email', { required: 'Please enter your email address.', pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email address.' } })} />
      </Field>
      <Field id="al-years" label="Years at A&O (optional)" className="sm:col-span-2">
        <input type="text" placeholder="e.g. 2012 – 2018" className="field-input" {...fieldA11y('al-years')} {...register('years')} />
      </Field>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('website')} />
      <label className="flex items-center gap-3 text-sm text-ink-700 sm:col-span-2">
        <input type="checkbox" className="size-4 accent-midnight-900" {...register('newsletter')} />
        Also subscribe me to the monthly newsletter
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 items-center gap-3 bg-midnight-900 px-8 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ivory-50 transition-colors hover:bg-midnight-700 disabled:opacity-70">
          {isSubmitting && <Loader2 aria-hidden="true" className="size-4 animate-spin" />}
          {isSubmitting ? 'Submitting…' : 'Join the network'}
        </button>
        <FormStatus result={result} fallbackEmail={firm.email} subject="Alumni network registration" sentMessage="Welcome back — you have joined the A&O alumni network." />
      </div>
    </form>
  );
}
