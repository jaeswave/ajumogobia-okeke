import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';

function Block({ title, items, ordered = false }) {
  if (!items?.length) return null;
  const List = ordered ? 'ol' : 'ul';
  return (
    <Reveal className="border-t border-stone-300 py-10 md:grid md:grid-cols-12 md:gap-8">
      <h2 className="mb-5 text-2xl md:col-span-4 md:mb-0">{title}</h2>
      <List className="space-y-3 md:col-span-8">
        {items.map((item) => (
          <li key={item} className="relative pl-6 leading-relaxed text-ink-700 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-bronze-500">{item}</li>
        ))}
      </List>
    </Reveal>
  );
}

/** Structured body of a lawyer profile — biography then credential blocks. */
export default function LawyerProfile({ person, practices, publications }) {
  return (
    <div>
      {person.bio?.length > 0 && (
        <Reveal className="prose-firm pb-12">
          {person.bio.map((p, i) => <p key={i} className={i === 0 ? 'font-serif text-[1.55rem]! leading-snug! text-midnight-900' : ''}>{p}</p>)}
        </Reveal>
      )}
      <Block title="Notable matters" items={person.matters} />
      <Block title="Areas of focus" items={person.specialisms} />
      <Block title="Experience" items={person.experience} />
      <Block title="Education" items={person.education} />
      <Block title="Memberships" items={person.memberships} />
      <Block title="Honours & recognition" items={person.honours} />
      <Block title="Prizes" items={person.prizes} />
      <Block title="Publications" items={person.publications} />

      {practices.length > 0 && (
        <Reveal className="border-t border-stone-300 py-10 md:grid md:grid-cols-12 md:gap-8">
          <h2 className="mb-5 text-2xl md:col-span-4 md:mb-0">Practice areas</h2>
          <ul className="flex flex-wrap gap-2 md:col-span-8">
            {practices.map((p) => (
              <li key={p.slug}>
                <Link to={`/practices/${p.slug}`} className="inline-flex items-center gap-2 border border-stone-300 px-4 py-2 text-sm text-midnight-900 transition-colors hover:border-midnight-900 hover:bg-midnight-900 hover:text-ivory-50">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {publications.length > 0 && (
        <Reveal className="border-t border-stone-300 py-10 md:grid md:grid-cols-12 md:gap-8">
          <h2 className="mb-5 text-2xl md:col-span-4 md:mb-0">Insights</h2>
          <ul className="md:col-span-8">
            {publications.map((pub) => (
              <li key={pub.slug} className="border-b border-stone-200 last:border-0">
                <Link to={`/publications/${pub.slug}`} className="group flex items-start justify-between gap-6 py-4">
                  <span className="font-serif text-xl leading-snug text-midnight-900 group-hover:text-bronze-700">{pub.title}</span>
                  <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-ink-400 group-hover:text-bronze-600" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  );
}
