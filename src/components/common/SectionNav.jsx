import { NavLink } from 'react-router-dom';
import Container from './Container.jsx';
import { cn } from '../../utils/cn.js';

/** Secondary in-section navigation (e.g. Who We Are · History · Values · Client Care). */
export default function SectionNav({ label, links }) {
  return (
    <nav aria-label={label} className="sticky top-0 z-30 border-b border-stone-200 bg-ivory-50/95 backdrop-blur">
      <Container wide>
        <ul className="scrollbar-none flex gap-8 overflow-x-auto">
          {links.map((l) => (
            <li key={l.to} className="shrink-0">
              <NavLink
                to={l.to}
                end
                className={({ isActive }) =>
                  cn(
                    'relative block py-5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors',
                    isActive ? 'text-midnight-900 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-bronze-500' : 'text-ink-500 hover:text-midnight-900',
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export const firmLinks = [
  { label: 'Who We Are', to: '/firm' },
  { label: 'Our History', to: '/firm/history' },
  { label: 'Our Values', to: '/firm/values' },
  { label: 'Client Care', to: '/firm/client-care' },
];
