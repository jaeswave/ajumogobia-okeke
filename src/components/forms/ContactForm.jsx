import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Field, { fieldA11y } from './Field.jsx';
import FormStatus from './FormStatus.jsx';
import { EMAIL_PATTERN } from './NewsletterForm.jsx';
import { sendEnquiry } from '../../services/contactService.js';
import { practices } from '../../data/practices.js';
import { offices } from '../../data/offices.js';
import { firm } from '../../data/firm.js';
import { cn } from '../../utils/cn.js';

export default function ContactForm({ defaultPractice = '' }) {
  const [result, setResult] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched', defaultValues: { practice: defaultPractice, office: '' } });

  const onSubmit = async (values) => {
    setResult(null);
    const res = await sendEnquiry(values);
    setResult(res);
    if (res.status === 'sent') reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-8 sm:grid-cols-2">
      <Field id="cf-name" label="Full name" required error={errors.name}>
        <input type="text" autoComplete="name" className="field-input" {...fieldA11y('cf-name', errors.name)} {...register('name', { required: 'Please tell us your name.', minLength: { value: 2, message: 'Please enter your full name.' } })} />
      </Field>
      <Field id="cf-email" label="Email address" required error={errors.email}>
        <input type="email" autoComplete="email" className="field-input" {...fieldA11y('cf-email', errors.email)} {...register('email', { required: 'Please enter your email address.', pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email address.' } })} />
      </Field>
      <Field id="cf-phone" label="Telephone" error={errors.phone}>
        <input type="tel" autoComplete="tel" className="field-input" {...fieldA11y('cf-phone', errors.phone)} {...register('phone', { pattern: { value: /^[+()\d\s-]{7,20}$/, message: 'Please enter a valid telephone number.' } })} />
      </Field>
      <Field id="cf-company" label="Company" error={errors.company}>
        <input type="text" autoComplete="organization" className="field-input" {...fieldA11y('cf-company', errors.company)} {...register('company')} />
      </Field>
      <Field id="cf-practice" label="Area of interest">
        <select className="field-input cursor-pointer" {...fieldA11y('cf-practice')} {...register('practice')}>
          <option value="">General enquiry</option>
          {practices.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
          <option value="pro-bono">Pro Bono</option>
        </select>
      </Field>
      <Field id="cf-office" label="Preferred office">
        <select className="field-input cursor-pointer" {...fieldA11y('cf-office')} {...register('office')}>
          <option value="">No preference</option>
          {offices.map((o) => <option key={o.slug} value={o.city}>{o.city}</option>)}
        </select>
      </Field>
      <Field id="cf-message" label="How can we help?" required error={errors.message} hint="Please do not include confidential information until we have confirmed we can act for you." className="sm:col-span-2">
        <textarea rows={5} className="field-input resize-y" {...fieldA11y('cf-message', errors.message, true)} {...register('message', { required: 'Please include a short message.', minLength: { value: 20, message: 'Please give us a little more detail (at least 20 characters).' }, maxLength: { value: 3000, message: 'Please keep your message under 3,000 characters.' } })} />
      </Field>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('website')} />
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
          <input type="checkbox" className="mt-1 size-4 shrink-0 accent-midnight-900" aria-invalid={errors.consent ? 'true' : 'false'} aria-describedby={errors.consent ? 'cf-consent-error' : undefined} {...register('consent', { required: 'Please confirm you have read the Privacy Policy.' })} />
          <span>I agree that Ajumogobia &amp; Okeke may use these details to respond to my enquiry, as described in the <Link to="/privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>.</span>
        </label>
        {errors.consent && <p id="cf-consent-error" className="mt-2 text-sm text-red-700">{errors.consent.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={isSubmitting} className={cn('inline-flex min-h-12 items-center gap-3 bg-midnight-900 px-8 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ivory-50 transition-colors hover:bg-midnight-700 disabled:opacity-70')}>
          {isSubmitting && <Loader2 aria-hidden="true" className="size-4 animate-spin" />}
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
        <FormStatus result={result} fallbackEmail={firm.email} subject="Website enquiry" sentMessage="Thank you — your message has been received. A member of the Firm will be in touch shortly." />
      </div>
    </form>
  );
}
