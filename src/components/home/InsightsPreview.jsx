import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import FeaturedArticle from '../insights/FeaturedArticle.jsx';
import ArticleCard from '../insights/ArticleCard.jsx';
import { sortedPublications } from '../../data/publications.js';

export default function InsightsPreview() {
  const [featured, ...rest] = sortedPublications();
  return (
    <section aria-labelledby="insights-heading" className="bg-ivory-100 py-24 md:py-36">
      <Container wide>
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-8"><span className="tabular-nums">05</span> Publications &amp; Insights</p>
            <h2 id="insights-heading" className="text-[length:var(--text-headline)] leading-[1.02]">
              Providing cutting-edge <em className="text-bronze-600">legal insight.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><Button to="/publications" variant="outline">View all publications</Button></Reveal>
        </div>
        <Reveal><FeaturedArticle pub={featured} /></Reveal>
        <div className="mt-6 border-t border-stone-300">
          {rest.slice(0, 4).map((pub, i) => (
            <Reveal key={pub.slug} delay={i * 0.06}><ArticleCard pub={pub} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
