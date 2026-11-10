import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import SmartImage from '../components/common/SmartImage.jsx';
import SectionNav, { firmLinks } from '../components/common/SectionNav.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { history } from '../data/firm.js';
import { breadcrumbSchema } from '../utils/seo.js';

export default function History() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 70%', 'end 60%'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <Seo title="Our History" description={history.lead} image={history.image} schema={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'The Firm', to: '/firm' }, { label: 'Our History', to: '/firm/history' }])} />
      <PageHero eyebrow="Since January 1984" title={history.heading} lead={history.lead} image={history.image} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'The Firm', to: '/firm' }, { label: 'Our History' }]} />
      <SectionNav label="The Firm" links={firmLinks} />

      <section className="py-24 md:py-32">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="font-serif text-[clamp(6rem,14vw,12rem)] leading-[0.8] text-bronze-500/90">1984</p>
            <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink-500">Founded by C. Nonyelum Okeke &amp; H. Odein Ajumogobia</p>
          </Reveal>
          <Reveal delay={0.1} className="prose-firm lg:col-span-7 lg:col-start-6">
            {history.paragraphs.map((p, i) => (
              <p key={i} className={i === history.paragraphs.length - 1 ? 'font-serif text-[1.7rem]! leading-snug! text-midnight-900' : ''}>{p}</p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="milestones-heading" className="bg-ivory-100 py-24 md:py-32">
        <Container>
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-6 justify-center">Milestones</p>
            <h2 id="milestones-heading" className="text-[length:var(--text-headline)] leading-[1.03]">Four decades of partnership</h2>
          </Reveal>
          <ol ref={timelineRef} className="relative mx-auto max-w-4xl">
            <span aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-px bg-stone-300 md:left-1/2" />
            <motion.span aria-hidden="true" style={{ scaleY: lineScale }} className="absolute bottom-0 left-4 top-0 w-px origin-top bg-bronze-500 md:left-1/2" />
            {history.milestones.map((m, i) => (
              <li key={m.year + m.title} className="relative grid gap-4 pb-16 pl-14 last:pb-0 md:grid-cols-2 md:gap-16 md:pl-0">
                <span aria-hidden="true" className="absolute left-[11px] top-3 size-[11px] rotate-45 border border-bronze-500 bg-ivory-100 md:left-[calc(50%-5px)]" />
                <Reveal className={i % 2 ? 'md:col-start-2' : 'md:text-right'}>
                  <p className="font-serif text-5xl text-bronze-600">{m.year}</p>
                </Reveal>
                <Reveal delay={0.08} className={i % 2 ? 'md:col-start-1 md:row-start-1 md:text-right' : ''}>
                  <h3 className="text-2xl">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-500">{m.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container wide className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <SmartImage src={history.image} alt="Law reports on library shelves" sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[16/10] w-full" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow mb-6">Sterling Towers, Marina</p>
            <p className="font-serif text-3xl leading-snug text-midnight-900">A three-city integrated networked IT system, comprehensive law libraries and competent paralegal and research support teams.</p>
          </Reveal>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
