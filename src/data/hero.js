/**
 * Hero carousel — headlines and messages migrated from the four slides of the
 * existing homepage slider, with the brief's suggested headline as the opening slide.
 */
import { stock } from './images.js';

export const heroSlides = [
  {
    id: 'insight',
    kicker: 'Established 1984 · Lagos · Abuja · Port Harcourt',
    title: ['Legal Insight.', 'Commercial Perspective.', 'Enduring Impact.'],
    text: 'A leading full-service commercial law firm, advising multinational corporations, international banks, diplomatic missions and government entities for four decades.',
    cta: { label: 'Explore Our Firm', to: '/firm' },
    image: stock.towerUp,
    alt: 'Looking up at modern glass office towers',
    focal: 'center 35%',
  },
  {
    id: 'connections',
    kicker: 'About the Firm',
    title: ['Regional Connections,', 'Continental Outlook.'],
    text: 'Known for an unmatched knowledge of our clients’ business sectors and strong, long-standing contacts throughout the commercial sector.',
    cta: { label: 'Who We Are', to: '/firm' },
    image: stock.skyline,
    alt: 'A city skyline at dusk',
    focal: 'center 60%',
  },
  {
    id: 'direction',
    kicker: 'Client Care',
    title: ['Legal Direction.'],
    text: 'Our focus remains on our clients’ long-term and ultimate requirements in every matter we handle.',
    cta: { label: 'Our Client Care', to: '/firm/client-care' },
    image: stock.boardroom,
    alt: 'An empty boardroom with a long conference table',
    focal: 'center 50%',
  },
  {
    id: 'history',
    kicker: 'Our History',
    title: ['Partnership.', 'Innovation.', 'Solutions.'],
    text: 'After more than three decades, A&O remains one of the oldest continuing law partnerships in Nigeria.',
    cta: { label: 'Our History', to: '/firm/history' },
    image: stock.lawLibrary,
    alt: 'Shelves of leather-bound law reports in a library',
    focal: 'center 45%',
  },
  {
    id: 'expertise',
    kicker: 'Our Practice Areas',
    title: ['Superior Legal', 'Expertise.'],
    text: 'Our lawyers understand our clients’ industries well enough to give broad, knowledge-based advice.',
    cta: { label: 'Discover Our Expertise', to: '/practices' },
    image: stock.signing,
    alt: 'A pen resting on a document being signed',
    focal: 'center 50%',
  },
];
