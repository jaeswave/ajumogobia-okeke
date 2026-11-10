import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Container from '../common/Container.jsx';
import Reveal, { staggerChild, staggerParent } from '../common/Reveal.jsx';
import { recognition, recognitionIntro, directoryNames } from '../../data/awards.js';

export default function AwardsSection() {
  const marquee = [...directoryNames, ...directoryNames];
  return (
    <section aria-labelledby="awards-heading" className="grain relative overflow-hidden bg-midnight-950 py-24 text-ivory-50 md:py-32">
      <Container wide>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow eyebrow-light mb-8"><span className="tabular-nums">06</span> Recognition</p>
            <h2 id="awards-heading" className="text-[length:var(--text-headline)] leading-[1.02] text-ivory-50">
              Honoured by the profession, <em className="text-bronze-300">trusted by the market.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-white/60">{recognitionIntro}</p>
          </Reveal>
        </div>

        <motion.ol
          className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {recognition.map((r) => (
            <motion.li key={r.title + r.year} variants={staggerChild} className="group flex flex-col bg-midnight-950 p-8 transition-colors duration-700 hover:bg-midnight-900 md:p-10">
              <div className="flex items-center justify-between">
                <Award aria-hidden="true" className="size-7 text-bronze-400" strokeWidth={1.1} />
                <span className="font-serif text-2xl text-bronze-300">{r.year}</span>
              </div>
              <h3 className="mt-10 text-[1.6rem] leading-tight text-ivory-50">{r.title}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/60">{r.body}</p>
              <p className="mt-8 border-t border-white/10 pt-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/40">{r.source}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>

      <div className="mt-20 border-y border-white/10 py-8" aria-label="Directories and publishers that have featured the Firm or its partners">
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-16 pr-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marquee.map((name, i) => (
              <li key={`${name}-${i}`} aria-hidden={i >= directoryNames.length} className="flex items-center gap-16 whitespace-nowrap font-serif text-3xl italic text-white/35">
                {name}
                <span aria-hidden="true" className="text-bronze-500 not-italic">✦</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{'@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }'}</style>
    </section>
  );
}
