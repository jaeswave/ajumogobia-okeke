import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import PracticeGrid from '../components/practices/PracticeGrid.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { practices, practicesIntro } from '../data/practices.js';
import { stock } from '../data/images.js';
import { breadcrumbSchema } from '../utils/seo.js';

export default function PracticeAreas() {
  return (
    <>
      <Seo title="Practice Areas" description={practicesIntro.lead} image={stock.towerUp} schema={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Practice Areas', to: '/practices' }])} />
      <PageHero eyebrow="Practice Areas" title={practicesIntro.heading} lead={practicesIntro.lead} image={stock.towerUp} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Practice Areas' }]} />
      <section className="py-20 md:py-28">
        <Container wide>
          <div className="mb-16 grid gap-10 lg:grid-cols-12">
            {practicesIntro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1} className={i === 0 ? 'lg:col-span-6' : 'lg:col-span-5 lg:col-start-8'}>
                <p className={i === 0 ? 'font-serif text-[1.7rem] leading-snug text-midnight-900' : 'text-lg leading-relaxed text-ink-500'}>{p}</p>
              </Reveal>
            ))}
          </div>
          <PracticeGrid practices={practices} />
          <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-stone-300 pt-10 md:flex-row md:items-center">
            <p className="max-w-2xl font-serif text-2xl text-midnight-900">Our lawyers also give their time and expertise through the Firm’s pro bono programme.</p>
            <Button to="/pro-bono" variant="outline">Pro Bono</Button>
          </Reveal>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
