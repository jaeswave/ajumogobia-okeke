import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from './Container.jsx';
import Reveal from './Reveal.jsx';
import SmartImage from './SmartImage.jsx';

/** "Continue exploring" strip of image-led links. */
export default function RelatedLinks({ title = 'Continue exploring', items }) {
  return (
    <section aria-labelledby="related-heading" className="border-t border-stone-200 bg-ivory-100 py-20 md:py-28">
      <Container wide>
        <Reveal><h2 id="related-heading" className="mb-12 text-[length:var(--text-title)]">{title}</h2></Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.to} delay={i * 0.08}>
              <Link to={item.to} className="group block">
                <SmartImage src={item.image} alt="" width={900} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[3/2] w-full" imgClassName="transition-[opacity,transform]! duration-[1.4s]! group-hover:scale-105" />
                <div className="flex items-center justify-between border-b border-stone-300 py-5">
                  <span className="font-serif text-2xl text-midnight-900 transition-colors group-hover:text-bronze-700">{item.label}</span>
                  <ArrowRight aria-hidden="true" className="size-5 text-midnight-900 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
                </div>
                {item.text && <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.text}</p>}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
