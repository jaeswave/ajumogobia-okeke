import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/common/Container.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import FeaturedArticle from '../components/insights/FeaturedArticle.jsx';
import ArticleGrid from '../components/insights/ArticleGrid.jsx';
import NewsletterForm from '../components/forms/NewsletterForm.jsx';
import PendingNote from '../components/common/PendingNote.jsx';
import { publicationCategories, sortedPublications } from '../data/publications.js';
import { people } from '../data/people.js';
import { stock } from '../data/images.js';
import { cn } from '../utils/cn.js';

const PAGE_SIZE = 6;
const authorsWithWork = people.filter((p) => sortedPublications().some((pub) => pub.authors.includes(p.slug)));

export default function Publications() {
  const [params, setParams] = useSearchParams();
  const topic = params.get('topic') || 'All';
  const author = params.get('author') || '';
  const q = params.get('q') || '';
  const shown = Number(params.get('show')) || PAGE_SIZE;

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'All') next.delete(key);
    else next.set(key, value);
    if (key !== 'show') next.delete('show');
    setParams(next, { replace: true });
  };

  const all = sortedPublications();
  const filtering = topic !== 'All' || author || q;
  const featured = all[0];
  const filtered = useMemo(
    () =>
      all.filter(
        (p) =>
          (topic === 'All' || p.topic === topic) &&
          (!author || p.authors.includes(author)) &&
          (!q || `${p.title} ${p.excerpt} ${(p.contributors || []).join(' ')}`.toLowerCase().includes(q.toLowerCase())),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic, author, q],
  );
  const list = filtering ? filtered : filtered.slice(1);
  const visible = list.slice(0, shown);

  return (
    <>
      <Seo title="Publications & Insights" description="Legal publications, guide chapters and commentary on Nigerian law from the lawyers of Ajumogobia & Okeke." image={stock.lawLibrary} />
      <PageHero eyebrow="Publications & Insights" title="Providing cutting-edge legal advice" lead="Chapters, commentary and updates from our lawyers on developments in Nigerian commercial law." image={stock.lawLibrary} breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Publications & Insights' }]} />

      <section className="py-16 md:py-24">
        <Container wide>
          {!filtering && <Reveal className="mb-20"><FeaturedArticle pub={featured} /></Reveal>}

          <div className="mb-12 flex flex-col gap-8 border-b border-stone-300 pb-8 xl:flex-row xl:items-end xl:justify-between">
            <div role="tablist" aria-label="Filter by topic" className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1">
              {publicationCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={topic === c}
                  onClick={() => update('topic', c)}
                  className={cn('shrink-0 border px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors', topic === c ? 'border-midnight-900 bg-midnight-900 text-ivory-50' : 'border-stone-300 text-ink-700 hover:border-midnight-900')}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:w-[36rem]">
              <div>
                <label htmlFor="pub-author" className="mb-1 block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-500">Author</label>
                <select id="pub-author" value={author} onChange={(e) => update('author', e.target.value)} className="field-input cursor-pointer">
                  <option value="">All authors</option>
                  {authorsWithWork.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="pub-q" className="mb-1 block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-500">Keyword</label>
                <div className="relative">
                  <input id="pub-q" type="search" value={q} onChange={(e) => update('q', e.target.value)} placeholder="Search publications" className="field-input pr-8" />
                  <Search aria-hidden="true" className="absolute right-0 top-1/2 size-4 -translate-y-1/2 text-ink-400" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          <p className="mb-8 text-sm text-ink-500" aria-live="polite">
            Showing {visible.length} of {list.length} {filtering ? 'matching ' : 'more '}publication{list.length === 1 ? '' : 's'}
          </p>
          <ArticleGrid items={visible} onReset={() => setParams({}, { replace: true })} />

          {visible.length < list.length && (
            <div className="mt-16 flex justify-center">
              <Button variant="outline" icon={null} onClick={() => update('show', String(shown + PAGE_SIZE))}>Load more publications</Button>
            </div>
          )}

          <PendingNote className="mt-16 max-w-3xl">
            The 10 most recent publications have been migrated. The existing archive has three further pages (News, Notable Cases and Resources categories) awaiting export from the current website.
          </PendingNote>
        </Container>
      </section>

      <section className="bg-midnight-900 py-20 text-ivory-50 md:py-24">
        <Container wide className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="eyebrow eyebrow-light mb-6">Monthly newsletter</p>
            <h2 className="text-[length:var(--text-title)] leading-tight text-ivory-50">Developments in the law, circulated to clients and legal institutions.</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8"><NewsletterForm id="publications-newsletter" /></div>
        </Container>
      </section>
    </>
  );
}
