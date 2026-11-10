import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { heroSlides } from '../../data/hero.js';
import { useCarousel } from '../../hooks/useCarousel.js';
import { cn } from '../../utils/cn.js';

const INTERVAL = 7500;
const ease = [0.22, 1, 0.36, 1];
const pad = (n) => String(n + 1).padStart(2, '0');

/**
 * Full-screen editorial hero carousel.
 * Movement: slow 1.8s cross-dissolve between slides, a long Ken Burns push on each
 * photograph, line-by-line masked headline reveals, and a scroll-linked parallax.
 * Autoplay pauses on hover, keyboard focus, hidden tab, or the pause control, and
 * all transforms are removed for visitors who prefer reduced motion.
 */
export default function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const pointerStart = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const { index, direction, go, next, prev, running } = useCarousel(heroSlides.length, {
    interval: INTERVAL,
    paused: hovered || focused || userPaused,
  });
  const slide = heroSlides[index];

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const onPointerDown = (e) => {
    pointerStart.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (pointerStart.current == null) return;
    const delta = e.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > 60) (delta < 0 ? next : prev)();
  };

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Introducing Ajumogobia & Okeke"
      className="grain relative isolate h-[100svh] min-h-[680px] overflow-hidden bg-midnight-950 text-ivory-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }}
    >
      {/* Photography layer — cross-dissolve + Ken Burns */}
      <motion.div className="absolute inset-0 -z-20 touch-pan-y" style={{ y: imageY }} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.3 : 1.8, ease: [0.45, 0, 0.25, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.16, x: `${direction * 1.5}%` }}
              animate={reduce ? undefined : { scale: 1.02, x: '0%' }}
              transition={{ duration: (INTERVAL + 2400) / 1000, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SmartImage src={slide.image} alt={slide.alt} priority={index === 0} position={slide.focal} sizes="100vw" width={1920} className="size-full" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Tonal overlays */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight-950/90 via-midnight-950/55 to-midnight-950/10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight-950/90 via-transparent to-midnight-950/50" />
      <div aria-hidden="true" className="hairline-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_right,black,transparent_60%)]" />

      <h1 className="sr-only">Ajumogobia &amp; Okeke — a leading full-service commercial law firm in Nigeria since 1984</h1>

      {/* Copy */}
      <motion.div className="relative flex h-full flex-col justify-center pb-40 pt-28" style={{ y: contentY, opacity: contentOpacity }}>
        <Container wide>
          <div
            className="max-w-[54rem]"
            aria-live={running ? 'off' : 'polite'}
            aria-atomic="true"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${heroSlides.length}`}
          >
            <AnimatePresence mode="wait">
              <motion.div key={slide.id} initial="enter" animate="show" exit="leave">
                <motion.p
                  className="eyebrow eyebrow-light mb-8"
                  variants={{ enter: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease, delay: 0.25 } }, leave: { opacity: 0, transition: { duration: 0.35 } } }}
                >
                  {slide.kicker}
                </motion.p>
                <h2 className="font-serif text-[length:var(--text-display)] font-normal leading-[0.98] tracking-[-0.015em] text-ivory-50">
                  {slide.title.map((line, i) => (
                    <span key={line} className="block overflow-hidden pb-[0.08em]">
                      <motion.span
                        className={cn('block', i === slide.title.length - 1 && slide.title.length > 1 && 'italic text-bronze-300')}
                        variants={{
                          enter: { y: reduce ? 0 : '108%', opacity: reduce ? 0 : 1 },
                          show: { y: '0%', opacity: 1, transition: { duration: 1.25, ease, delay: 0.35 + i * 0.13 } },
                          leave: { y: reduce ? 0 : '-40%', opacity: 0, transition: { duration: 0.45, ease: [0.55, 0, 1, 0.45] } },
                        }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h2>
                <motion.p
                  className="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
                  variants={{ enter: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease, delay: 0.8 } }, leave: { opacity: 0, transition: { duration: 0.3 } } }}
                >
                  {slide.text}
                </motion.p>
                <motion.div
                  className="mt-10 flex flex-wrap items-center gap-4"
                  variants={{ enter: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease, delay: 0.95 } }, leave: { opacity: 0, transition: { duration: 0.3 } } }}
                >
                  <Button to={slide.cta.to} variant="bronze">{slide.cta.label}</Button>
                  <Button to="/contact" variant="outline-light">Contact the Firm</Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </motion.div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-gradient-to-t from-midnight-950/60 to-transparent backdrop-blur-[2px]">
        <Container wide className="flex items-stretch justify-between gap-6">
          <ol className="hidden flex-1 grid-cols-5 md:grid" aria-label="Choose a slide">
            {heroSlides.map((s, i) => {
              const active = i === index;
              return (
                <li key={s.id} className="border-r border-white/10 first:border-l">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={active ? 'true' : undefined}
                    aria-label={`Slide ${i + 1}: ${s.kicker}`}
                    className="group relative flex h-24 w-full flex-col justify-center gap-1.5 px-5 text-left"
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-white/10">
                      <span
                        key={active ? `${s.id}-${index}` : s.id}
                        className="block h-full origin-left bg-bronze-400"
                        style={{
                          transform: active ? undefined : 'scaleX(0)',
                          animation: active ? `heroProgress ${INTERVAL}ms linear forwards` : 'none',
                          animationPlayState: running ? 'running' : 'paused',
                        }}
                      />
                    </span>
                    <span className={cn('font-serif text-lg tabular-nums transition-colors duration-500', active ? 'text-bronze-300' : 'text-white/40 group-hover:text-white/80')}>{pad(i)}</span>
                    <span className={cn('truncate text-[0.66rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-500', active ? 'text-ivory-50' : 'text-white/45 group-hover:text-white/80')}>
                      {s.kicker.split('·')[0]}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Mobile progress + counter */}
          <div className="flex flex-1 items-center gap-4 py-6 md:hidden">
            <span className="font-serif text-2xl tabular-nums text-bronze-300">{pad(index)}</span>
            <span className="relative h-px flex-1 bg-white/15">
              <span
                key={index}
                className="absolute inset-y-0 left-0 block w-full origin-left bg-bronze-400"
                style={{ animation: `heroProgress ${INTERVAL}ms linear forwards`, animationPlayState: running ? 'running' : 'paused' }}
              />
            </span>
            <span className="font-serif text-lg tabular-nums text-white/45">{pad(heroSlides.length - 1)}</span>
          </div>

          <div className="flex items-center gap-1 md:pl-4">
            <button type="button" onClick={prev} aria-label="Previous slide" className="grid size-12 place-items-center text-white/70 transition-colors hover:text-bronze-300">
              <ArrowLeft aria-hidden="true" className="size-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? 'Play slideshow' : 'Pause slideshow'}
              aria-pressed={userPaused}
              className="grid size-12 place-items-center border border-white/20 text-white/80 transition-colors hover:border-bronze-300 hover:text-bronze-300"
            >
              {userPaused ? <Play aria-hidden="true" className="size-4" strokeWidth={1.5} /> : <Pause aria-hidden="true" className="size-4" strokeWidth={1.5} />}
            </button>
            <button type="button" onClick={next} aria-label="Next slide" className="grid size-12 place-items-center text-white/70 transition-colors hover:text-bronze-300">
              <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.25} />
            </button>
          </div>
        </Container>
      </div>

      {/* Vertical scroll cue */}
      <div aria-hidden="true" className="absolute bottom-36 right-8 hidden flex-col items-center gap-4 lg:flex">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-white/50 [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-16 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollCue_2.4s_var(--ease-soft)_infinite] bg-bronze-400" />
        </span>
      </div>

      <style>{`
        @keyframes heroProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes scrollCue { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }
      `}</style>
    </section>
  );
}
