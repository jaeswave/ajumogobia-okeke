import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Clock, Mail, Phone } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import PendingNote from '../components/common/PendingNote.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';
import { offices, toTel, mapLink } from '../data/offices.js';
import { firm } from '../data/firm.js';
import { stock } from '../data/images.js';
import { breadcrumbSchema, organizationSchema } from '../utils/seo.js';

export default function Contact() {
  const [params] = useSearchParams();
  return (
    <>
      <Seo title="Contact Us" description="Contact Ajumogobia & Okeke in Lagos, Abuja or Port Harcourt. Call +234-1-2719368 or email ao@ajumogobiaokeke.com." image={stock.skyline} schema={[organizationSchema(), breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Contact', to: '/contact' }])]} />
      <PageHero compact eyebrow="Contact" title="Request an appointment" lead="Hi, you may just be browsing, but we are available to answer your legal questions." image={stock.skyline} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <section className="py-20 md:py-28">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-[length:var(--text-title)] leading-tight">Send us a message</h2>
            <p className="mb-12 mt-4 max-w-xl text-ink-500">Fields marked <span className="text-bronze-600">*</span> are required. We aim to respond within one working day.</p>
            <ContactForm defaultPractice={params.get('practice') || ''} />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-8 bg-midnight-900 p-8 text-ivory-50 md:p-10">
              <p className="eyebrow eyebrow-light">For consultation</p>
              <a href={`tel:${firm.phoneHref}`} className="flex items-center gap-4 font-serif text-3xl hover:text-bronze-200"><Phone aria-hidden="true" className="size-5 text-bronze-400" strokeWidth={1.25} />{firm.phone}</a>
              <a href={`mailto:${firm.email}`} className="flex items-center gap-4 text-lg text-white/85 hover:text-white"><Mail aria-hidden="true" className="size-5 text-bronze-400" strokeWidth={1.25} />{firm.email}</a>
              <p className="flex items-center gap-4 text-white/70"><Clock aria-hidden="true" className="size-5 text-bronze-400" strokeWidth={1.25} />{firm.hours}</p>
              <div className="border-t border-white/10 pt-6 text-sm text-white/60">
                Careers: <a href={`mailto:${firm.careersEmail}`} className="text-white/85 underline underline-offset-4 hover:text-white">{firm.careersEmail}</a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="offices-list" className="bg-ivory-100 py-20 md:py-28">
        <Container wide>
          <Reveal className="mb-12"><h2 id="offices-list" className="text-[length:var(--text-headline)] leading-[1.03]">Our offices</h2></Reveal>
          <div className="grid gap-px bg-stone-300 md:grid-cols-3">
            {offices.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.08} className="flex flex-col bg-ivory-100 p-8 md:p-10" id={o.slug}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bronze-600">{o.label}</p>
                <h3 className="mt-3 text-4xl">{o.city}</h3>
                <address className="mt-6 flex-1 not-italic leading-relaxed text-ink-700">{o.lines.map((l) => <span key={l} className="block">{l}</span>)}</address>
                <ul className="mt-6 space-y-2 text-sm">
                  {o.phones.map((p) => (
                    <li key={p}><a href={`tel:${toTel(p)}`} className="inline-flex items-center gap-2 text-ink-700 hover:text-bronze-700"><Phone aria-hidden="true" className="size-3.5 text-bronze-600" strokeWidth={1.5} />{p}</a></li>
                  ))}
                  <li><a href={`mailto:${o.email}`} className="inline-flex items-center gap-2 text-ink-700 hover:text-bronze-700"><Mail aria-hidden="true" className="size-3.5 text-bronze-600" strokeWidth={1.5} />{o.email}</a></li>
                </ul>
                <a href={mapLink(o.mapQuery)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-t border-stone-300 pt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-midnight-900 hover:text-bronze-700">
                  Get directions <ArrowUpRight aria-hidden="true" className="size-3.5" /><span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
                {o.discrepancy && <PendingNote className="mt-6">{o.discrepancy}</PendingNote>}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
