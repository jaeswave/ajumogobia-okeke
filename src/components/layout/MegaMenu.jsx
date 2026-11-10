import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { cn } from '../../utils/cn.js';

const ease = [0.22, 1, 0.36, 1];

export default function MegaMenu({ item, onNavigate }) {
  const { menu } = item;
  return (
    <Container wide className="grid grid-cols-12 gap-10 py-12">
      <motion.div className="col-span-3 flex flex-col justify-between border-r border-stone-200 pr-10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.1 }}>
        <div>
          <p className="eyebrow mb-5">{item.label}</p>
          <p className="font-serif text-[1.65rem] leading-snug text-midnight-900">{menu.intro}</p>
        </div>
        <Link to={item.to} onClick={onNavigate} className="group mt-8 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-midnight-900 hover:text-bronze-600">
          Overview
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </motion.div>

      <div className={cn('grid gap-10', menu.wide ? 'col-span-6 grid-cols-2' : 'col-span-5 grid-cols-2')}>
        {menu.columns.map((col, ci) => (
          <motion.div key={ci} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.16 + ci * 0.06 }}>
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-ink-400">{col.title}</p>
            <ul>
              {col.links.map((link) => (
                <li key={link.to + link.label}>
                  <NavLink
                    to={link.to}
                    end
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      cn(
                        'group flex items-center justify-between gap-4 border-b border-stone-200/80 py-3 text-[0.95rem] text-midnight-900 transition-colors duration-300 hover:text-bronze-600 focus-visible:text-bronze-600',
                        isActive && 'text-bronze-600',
                      )
                    }
                  >
                    <span className="transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:translate-x-1.5">{link.label}</span>
                    <ArrowRight aria-hidden="true" className="size-3.5 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={1.5} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div className={cn(menu.wide ? 'col-span-3' : 'col-span-4')} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease, delay: 0.12 }}>
        <SmartImage src={menu.image} alt="" width={800} sizes="25vw" className="h-full min-h-64">
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 font-serif text-xl italic text-ivory-50">Since 1984</p>
        </SmartImage>
      </motion.div>
    </Container>
  );
}
