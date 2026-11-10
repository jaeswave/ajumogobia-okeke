import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import Portrait from '../components/common/Portrait.jsx';
import Icon from '../components/common/Icon.jsx';
import PracticeDetailsBody from '../components/practices/PracticeDetails.jsx';
import ArticleCard from '../components/insights/ArticleCard.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import NotFound from './NotFound.jsx';
import { getPractice, practices } from '../data/practices.js';
import { getPerson, fullName } from '../data/people.js';
import { publications } from '../data/publications.js';
import { firm } from '../data/firm.js';
import { absoluteUrl, breadcrumbSchema } from '../utils/seo.js';

export default function PracticeDetails() {
  const { slug } = useParams();
  const practice = getPractice(slug);
  if (!practice) return <NotFound />;

  const i = practices.indexOf(practice);
  const prev = practices[(i - 1 + practices.length) % practices.length];
  const next = practices[(i + 1) % practices.length];
  const contacts = practice.contacts.map(getPerson).filter(Boolean);
  const related = publications.filter((p) => p.practice === practice.slug).slice(0, 3);

  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', serviceType: practice.name, description: practice.summary, provider: { '@type': 'LegalService', name: firm.name }, areaServed: 'NG', url: absoluteUrl(`/practices/${practice.slug}`) },
    breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Practice Areas', to: '/practices' }, { label: practice.name, to: `/practices/${practice.slug}` }]),
  ];

  return (
    <>
      <Seo title={`${practice.name} Lawyers in Nigeria`} description={practice.summary} image={practice.image} schema={schema} />
      <PageHero
        eyebrow={`Practice Area ${String(i + 1).padStart(2, '0')}`}
        title={practice.name}
        lead={practice.summary}
        image={practice.image}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Practice Areas', to: '/practices' }, { label: practice.name }]}
        aside={<Icon name={practice.icon} className="ml-auto hidden size-20 text-bronze-300/70 lg:block" />}
      />

      <section className="py-20 md:py-28">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PracticeDetailsBody practice={practice} />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10 lg:sticky lg:top-28">
              <Reveal className="bg-ivory-100 p-8 md:p-10">
                <h2 className="text-2xl">Our services</h2>
                <ul className="mt-6 divide-y divide-stone-300 border-y border-stone-300">
                  {practice.services.map((s) => (
                    <li key={s} className="py-3 text-[0.95rem] leading-snug text-ink-700">{s}</li>
                  ))}
                </ul>
              </Reveal>

              {contacts.length > 0 && (
                <Reveal delay={0.05}>
                  <h2 className="mb-6 text-2xl">Key contacts</h2>
                  <ul className="space-y-5">
                    {contacts.map((p) => (
                      <li key={p.slug}>
                        <Link to={`/people/${p.slug}`} className="group flex items-center gap-5">
                          <Portrait person={p} className="size-20 shrink-0" />
                          <span>
                            <span className="block font-serif text-xl text-midnight-900 group-hover:text-bronze-700">{fullName(p)}</span>
                            <span className="block text-sm text-ink-500">{p.title}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              <Reveal delay={0.1} className="bg-midnight-900 p-8 text-ivory-50 md:p-10">
                <p className="eyebrow eyebrow-light mb-4">For consultation</p>
                <p className="font-serif text-2xl leading-snug">Discuss a {practice.name.toLowerCase()} matter with our team.</p>
                <div className="mt-6 space-y-2 text-sm text-white/75">
                  <a href={`tel:${firm.phoneHref}`} className="flex items-center gap-3 hover:text-white"><Phone aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} />{firm.phone}</a>
                  <a href={`mailto:${firm.email}?subject=${encodeURIComponent(practice.name + ' enquiry')}`} className="flex items-center gap-3 hover:text-white"><Mail aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} />{firm.email}</a>
                </div>
                <div className="mt-8"><Button to={`/contact?practice=${practice.slug}`} variant="bronze">Request an appointment</Button></div>
              </Reveal>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-insights" className="bg-ivory-100 py-20 md:py-28">
          <Container wide>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 id="related-insights" className="text-[length:var(--text-title)]">Related insights</h2>
              <Button to={`/publications?topic=${encodeURIComponent(related[0].topic)}`} variant="ghost">All {related[0].topic.toLowerCase()} insights</Button>
            </div>
            <div className="border-t border-stone-300">
              {related.map((pub) => <ArticleCard key={pub.slug} pub={pub} />)}
            </div>
          </Container>
        </section>
      )}

      <nav aria-label="More practice areas" className="border-t border-stone-200">
        <div className="grid md:grid-cols-2">
          <Link to={`/practices/${prev.slug}`} className="group flex items-center gap-6 border-b border-stone-200 px-6 py-10 transition-colors hover:bg-ivory-100 md:border-b-0 md:border-r md:px-12">
            <ArrowLeft aria-hidden="true" className="size-5 shrink-0 text-bronze-600 transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.25} />
            <span><span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-400">Previous</span><span className="font-serif text-2xl text-midnight-900">{prev.name}</span></span>
          </Link>
          <Link to={`/practices/${next.slug}`} className="group flex items-center justify-end gap-6 px-6 py-10 text-right transition-colors hover:bg-ivory-100 md:px-12">
            <span><span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-400">Next</span><span className="font-serif text-2xl text-midnight-900">{next.name}</span></span>
            <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-bronze-600 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
          </Link>
        </div>
      </nav>
      <ContactCTA />
    </>
  );
}
