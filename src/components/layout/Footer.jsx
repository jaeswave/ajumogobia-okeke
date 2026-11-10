import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Container from '../common/Container.jsx';
import Logo from '../common/Logo.jsx';
import NewsletterForm from '../forms/NewsletterForm.jsx';
import { footerNav } from '../../data/navigation.js';
import { practices } from '../../data/practices.js';
import { offices, toTel } from '../../data/offices.js';
import { firm } from '../../data/firm.js';

const socialLabels = { linkedin: 'LinkedIn', facebook: 'Facebook', x: 'X (Twitter)', instagram: 'Instagram' };

function FooterLinks({ title, links }) {
  return (
    <div>
      <h2 className="mb-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-bronze-400">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="link-underline text-[0.92rem] text-white/70 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const socials = Object.entries(firm.social).filter(([, url]) => url);
  return (
    <footer className="grain relative overflow-hidden bg-midnight-950 text-ivory-50">
      <Container wide className="relative pt-20 md:pt-28">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-8 max-w-md font-serif text-[1.65rem] leading-snug text-ivory-100">
              A leading full-service commercial law firm in Nigeria, advising local and international clients since 1984.
            </p>
            <div className="mt-8 space-y-2 text-sm text-white/70">
              <a href={`tel:${firm.phoneHref}`} className="flex items-center gap-3 hover:text-white">
                <Phone aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} /> {firm.phone}
              </a>
              <a href={`mailto:${firm.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail aria-hidden="true" className="size-4 text-bronze-400" strokeWidth={1.5} /> {firm.email}
              </a>
              <p className="pl-7 text-white/45">{firm.hours}</p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="font-serif text-2xl text-ivory-50">Subscribe to our monthly newsletter</h2>
            <p className="mb-6 mt-2 text-sm text-white/55">Legal developments and Firm publications, delivered to your inbox.</p>
            <NewsletterForm id="footer-newsletter" />
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-2"><FooterLinks title="The Firm" links={footerNav.firm} /></div>
          <div className="lg:col-span-4">
            <h2 className="mb-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-bronze-400">Practice Areas</h2>
            <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link to={`/practices/${p.slug}`} className="link-underline text-[0.92rem] text-white/70 transition-colors hover:text-white">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2"><FooterLinks title="Explore" links={footerNav.more} /></div>
          <div className="lg:col-span-4">
            <h2 className="mb-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-bronze-400">Offices</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
              {offices.map((o) => (
                <li key={o.slug}>
                  <p className="font-serif text-lg text-ivory-50">{o.city}</p>
                  <address className="mt-1 text-[0.82rem] not-italic leading-relaxed text-white/55">{o.lines.join(', ')}</address>
                  <a href={`tel:${toTel(o.phones[0])}`} className="mt-1 block text-[0.82rem] text-white/70 hover:text-white">{o.phones[0]}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 py-8 text-[0.78rem] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ajumogobia &amp; Okeke. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            {socials.map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                {socialLabels[key]} <ArrowUpRight aria-hidden="true" className="size-3" />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <p aria-hidden="true" className="pointer-events-none select-none overflow-hidden whitespace-nowrap text-center font-serif text-[22vw] leading-[0.75] text-white/[0.03]">
        A<em>&amp;</em>O
      </p>
    </footer>
  );
}
