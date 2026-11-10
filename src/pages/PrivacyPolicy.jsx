import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import PendingNote from '../components/common/PendingNote.jsx';
import { privacyPolicy, firm } from '../data/firm.js';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy" description="How the Ajumogobia & Okeke website collects, uses and protects information." />
      <PageHero compact eyebrow="Legal" title="Privacy Policy" lead="This policy describes how information collected through this website is used." breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
      <section className="py-20 md:py-28">
        <Container wide className="grid gap-16 lg:grid-cols-12">
          <nav aria-label="On this page" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-400">On this page</p>
              <ol className="space-y-2 border-l border-stone-300">
                {privacyPolicy.sections.map((s) => (
                  <li key={s.heading}><a href={`#${slugify(s.heading)}`} className="-ml-px block border-l border-transparent pl-4 text-sm text-ink-700 hover:border-bronze-500 hover:text-midnight-900">{s.heading}</a></li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="prose-firm lg:col-span-7 lg:col-start-5">
            <PendingNote className="mb-10">Migrated from the existing website. The Firm should review this policy for compliance with the Nigeria Data Protection Act 2023 before launch.</PendingNote>
            {privacyPolicy.sections.map((s) => (
              <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28">
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
              </section>
            ))}
            <h2>Contact</h2>
            <p>Questions about this policy may be sent to <a href={`mailto:${firm.email}`}>{firm.email}</a>.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
