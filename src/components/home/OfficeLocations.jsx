import { useState } from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Container from '../common/Container.jsx';
import Reveal from '../common/Reveal.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { offices, toTel, mapLink } from '../../data/offices.js';
import { cn } from '../../utils/cn.js';

/** Three offices as an expanding panel row on desktop; stacked cards on mobile. */
export default function OfficeLocations({ index = '07', showHeading = true }) {
  const [active, setActive] = useState(0);
  return (
    <section aria-labelledby={showHeading ? 'offices-heading' : undefined} aria-label={showHeading ? undefined : 'Our offices'} className="bg-ivory-50 py-24 md:py-36">
      <Container wide>
        {showHeading && (
          <Reveal className="mb-16 max-w-3xl">
            <p className="eyebrow mb-8"><span className="tabular-nums">{index}</span> Our Offices</p>
            <h2 id="offices-heading" className="text-[length:var(--text-headline)] leading-[1.02]">
              Three cities. <em className="text-bronze-600">One partnership.</em>
            </h2>
          </Reveal>
        )}
        <div className="flex flex-col gap-4 lg:h-[34rem] lg:flex-row">
          {offices.map((o, i) => {
            const open = active === i;
            return (
              <Reveal
                key={o.slug}
                delay={i * 0.08}
                className={cn('relative overflow-hidden transition-[flex-grow] duration-[900ms] ease-[var(--ease-luxe)] lg:min-w-0', open ? 'lg:flex-[2.2]' : 'lg:flex-1')}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <article className="relative flex h-full min-h-[26rem] flex-col justify-end text-ivory-50">
                  <SmartImage src={o.image} alt="" width={1200} sizes="(min-width: 1024px) 50vw, 100vw" className="absolute! inset-0" />
                  <div aria-hidden="true" className={cn('absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/70 to-midnight-950/20 transition-opacity duration-700', open ? 'opacity-95' : 'opacity-100')} />
                  <div className="relative p-8 md:p-10">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-bronze-300">{o.label}</p>
                    <h3 className="mt-3 text-[2.6rem] leading-none text-ivory-50 md:text-5xl">{o.city}</h3>
                    <p className="mt-2 font-serif text-lg italic text-white/60">{o.descriptor}</p>
                    <div className={cn('grid transition-all duration-700 ease-[var(--ease-luxe)]', open ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[1fr] opacity-100 lg:mt-0 lg:grid-rows-[0fr] lg:opacity-0')}>
                      <div className="overflow-hidden">
                        <address className="text-[0.95rem] not-italic leading-relaxed text-white/80">
                          {o.lines.map((l) => <span key={l} className="block">{l}</span>)}
                        </address>
                        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          {o.phones.slice(0, 2).map((p) => (
                            <a key={p} href={`tel:${toTel(p)}`} className="inline-flex items-center gap-2 text-white/80 hover:text-bronze-300">
                              <Phone aria-hidden="true" className="size-3.5 text-bronze-400" strokeWidth={1.5} />{p}
                            </a>
                          ))}
                          <a href={`mailto:${o.email}`} className="inline-flex items-center gap-2 text-white/80 hover:text-bronze-300">
                            <Mail aria-hidden="true" className="size-3.5 text-bronze-400" strokeWidth={1.5} />{o.email}
                          </a>
                        </div>
                        <a href={mapLink(o.mapQuery)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bronze-300 hover:text-ivory-50">
                          View on map <ArrowUpRight aria-hidden="true" className="size-3.5" /><span className="sr-only"> (opens Google Maps in a new tab)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
