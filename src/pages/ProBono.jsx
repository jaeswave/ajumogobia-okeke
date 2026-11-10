import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import SmartImage from '../components/common/SmartImage.jsx';
import Button from '../components/common/Button.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { proBono } from '../data/firm.js';
import { practices } from '../data/practices.js';
import { breadcrumbSchema } from '../utils/seo.js';

export default function ProBono() {
  return (
    <>
      <Seo title="Pro Bono" description={`${proBono.lead} ${proBono.paragraphs[0]}`} image={proBono.image} schema={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Pro Bono', to: '/pro-bono' }])} />
      <PageHero eyebrow="Pro Bono" title={proBono.heading} lead={proBono.lead} image={proBono.image} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Pro Bono' }]} />
      <section className="py-24 md:py-32">
        <Container wide className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <SmartImage src={proBono.image} alt="Two people shaking hands" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" />
          </Reveal>
          <Reveal delay={0.1} className="prose-firm lg:col-span-6 lg:col-start-7">
            {proBono.paragraphs.map((p, i) => <p key={i} className={i === 0 ? 'font-serif text-[1.65rem]! leading-snug! text-midnight-900' : ''}>{p}</p>)}
            <h2>Across many areas of law</h2>
            <p>Our lawyers bring the same expertise to pro bono matters that they bring to our commercial practice, including:</p>
            <ul>{practices.slice(0, 8).map((p) => <li key={p.slug}>{p.name}</li>)}</ul>
            <div className="mt-10"><Button to="/contact?practice=pro-bono" variant="primary">Enquire about pro bono support</Button></div>
          </Reveal>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
