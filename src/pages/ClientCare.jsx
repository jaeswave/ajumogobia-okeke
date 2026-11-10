import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import SmartImage from '../components/common/SmartImage.jsx';
import SectionNav, { firmLinks } from '../components/common/SectionNav.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { clientCare } from '../data/firm.js';
import { breadcrumbSchema } from '../utils/seo.js';

export default function ClientCare() {
  return (
    <>
      <Seo title="Client Care" description={clientCare.lead} image={clientCare.image} schema={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'The Firm', to: '/firm' }, { label: 'Client Care', to: '/firm/client-care' }])} />
      <PageHero eyebrow="Client Care" title={clientCare.heading} lead={clientCare.lead} image={clientCare.image} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'The Firm', to: '/firm' }, { label: 'Client Care' }]} />
      <SectionNav label="The Firm" links={firmLinks} />
      <section className="py-24 md:py-32">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <Reveal className="prose-firm lg:col-span-6">
            {clientCare.paragraphs.map((p, i) => <p key={i} className={i === 0 ? 'font-serif text-[1.65rem]! leading-snug! text-midnight-900' : ''}>{p}</p>)}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <SmartImage src={clientCare.image} alt="Lawyers in a client meeting" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" />
          </Reveal>
        </Container>
      </section>
      <section aria-labelledby="commitments-heading" className="bg-ivory-100 py-24 md:py-32">
        <Container wide>
          <Reveal className="mb-14">
            <p className="eyebrow mb-6">Our commitments</p>
            <h2 id="commitments-heading" className="text-[length:var(--text-headline)] leading-[1.03]">How every matter is managed</h2>
          </Reveal>
          <div className="grid gap-px bg-stone-300 sm:grid-cols-2 lg:grid-cols-4">
            {clientCare.commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="bg-ivory-100 p-8 md:p-10">
                <span className="font-serif text-4xl text-bronze-500">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 text-2xl">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
