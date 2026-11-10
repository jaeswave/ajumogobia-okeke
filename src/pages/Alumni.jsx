import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import AlumniForm from '../components/forms/AlumniForm.jsx';
import { alumni } from '../data/firm.js';
import { breadcrumbSchema } from '../utils/seo.js';

export default function Alumni() {
  return (
    <>
      <Seo title="Alumni" description={`${alumni.heading} ${alumni.lead}`} image={alumni.image} schema={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Alumni', to: '/alumni' }])} />
      <PageHero eyebrow="Alumni" title={alumni.heading} lead={alumni.lead} image={alumni.image} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Alumni' }]} />
      <section className="py-24 md:py-32">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">Stay connected</p>
            <h2 className="text-[length:var(--text-title)] leading-tight">Register to receive:</h2>
            <ol className="mt-10 border-t border-stone-300">
              {alumni.benefits.map((b, i) => (
                <li key={b} className="flex items-baseline gap-6 border-b border-stone-300 py-5">
                  <span className="font-serif text-sm tabular-nums text-bronze-600">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-2xl text-midnight-900">{b}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1} className="bg-ivory-100 p-8 md:p-12 lg:col-span-6 lg:col-start-7">
            <h2 className="mb-10 text-3xl">Join our alumni network</h2>
            <AlumniForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
