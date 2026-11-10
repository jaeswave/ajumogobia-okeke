import { postJson } from './http.js';

const NEWSLETTER = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
const ALUMNI = import.meta.env.VITE_ALUMNI_ENDPOINT;

export const isNewsletterConfigured = Boolean(NEWSLETTER);
export const isAlumniConfigured = Boolean(ALUMNI);

export async function subscribeToNewsletter({ email, website }) {
  if (website) return { status: 'sent' };
  return postJson(NEWSLETTER, { email, list: 'monthly-newsletter' });
}

export async function registerAlumnus({ website, ...values }) {
  if (website) return { status: 'sent' };
  return postJson(ALUMNI, values);
}
