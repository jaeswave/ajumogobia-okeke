import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { firm } from '../../data/firm.js';
import { stock } from '../../data/images.js';

export default function ContactCTA({ title = 'Hi, you may just be browsing —', accent = 'but we are here to help.', text = 'We are available to answer your legal questions. Request an appointment with the Firm, or speak to us directly.' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-12%', '12%']);
  return (
    <section ref={ref} aria-labelledby="cta-heading" className="grain relative isolate overflow-hidden bg-midnight-900 py-28 text-ivory-50 md:py-40">
      <motion.div className="absolute -inset-y-[15%] inset-x-0 -z-10" style={{ y }}>
        <SmartImage src={stock.towerUp} alt="" className="size-full" sizes="100vw" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-midnight-950/80" />
      <Container wide className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <p className="eyebrow eyebrow-light mb-8">Request an appointment</p>
          <h2 id="cta-heading" className="text-[length:var(--text-headline)] leading-[1.02] text-ivory-50">
            {title} <em className="text-bronze-300">{accent}</em>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">{text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact" variant="bronze">Contact us</Button>
            <Button href={`mailto:${firm.email}`} variant="outline-light" icon={null}>Email the Firm</Button>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="space-y-4 border-l border-white/15 pl-8 lg:col-span-3 lg:col-start-10">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-bronze-300">For consultation</p>
          <a href={`tel:${firm.phoneHref}`} className="flex items-center gap-3 font-serif text-2xl hover:text-bronze-200"><Phone aria-hidden="true" className="size-5 text-bronze-400" strokeWidth={1.25} />{firm.phone}</a>
          <a href={`mailto:${firm.email}`} className="flex items-center gap-3 text-white/80 hover:text-white"><Mail aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.25} />{firm.email}</a>
          <p className="text-sm text-white/50">{firm.hours}</p>
        </Reveal>
      </Container>
    </section>
  );
}
