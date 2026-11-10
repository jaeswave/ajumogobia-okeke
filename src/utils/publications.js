import { getPerson, fullName } from '../data/people.js';

/** Byline for a publication: linked Firm authors, else the Firm itself. */
export function getAuthors(pub) {
  const authors = (pub.authors || []).map(getPerson).filter(Boolean);
  return authors.length ? authors.map((p) => ({ name: fullName(p), to: `/people/${p.slug}` })) : [{ name: 'Ajumogobia & Okeke', to: null }];
}

export const bylineText = (pub) => getAuthors(pub).map((a) => a.name).join(', ');

export function readingTime(pub) {
  const words = pub.body.reduce((n, b) => n + (b.text || '').split(/\s+/).length + (b.items || []).join(' ').split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 220));
}
