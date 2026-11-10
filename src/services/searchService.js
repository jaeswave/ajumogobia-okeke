import { people, fullName } from '../data/people.js';
import { practices } from '../data/practices.js';
import { publications } from '../data/publications.js';
import { pages } from '../data/pages.js';

/** Flat, pre-normalised index of everything a visitor can search for. */
const index = [
  ...people.map((p) => ({
    type: 'Person',
    title: fullName(p),
    subtitle: `${p.title} · ${p.focus}`,
    to: `/people/${p.slug}`,
    text: [p.summary, p.focus, ...(p.specialisms || []), ...(p.bio || [])].join(' '),
  })),
  ...practices.map((p) => ({
    type: 'Practice',
    title: p.name,
    subtitle: p.summary,
    to: `/practices/${p.slug}`,
    text: [p.summary, p.intro, ...p.services, ...p.sections.flatMap((s) => [s.heading, s.body, ...(s.items || [])])].join(' '),
  })),
  ...publications.map((p) => ({
    type: 'Publication',
    title: p.title,
    subtitle: p.excerpt,
    to: `/publications/${p.slug}`,
    text: [p.excerpt, p.topic, ...(p.contributors || []), ...p.body.flatMap((b) => [b.text, ...(b.items || [])])].join(' '),
  })),
  ...pages.map((p) => ({ type: 'Page', title: p.title, subtitle: p.description, to: p.to, text: p.keywords })),
].map((entry) => ({ ...entry, haystack: normalise(`${entry.title} ${entry.subtitle} ${entry.text}`), titleKey: normalise(entry.title) }));

function normalise(s = '') {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9&\s]/g, ' ');
}

export function search(query, limit = 30) {
  const terms = normalise(query).split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return [];
  return index
    .map((entry) => {
      let score = 0;
      for (const term of terms) {
        if (!entry.haystack.includes(term)) return null;
        if (entry.titleKey.includes(term)) score += 10;
        score += Math.min(entry.haystack.split(term).length - 1, 5);
      }
      return { ...entry, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export const searchSuggestions = ['Aviation', 'Arbitration', 'Oil & Gas', 'Tax', 'Sodipo', 'Private equity'];
