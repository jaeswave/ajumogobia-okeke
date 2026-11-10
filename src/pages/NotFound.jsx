import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import Container from '../components/common/Container.jsx';
import Button from '../components/common/Button.jsx';

const suggestions = [
  { label: 'The Firm', to: '/firm' },
  { label: 'Practice Areas', to: '/practices' },
  { label: 'Our People', to: '/people' },
  { label: 'Publications', to: '/publications' },
  { label: 'Contact', to: '/contact' },
];

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" noindex />
      <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-midnight-900 py-40 text-ivory-50">
        <span aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-0 select-none font-serif text-[clamp(14rem,40vw,36rem)] leading-[0.75] text-transparent [-webkit-text-stroke:1px_rgb(201_166_107/0.25)]">404</span>
        <Container wide className="relative">
          <p className="eyebrow eyebrow-light mb-8">Error 404</p>
          <h1 className="max-w-3xl text-[length:var(--text-display)] leading-[0.98] text-ivory-50">This page has <em className="text-bronze-300">moved on.</em></h1>
          <p className="mt-8 max-w-xl text-lg text-white/70">The page you were looking for may have been renamed as part of our new website. These links may help:</p>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {suggestions.map((s) => (
              <li key={s.to}><Link to={s.to} className="link-underline font-serif text-2xl text-ivory-50 hover:text-bronze-200">{s.label}</Link></li>
            ))}
          </ul>
          <div className="mt-14"><Button to="/" variant="bronze">Return home</Button></div>
        </Container>
      </section>
    </>
  );
}
