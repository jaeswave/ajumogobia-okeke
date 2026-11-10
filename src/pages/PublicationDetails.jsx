import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, Link2, Mail } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import Container from '../components/common/Container.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SmartImage from '../components/common/SmartImage.jsx';
import Portrait from '../components/common/Portrait.jsx';
import PendingNote from '../components/common/PendingNote.jsx';
import ArticleCard from '../components/insights/ArticleCard.jsx';
import NotFound from './NotFound.jsx';
import { getPublication, sortedPublications } from '../data/publications.js';
import { getPerson, fullName } from '../data/people.js';
import { getPractice } from '../data/practices.js';
import { formatDate } from '../utils/formatDate.js';
import { getAuthors, readingTime } from '../utils/publications.js';
import { absoluteUrl, breadcrumbSchema } from '../utils/seo.js';
import { imageUrl } from '../data/images.js';

const ease = [0.22, 1, 0.36, 1];

function Body({ blocks }) {
  return blocks.map((b, i) => {
    if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
    if (b.type === 'ul') return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
    return <p key={i}>{b.text}</p>;
  });
}

export default function PublicationDetails() {
  const { slug } = useParams();
  const pub = getPublication(slug);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  if (!pub) return <NotFound />;

  const authors = getAuthors(pub);
  const authorPeople = pub.authors.map(getPerson).filter(Boolean);
  const practice = getPractice(pub.practice);
  const all = sortedPublications();
  const related = all.filter((p) => p.slug !== pub.slug && (p.topic === pub.topic || p.practice === pub.practice)).slice(0, 3);
  const url = absoluteUrl(`/publications/${pub.slug}`);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copy this link:', url);
    }
  };

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: pub.title,
      datePublished: pub.date,
      description: pub.excerpt,
      image: imageUrl(pub.image, 1200),
      author: authors.map((a) => ({ '@type': a.to ? 'Person' : 'Organization', name: a.name })),
      publisher: { '@type': 'Organization', name: 'Ajumogobia & Okeke' },
      mainEntityOfPage: url,
    },
    breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Publications', to: '/publications' }, { label: pub.title, to: `/publications/${pub.slug}` }]),
  ];

  return (
    <>
      <Seo title={pub.title} description={pub.excerpt} image={pub.image} type="article" schema={schema} />
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-bronze-500" />

      <article>
        <header className="grain relative bg-midnight-900 pb-16 pt-36 text-ivory-50 md:pb-24 md:pt-44">
          <Container className="max-w-5xl!">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Publications', to: '/publications' }, { label: pub.topic }]} className="mb-10" />
            <p className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-bronze-300">
              <span>{pub.category}</span><span aria-hidden="true" className="h-px w-6 bg-current" /><span>{pub.topic}</span>
            </p>
            <h1 className="mt-6 overflow-hidden text-[clamp(2.25rem,1.5rem+3vw,4.5rem)] leading-[1.03] text-ivory-50">
              <motion.span className="block" initial={{ y: '40%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.1, ease }}>{pub.title}</motion.span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/70">
              <p>
                By{' '}
                {authors.map((a, i) => (
                  <span key={a.name}>
                    {a.to ? <Link to={a.to} className="text-ivory-50 underline decoration-bronze-400/50 underline-offset-4 hover:decoration-bronze-300">{a.name}</Link> : <span className="text-ivory-50">{a.name}</span>}
                    {i < authors.length - 1 && ', '}
                  </span>
                ))}
              </p>
              <time dateTime={pub.date}>{formatDate(pub.date)}</time>
              <span>{readingTime(pub)} min read</span>
            </div>
          </Container>
        </header>

        <Container className="max-w-5xl!">
          <SmartImage src={pub.image} alt="" priority width={1600} sizes="(min-width: 1024px) 64rem, 100vw" className="-mt-px aspect-[21/9] w-full" />
        </Container>

        <Container className="grid max-w-5xl! gap-12 py-16 md:py-20 lg:grid-cols-[1fr_14rem]">
          <div className="prose-firm max-w-[44rem]">
            <Body blocks={pub.body} />
            {pub.contributors?.length > 0 && (
              <p className="mt-10! border-t border-stone-200 pt-6 text-sm! text-ink-500">Contributors: {pub.contributors.join(', ')}</p>
            )}
            {pub.links.length > 0 && (
              <div className="mt-12 flex flex-col gap-3">
                {pub.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 border border-stone-300 px-6 py-5 no-underline! transition-colors hover:border-midnight-900 hover:bg-midnight-900 hover:text-ivory-50">
                    <span className="font-serif text-xl">{l.label}</span>
                    <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.25} />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            )}
            {pub.pendingFullText && (
              <PendingNote className="mt-10">The full text of this paper was published as a PDF on the previous website and should be re-attached before launch.</PendingNote>
            )}
          </div>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            {authorPeople.length > 0 && (
              <div>
                <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-400">Author{authorPeople.length > 1 ? 's' : ''}</p>
                <ul className="space-y-4">
                  {authorPeople.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/people/${p.slug}`} className="group flex items-center gap-4">
                        <Portrait person={p} className="size-14 shrink-0" />
                        <span><span className="block font-serif text-lg leading-tight text-midnight-900 group-hover:text-bronze-700">{fullName(p)}</span><span className="text-xs text-ink-500">{p.title}</span></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {practice && (
              <div>
                <p className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-400">Practice area</p>
                <Link to={`/practices/${practice.slug}`} className="font-serif text-xl text-midnight-900 underline decoration-bronze-500/50 underline-offset-4 hover:text-bronze-700">{practice.name}</Link>
              </div>
            )}
            <div>
              <p className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-400">Share</p>
              <div className="flex gap-2">
                <button type="button" onClick={copyLink} className="flex h-11 items-center gap-2 border border-stone-300 px-4 text-sm hover:border-midnight-900" aria-live="polite">
                  {copied ? <Check aria-hidden="true" className="size-4 text-emerald-700" /> : <Link2 aria-hidden="true" className="size-4" />}
                  {copied ? 'Copied' : 'Copy link'}
                </button>
                <a href={`mailto:?subject=${encodeURIComponent(pub.title)}&body=${encodeURIComponent(url)}`} aria-label="Share by email" className="grid size-11 place-items-center border border-stone-300 hover:border-midnight-900">
                  <Mail aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
            <Link to="/publications" className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-500 hover:text-midnight-900">
              <ArrowLeft aria-hidden="true" className="size-3.5" /> All publications
            </Link>
          </aside>
        </Container>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="more-heading" className="border-t border-stone-200 bg-ivory-100 py-20 md:py-28">
          <Container wide>
            <h2 id="more-heading" className="mb-10 text-[length:var(--text-title)]">Further reading</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((p) => <ArticleCard key={p.slug} pub={p} variant="card" />)}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
