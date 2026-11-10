import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SmartImage from '../common/SmartImage.jsx';
import Icon from '../common/Icon.jsx';
import { practices, practicesIntro } from '../../data/practices.js';
import { cn } from '../../utils/cn.js';

const ease = [0.22, 1, 0.36, 1];

/** Interactive index: hovering or focusing a practice swaps the sticky preview panel. */
export default function PracticeAreasPreview() {
  const [active, setActive] = useState(0);
  const current = practices[active];

  return (
    <section aria-labelledby="practices-heading" className="grain relative overflow-hidden bg-midnight-900 py-24 text-ivory-50 md:py-36">
      <Container wide>
        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow eyebrow-light mb-8"><span className="tabular-nums">02</span> Areas of Expertise</p>
            <h2 id="practices-heading" className="text-[length:var(--text-headline)] leading-[1.02] text-ivory-50">
              Superior legal expertise, <em className="text-bronze-300">sector by sector.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-white/65">{practicesIntro.paragraphs[0]}</p>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <ol className="lg:col-span-6">
            {practices.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={Math.min(i * 0.03, 0.25)} amount={0.4} className="border-t border-white/10 last:border-b">
                <Link
                  to={`/practices/${p.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 md:py-6"
                >
                  <span className={cn('font-serif text-base tabular-nums transition-colors duration-500', active === i ? 'text-bronze-300' : 'text-white/35')}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={cn('font-serif text-[1.65rem] leading-tight transition-all duration-500 ease-[var(--ease-luxe)] md:text-[2.1rem]', active === i ? 'translate-x-2 text-ivory-50' : 'text-white/60 group-hover:text-white/90')}>
                    {p.name}
                  </span>
                  <ArrowUpRight aria-hidden="true" className={cn('size-5 transition-all duration-500', active === i ? 'rotate-45 text-bronze-300 opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-100 lg:opacity-60')} strokeWidth={1.25} />
                </Link>
                <p className="-mt-2 pb-5 pl-16 text-sm leading-relaxed text-white/55 lg:hidden">{p.summary}</p>
              </Reveal>
            ))}
          </ol>

          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={current.slug}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease }}
                  >
                    <SmartImage src={current.image} alt="" width={1000} sizes="40vw" className="size-full" />
                  </motion.div>
                </AnimatePresence>
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-9" aria-live="polite">
                  <AnimatePresence mode="wait">
                    <motion.div key={current.slug} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.55, ease }}>
                      <Icon name={current.icon} className="mb-5 size-8 text-bronze-300" />
                      <p className="font-serif text-3xl text-ivory-50">{current.name}</p>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">{current.summary}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <Button to={`/practices/${current.slug}`} variant="ghost-light">Explore {current.name}</Button>
                <Button to="/practices" variant="outline-light">All practice areas</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:hidden">
          <Button to="/practices" variant="outline-light">All practice areas</Button>
        </div>
      </Container>
    </section>
  );
}
