import { Mail } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import SmartImage from '../components/common/SmartImage.jsx';
import Button from '../components/common/Button.jsx';
import PendingNote from '../components/common/PendingNote.jsx';
import { careers, values, firm } from '../data/firm.js';
import { breadcrumbSchema } from '../utils/seo.js';

export default function Careers() {
  const mailto = `mailto:${firm.careersEmail}?subject=${encodeURIComponent('Application — Ajumogobia & Okeke')}`;
  return (
    <>
      <Seo title="Careers" description={`${careers.lead} ${careers.paragraphs[0]}`} image={careers.image} schema={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Careers', to: '/careers' }])} />
      <PageHero eyebrow="Careers" title={careers.heading} lead={careers.lead} image={careers.image} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />

      <section className="py-24 md:py-32">
        <Container wide className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <Reveal className="prose-firm lg:col-span-6">
            {careers.paragraphs.map((p, i) => <p key={i} className={i === 0 ? 'font-serif text-[1.65rem]! leading-snug! text-midnight-900' : ''}>{p}</p>)}
            <h2>One team</h2>
            <ul>{careers.roles.map((r) => <li key={r}>{r}</li>)}</ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <SmartImage src={careers.image} alt="A bright, modern office interior" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="careers-values" className="bg-ivory-100 py-24 md:py-32">
        <Container wide>
          <Reveal className="mb-14">
            <p className="eyebrow mb-6">Values at A&amp;O</p>
            <h2 id="careers-values" className="text-[length:var(--text-headline)] leading-[1.03]">What we look for — and what we offer</h2>
          </Reveal>
          <div className="grid gap-px bg-stone-300 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07} className="bg-ivory-100 p-8 md:p-10">
                <span className="font-serif text-4xl text-bronze-500">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 text-2xl">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container wide>
          <Reveal className="grain relative overflow-hidden bg-midnight-900 p-10 text-ivory-50 md:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow eyebrow-light mb-6">How to apply</p>
                <h2 className="text-[length:var(--text-title)] leading-tight text-ivory-50">{careers.howToApply} <a href={mailto} className="text-bronze-300 underline decoration-bronze-300/40 underline-offset-8 hover:decoration-bronze-300">{firm.careersEmail}</a>.</h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
                <Button href={mailto} variant="bronze" icon={null}><Mail aria-hidden="true" className="size-4" /> Email your CV</Button>
              </div>
            </div>
          </Reveal>
          <PendingNote className="mt-10 max-w-3xl">No current vacancies are listed on the existing website. Specific openings, graduate trainee or internship programmes can be added here once confirmed by the Firm.</PendingNote>
        </Container>
      </section>
    </>
  );
}
