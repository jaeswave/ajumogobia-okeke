import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import LawyerCard from '../people/LawyerCard.jsx';
import { people } from '../../data/people.js';

export default function PeoplePreview() {
  const [lead, ...partners] = people.filter((p) => p.group === 'Partners');
  return (
    <section aria-labelledby="people-heading" className="bg-ivory-50 py-24 md:py-36">
      <Container wide>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-8"><span className="tabular-nums">04</span> Our People</p>
              <h2 id="people-heading" className="text-[length:var(--text-headline)] leading-[1.02]">
                Counsel who lead from the <em className="text-bronze-600">inner bar</em> and the boardroom.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-500">
                A multi-partner practice with diverse expertise at partner level and firm-wide, supported by competent paralegal and research teams.
              </p>
              <div className="mt-10"><Button to="/people" variant="outline">Meet our people</Button></div>
            </Reveal>
            <Reveal delay={0.15} className="mt-16 hidden lg:block">
              <LawyerCard person={lead} large />
            </Reveal>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:pt-40">
            <Reveal className="lg:hidden"><LawyerCard person={lead} /></Reveal>
            {partners.map((p, i) => (
              <Reveal key={p.slug} delay={0.1 + i * 0.12} className={i === 1 ? 'sm:mt-24' : ''}>
                <LawyerCard person={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
