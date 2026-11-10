import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import Container from '../components/common/Container.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import Portrait from '../components/common/Portrait.jsx';
import PendingNote from '../components/common/PendingNote.jsx';
import Button from '../components/common/Button.jsx';
import LawyerProfile from '../components/people/LawyerProfile.jsx';
import LawyerCard from '../components/people/LawyerCard.jsx';
import NotFound from './NotFound.jsx';
import { getPerson, fullName, people } from '../data/people.js';
import { getPractice } from '../data/practices.js';
import { publications } from '../data/publications.js';
import { absoluteUrl, breadcrumbSchema } from '../utils/seo.js';
import { toTel } from '../data/offices.js';

const ease = [0.22, 1, 0.36, 1];

export default function LawyerDetails() {
  const { slug } = useParams();
  const person = getPerson(slug);
  if (!person) return <NotFound />;

  const name = fullName(person);
  const practices = person.practices.map(getPractice).filter(Boolean);
  const pubs = publications.filter((p) => p.authors.includes(person.slug));
  const colleagues = people.filter((p) => p.slug !== person.slug && p.group === 'Partners').slice(0, 3);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name,
      jobTitle: person.title,
      worksFor: { '@type': 'LegalService', name: 'Ajumogobia & Okeke' },
      ...(person.email && { email: person.email }),
      ...(person.portrait && { image: person.portrait }),
      url: absoluteUrl(`/people/${person.slug}`),
    },
    breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Our People', to: '/people' }, { label: name, to: `/people/${person.slug}` }]),
  ];

  return (
    <>
      <Seo title={`${name} — ${person.title}`} description={person.summary} type="profile" schema={schema} />
      <section className="grain relative overflow-hidden bg-midnight-900 pt-32 text-ivory-50 md:pt-40">
        <Container wide className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="pb-14 lg:col-span-7 lg:pb-20">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Our People', to: '/people' }, { label: person.name }]} className="mb-12" />
            <motion.p className="eyebrow eyebrow-light mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
              {person.title}
            </motion.p>
            <h1 className="overflow-hidden text-[clamp(2.75rem,1.8rem+4vw,5.5rem)] leading-[0.98] text-ivory-50">
              <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.1 }}>
                {person.name}
              </motion.span>
            </h1>
            {person.postNominals && <p className="mt-3 font-serif text-2xl italic text-bronze-300">{person.postNominals}</p>}
            <motion.p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.4 }}>
              {person.summary}
            </motion.p>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
              {person.email && (
                <li><a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 hover:text-bronze-300"><Mail aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} />{person.email}</a></li>
              )}
              {person.phone && (
                <li><a href={`tel:${toTel(person.phone)}`} className="inline-flex items-center gap-2 hover:text-bronze-300"><Phone aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} />{person.phone}</a></li>
              )}
              <li className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} />{person.office}</li>
            </ul>
          </div>
          <motion.div className="lg:col-span-4 lg:col-start-9" initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }} animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.4, ease, delay: 0.2 }}>
            <Portrait person={person} eager className="aspect-[4/5] w-full" />
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Link to="/people" className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-500 hover:text-midnight-900">
                <ArrowLeft aria-hidden="true" className="size-3.5" /> All people
              </Link>
              <p className="mt-10 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-400">Focus</p>
              <p className="mt-2 font-serif text-2xl leading-snug text-midnight-900">{person.focus}</p>
              <div className="mt-10">
                {person.email ? (
                  <Button href={`mailto:${person.email}`} variant="primary" icon={null}>Send an email</Button>
                ) : (
                  <Button to="/contact" variant="primary">Contact the Firm</Button>
                )}
              </div>
            </div>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5">
            {person.profilePending && (
              <PendingNote className="mb-10">
                A full profile, contact details and approved portrait for {person.name} are to be supplied by the Firm. The designation shown is taken from the Firm’s published articles.
              </PendingNote>
            )}
            <LawyerProfile person={person} practices={practices} publications={pubs} />
          </div>
        </Container>
      </section>

      {colleagues.length > 0 && (
        <section className="border-t border-stone-200 bg-ivory-100 py-20 md:py-28">
          <Container wide>
            <h2 className="mb-12 text-[length:var(--text-title)]">Partners</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {colleagues.map((p) => <LawyerCard key={p.slug} person={p} />)}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
