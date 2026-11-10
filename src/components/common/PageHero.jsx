import { motion } from 'framer-motion';
import Container from './Container.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import SmartImage from './SmartImage.jsx';

const ease = [0.22, 1, 0.36, 1];

/** Standard dark editorial page header used on every inner page. */
export default function PageHero({ eyebrow, title, lead, image, imageAlt = '', breadcrumbs, aside, compact = false }) {
  return (
    <section className="grain relative isolate overflow-hidden bg-midnight-900 text-ivory-50">
      {image && (
        <motion.div className="absolute inset-0 -z-10" initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2.2, ease }}>
          <SmartImage src={image} alt={imageAlt} priority className="size-full" imgClassName="opacity-100" />
        </motion.div>
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight-950/95 via-midnight-900/80 to-midnight-900/40" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-midnight-950/70 to-transparent" />
      <Container wide className={compact ? 'pb-16 pt-36 md:pb-20 md:pt-44' : 'pb-20 pt-40 md:pb-28 md:pt-52'}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-10" />}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {eyebrow && (
              <motion.p className="eyebrow eyebrow-light mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                {eyebrow}
              </motion.p>
            )}
            <h1 className="overflow-hidden text-[length:var(--text-display)] leading-[0.98] text-ivory-50">
              <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.15 }}>
                {title}
              </motion.span>
            </h1>
            {lead && (
              <motion.p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.45 }}>
                {lead}
              </motion.p>
            )}
          </div>
          {aside && (
            <motion.div className="lg:col-span-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
              {aside}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
