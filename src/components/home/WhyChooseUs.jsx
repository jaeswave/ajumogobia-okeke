import { motion } from 'framer-motion';
import Container from '../common/Container.jsx';
import Reveal, { staggerChild, staggerParent } from '../common/Reveal.jsx';
import Icon from '../common/Icon.jsx';
import { differentiators } from '../../data/firm.js';

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-ivory-100 py-24 md:py-36">
      <Container wide className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow mb-8"><span className="tabular-nums">03</span> Why A&amp;O</p>
              <h2 id="why-heading" className="text-[length:var(--text-headline)] leading-[1.02]">
                The firm of <em className="text-bronze-600">choice.</em>
              </h2>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink-500">
                What has kept clients returning to Ajumogobia &amp; Okeke for four decades.
              </p>
            </Reveal>
          </div>
        </div>
        <motion.ol
          className="grid gap-px bg-stone-300 sm:grid-cols-2 lg:col-span-8"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {differentiators.map((d, i) => (
            <motion.li key={d.title} variants={staggerChild} className="group relative bg-ivory-100 p-8 transition-colors duration-700 hover:bg-ivory-50 md:p-11">
              <div className="flex items-start justify-between">
                <Icon name={d.icon} className="size-9 text-bronze-600 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:-translate-y-1" />
                <span className="font-serif text-sm tabular-nums text-ink-400">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-10 text-[1.75rem] leading-tight">{d.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-500">{d.text}</p>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-bronze-500 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-x-100" />
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
