import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import SectionNav, { firmLinks } from '../components/common/SectionNav.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { values } from '../data/firm.js';
import { breadcrumbSchema } from '../utils/seo.js';

export default function Values() {
  return (
    <>
      <Seo title="Our Values" description={values.lead + ' ' + values.items.map((v) => v.title).join(', ') + '.'} image={values.image} schema={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'The Firm', to: '/firm' }, { label: 'Our Values', to: '/firm/values' }])} />
      <PageHero eyebrow="Values at A&O" title={values.heading} lead={values.lead} image={values.image} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'The Firm', to: '/firm' }, { label: 'Our Values' }]} />
      <SectionNav label="The Firm" links={firmLinks} />
      <section className="py-24 md:py-32">
        <Container wide>
          <ol className="border-t border-stone-300">
            {values.items.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06} className="group grid gap-4 border-b border-stone-300 py-10 transition-colors duration-700 hover:bg-ivory-100 md:grid-cols-12 md:items-center md:gap-8 md:py-14">
                <span className="font-serif text-2xl tabular-nums text-bronze-600 md:col-span-1 md:pl-4">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-[clamp(2.2rem,1.6rem+2.4vw,4rem)] leading-none transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-3 md:col-span-6">{v.title}</h2>
                <p className="text-lg leading-relaxed text-ink-500 md:col-span-4 md:col-start-9">{v.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-20 flex flex-col items-start justify-between gap-8 bg-midnight-900 p-10 text-ivory-50 md:flex-row md:items-center md:p-14">
            <p className="max-w-2xl font-serif text-3xl leading-snug">Our commitment to excellence starts with our people.</p>
            <Button to="/careers" variant="bronze">Careers at A&amp;O</Button>
          </Reveal>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
