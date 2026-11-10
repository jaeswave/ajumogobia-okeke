import { motion } from 'framer-motion';
import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SmartImage from '../common/SmartImage.jsx';
import Counter from '../common/Counter.jsx';
import { whoWeAre, history } from '../../data/firm.js';
import { practices } from '../../data/practices.js';
import { offices } from '../../data/offices.js';

const ease = [0.22, 1, 0.36, 1];

// Every figure below is verifiable from the Firm's own website.
const facts = [
  { value: 1984, label: 'Year founded', format: (n) => String(n) },
  { value: offices.length, label: 'Offices in Nigeria', format: (n) => String(n).padStart(2, '0') },
  { value: practices.length, label: 'Practice areas', format: (n) => String(n).padStart(2, '0') },
  { value: 2, label: 'Senior Advocates of Nigeria among our partners', format: (n) => String(n).padStart(2, '0') },
];

const clipReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  show: { clipPath: 'inset(0% 0 0 0)', transition: { duration: 1.4, ease } },
};

export default function FirmIntroduction() {
  return (
    <section aria-labelledby="intro-heading" className="relative overflow-hidden bg-ivory-50 py-24 md:py-36">
      <span aria-hidden="true" className="pointer-events-none absolute -right-8 top-10 select-none font-serif text-[clamp(8rem,22vw,22rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgb(184_146_90/0.22)]">
        1984
      </span>
      <Container wide className="relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-8"><span className="tabular-nums">01</span> The Firm</p>
              <h2 id="intro-heading" className="text-[length:var(--text-headline)] leading-[1.02]">
                Four decades at the heart of <em className="text-bronze-600">Nigerian commerce.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-5 text-[1.05rem] leading-[1.8] text-ink-700">
              <p className="font-serif text-2xl leading-snug text-midnight-900">{history.lead}</p>
              <p>{whoWeAre.lead}</p>
              <p>{whoWeAre.paragraphs[2]}</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
              <Button to="/firm" variant="primary">About the Firm</Button>
              <Button to="/firm/history" variant="ghost">Our History</Button>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7">
            <motion.div variants={clipReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <SmartImage src={whoWeAre.image} alt="A boardroom prepared for a meeting" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5] w-full md:aspect-[5/6]" />
            </motion.div>
            <motion.div
              className="absolute -bottom-12 -left-6 hidden w-[46%] border-[10px] border-ivory-50 md:block lg:-left-20"
              variants={clipReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              <SmartImage src={history.image} alt="Law reports in the Firm’s library" sizes="20vw" width={800} className="aspect-[3/4] w-full" />
            </motion.div>
            <Reveal delay={0.4} className="absolute -right-2 top-10 hidden bg-midnight-900 px-7 py-6 text-ivory-50 md:block lg:-right-10">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-bronze-300">Head office</p>
              <p className="mt-2 font-serif text-xl">Sterling Towers,<br />20 Marina, Lagos</p>
            </Reveal>
          </div>
        </div>

        <dl className="mt-28 grid grid-cols-2 border-t border-stone-300 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="flex flex-col border-b border-stone-300 py-8 pr-6 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
              <dt className="order-2 mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-500">{f.label}</dt>
              <dd className="order-1 font-serif text-5xl text-midnight-900 md:text-6xl">
                <Counter to={f.value} format={f.format} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
