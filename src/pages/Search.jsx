import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search as SearchIcon } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { search, searchSuggestions } from '../services/searchService.js';

const order = ['Person', 'Practice', 'Publication', 'Page'];
const labels = { Person: 'People', Practice: 'Practice areas', Publication: 'Publications', Page: 'Pages' };

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const results = useMemo(() => search(q, 60), [q]);
  const groups = order.map((type) => ({ type, items: results.filter((r) => r.type === type) })).filter((g) => g.items.length);

  return (
    <>
      <Seo title={q ? `Search: ${q}` : 'Search'} description="Search lawyers, practice areas and publications." noindex />
      <PageHero compact eyebrow="Search" title={q ? `Results for “${q}”` : 'Search the website'} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Search' }]} />
      <section className="py-16 md:py-24">
        <Container>
          <form role="search" onSubmit={(e) => e.preventDefault()} className="mb-14 flex items-center gap-4 border-b border-midnight-900 pb-3">
            <SearchIcon aria-hidden="true" className="size-6 text-bronze-500" strokeWidth={1.25} />
            <label htmlFor="search-page-q" className="sr-only">Search</label>
            <input id="search-page-q" type="search" value={q} onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })} placeholder="People, practices, publications…" className="w-full bg-transparent font-serif text-3xl text-midnight-900 placeholder:text-ink-400/70 focus:outline-none" />
          </form>
          <p className="sr-only" aria-live="polite">{q ? `${results.length} results` : ''}</p>
          {!q ? (
            <div className="flex flex-wrap gap-2">
              {searchSuggestions.map((s) => (
                <button key={s} type="button" onClick={() => setParams({ q: s })} className="border border-stone-300 px-4 py-2 text-sm hover:border-midnight-900">{s}</button>
              ))}
            </div>
          ) : groups.length ? (
            <div className="space-y-14">
              {groups.map((g) => (
                <section key={g.type} aria-labelledby={`g-${g.type}`}>
                  <h2 id={`g-${g.type}`} className="mb-4 flex items-baseline gap-3 text-2xl">{labels[g.type]} <span className="font-sans text-sm text-ink-400">{g.items.length}</span></h2>
                  <ul className="border-t border-stone-300">
                    {g.items.map((r) => (
                      <li key={r.to}>
                        <Link to={r.to} className="group flex items-center justify-between gap-6 border-b border-stone-300 py-5">
                          <span>
                            <span className="block font-serif text-2xl text-midnight-900 group-hover:text-bronze-700">{r.title}</span>
                            <span className="mt-1 line-clamp-2 block text-sm text-ink-500">{r.subtitle}</span>
                          </span>
                          <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-midnight-900" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <EmptyState title={`No results for “${q}”`}>Check the spelling, try a broader term such as a practice area, or <Link to="/contact" className="underline underline-offset-4">contact the Firm</Link> directly.</EmptyState>
          )}
        </Container>
      </section>
    </>
  );
}
