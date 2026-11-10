import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import PendingNote from '../components/common/PendingNote.jsx';
import LawyerGrid from '../components/people/LawyerGrid.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { people, peopleGroups } from '../data/people.js';
import { practices } from '../data/practices.js';
import { stock } from '../data/images.js';
import { cn } from '../utils/cn.js';

export default function People() {
  const [params, setParams] = useSearchParams();
  const group = params.get('group') || 'All';
  const practice = params.get('practice') || '';
  const q = params.get('q') || '';

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'All') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(
    () =>
      people.filter(
        (p) =>
          (group === 'All' || p.group === group) &&
          (!practice || p.practices.includes(practice)) &&
          (!q || `${p.name} ${p.focus} ${p.title}`.toLowerCase().includes(q.toLowerCase())),
      ),
    [group, practice, q],
  );

  return (
    <>
      <Seo title="Our People" description="Meet the partners and lawyers of Ajumogobia & Okeke, including two Senior Advocates of Nigeria." image={stock.suit} />
      <PageHero eyebrow="Our People" title="Counsel of distinction" lead="A multi-partner practice with diverse expertise at partner level and firm-wide, drawing on experience acquired in both the public and private sectors." image={stock.suit} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Our People' }]} />

      <section className="py-16 md:py-24">
        <Container wide>
          <div className="mb-14 flex flex-col gap-6 border-b border-stone-300 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div role="tablist" aria-label="Filter by role" className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1">
              {['All', ...peopleGroups].map((g) => (
                <button
                  key={g}
                  type="button"
                  role="tab"
                  aria-selected={group === g}
                  onClick={() => update('group', g)}
                  className={cn('shrink-0 border px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors', group === g ? 'border-midnight-900 bg-midnight-900 text-ivory-50' : 'border-stone-300 text-ink-700 hover:border-midnight-900')}
                >
                  {g}
                </button>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:w-[36rem]">
              <div>
                <label htmlFor="people-practice" className="mb-1 block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-500">Practice area</label>
                <select id="people-practice" value={practice} onChange={(e) => update('practice', e.target.value)} className="field-input cursor-pointer">
                  <option value="">All practice areas</option>
                  {practices.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="people-q" className="mb-1 block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-500">Name</label>
                <div className="relative">
                  <input id="people-q" type="search" value={q} onChange={(e) => update('q', e.target.value)} placeholder="Search by name" className="field-input pr-8" />
                  <Search aria-hidden="true" className="absolute right-0 top-1/2 size-4 -translate-y-1/2 text-ink-400" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
          <p className="sr-only" aria-live="polite">{filtered.length} people shown</p>
          <LawyerGrid people={filtered} />
          <PendingNote className="mt-20 max-w-3xl">
            The current website also lists Associate Partner, Practice Manager, Senior Associate and Associate groups whose members could not be retrieved. Profiles and approved portraits for the wider team will be added once supplied by the Firm.
          </PendingNote>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
