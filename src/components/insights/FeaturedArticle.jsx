import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { formatDate } from '../../utils/formatDate.js';
import { bylineText, readingTime } from '../../utils/publications.js';

export default function FeaturedArticle({ pub }) {
  return (
    <article className="group grid overflow-hidden bg-midnight-900 text-ivory-50 lg:grid-cols-2">
      <Link to={`/publications/${pub.slug}`} tabIndex={-1} aria-hidden="true" className="block">
        <SmartImage src={pub.image} alt="" width={1200} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[16/11] h-full w-full lg:aspect-auto lg:min-h-[30rem]" imgClassName="transition-[opacity,transform]! duration-[1.6s]! ease-[var(--ease-luxe)] group-hover:scale-[1.04]" />
      </Link>
      <div className="flex flex-col justify-center p-8 md:p-14">
        <p className="flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bronze-300">
          <span>Featured</span><span aria-hidden="true" className="h-px w-6 bg-current" /><span>{pub.topic}</span>
        </p>
        <h3 className="mt-6 text-[clamp(1.9rem,1.4rem+1.4vw,2.8rem)] leading-[1.08] text-ivory-50">
          <Link to={`/publications/${pub.slug}`} className="hover:text-bronze-200">{pub.title}</Link>
        </h3>
        <p className="mt-6 leading-relaxed text-white/70">{pub.excerpt}</p>
        <p className="mt-8 text-sm text-white/55">
          By <span className="text-ivory-50">{bylineText(pub)}</span> · <time dateTime={pub.date}>{formatDate(pub.date)}</time> · {readingTime(pub)} min read
        </p>
        <div className="mt-10"><Button to={`/publications/${pub.slug}`} variant="outline-light">Read more</Button></div>
      </div>
    </article>
  );
}
