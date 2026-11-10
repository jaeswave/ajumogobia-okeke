import { postJson } from './http.js';

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export const isContactConfigured = Boolean(ENDPOINT);

/** Submit an enquiry. Honeypot submissions are silently dropped. */
export async function sendEnquiry(values) {
  if (values.website) return { status: 'sent' };
  const { website, ...data } = values;
  return postJson(ENDPOINT, { ...data, source: 'website-contact-form', submittedAt: new Date().toISOString() });
}
