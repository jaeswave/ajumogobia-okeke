import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import SmartImage from '../components/common/SmartImage.jsx';
import SectionNav, { firmLinks } from '../components/common/SectionNav.jsx';
import RelatedLinks from '../components/common/RelatedLinks.jsx';
import Icon from '../components/common/Icon.jsx';
import OfficeLocations from '../components/home/OfficeLocations.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { whoWeAre, history, values, clientCare, differentiators } from '../data/firm.js';
import { stock } from '../data/images.js';
import { breadcrumbSchema, organizationSchema } from '../utils/seo.js';

const clients = ['Multinational corporations', 'Diplomatic missions', 'International banks', 'Major public companies', 'Family businesses', 'Individual entrepreneurs', 'Government entities'];
const crumbs = [{ label: 'Home', to: '/' }, { label: 'The Firm' }];

export default function About() {
  return (
    <>
      <Seo title="Who We Are" description={whoWeAre.lead} image={stock.boardroom} schema={[organizationSchema(), breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'The Firm', to: '/firm' }])]} />
      <PageHero eyebrow="The Firm · Est. 1984" title="Who we are" lead="Regional connections, continental outlook — a leading full-service commercial law firm with its head office in Lagos." image={stock.towerUp} breadcrumbs={crumbs} />
      <SectionNav label="The Firm" links={firmLinks} />

      <section className="py-24 md:py-32">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-[length:var(--text-headline)] leading-[1.03]">{whoWeAre.heading}</h2>
          </Reveal>
          <Reveal delay={0.1} className="prose-firm lg:col-span-6 lg:col-start-7">
            <p className="font-serif text-[1.65rem]! leading-snug! text-midnight-900">{whoWeAre.lead}</p>
            {whoWeAre.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="clients-heading" className="bg-midnight-900 py-24 text-ivory-50 md:py-32">
        <Container wide className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <SmartImage src={whoWeAre.image} alt="A boardroom" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow eyebrow-light mb-6">Who we act for</p>
              <h2 id="clients-heading" className="text-[length:var(--text-title)] leading-tight text-ivory-50">From multinationals to entrepreneurs, every client receives partner-level attention.</h2>
            </Reveal>
            <ul className="mt-10 border-t border-white/10">
              {clients.map((c, i) => (
                <Reveal as="li" key={c} delay={i * 0.05} className="flex items-baseline gap-6 border-b border-white/10 py-4">
                  <span className="font-serif text-sm tabular-nums text-bronze-300">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-2xl text-ivory-50">{c}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="pillars-heading" className="py-24 md:py-32">
        <Container wide>
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-6">What sets us apart</p>
            <h2 id="pillars-heading" className="text-[length:var(--text-headline)] leading-[1.03]">Built for complex, cross-border commercial work.</h2>
          </Reveal>
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.08} className="border-t border-stone-300 pt-8">
                <Icon name={d.icon} className="size-8 text-bronze-600" />
                <h3 className="mt-6 text-2xl">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <RelatedLinks
        title="Discover the Firm"
        items={[
          { label: 'Our History', to: '/firm/history', image: history.image, text: 'Founded in January 1984 and still one of Nigeria’s oldest continuing law partnerships.' },
          { label: 'Our Values', to: '/firm/values', image: values.image, text: 'Client satisfaction, quality, communication and capacity building.' },
          { label: 'Client Care', to: '/firm/client-care', image: clientCare.image, text: 'A partner and at least one associate responsible for every instruction.' },
        ]}
      />
      <OfficeLocations index={null} />
      <ContactCTA />
    </>
  );
}
