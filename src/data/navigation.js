import { practices } from './practices.js';
import { people } from './people.js';
import { stock } from './images.js';

export const primaryNav = [
  {
    label: 'Firm',
    to: '/firm',
    menu: {
      intro: 'Founded in 1984, A&O is one of Nigeria’s oldest continuing law partnerships.',
      image: stock.lawLibrary,
      columns: [
        {
          title: 'The Firm',
          links: [
            { label: 'Who We Are', to: '/firm' },
            { label: 'Our History', to: '/firm/history' },
            { label: 'Our Values', to: '/firm/values' },
            { label: 'Client Care', to: '/firm/client-care' },
          ],
        },
        {
          title: 'Community',
          links: [
            { label: 'Pro Bono', to: '/pro-bono' },
            { label: 'Alumni', to: '/alumni' },
            { label: 'Careers', to: '/careers' },
          ],
        },
      ],
    },
  },
  {
    label: 'Our People',
    to: '/people',
    menu: {
      intro: 'Partners who lead from the inner bar, the boardroom and the negotiating table.',
      image: stock.suit,
      columns: [
        {
          title: 'Partners',
          links: people.filter((p) => p.group === 'Partners').map((p) => ({ label: p.name + (p.postNominals ? ` ${p.postNominals.split(',')[0]}` : ''), to: `/people/${p.slug}` })),
        },
        {
          title: 'Browse',
          links: [
            { label: 'All People', to: '/people' },
            { label: 'Senior Associates', to: '/people?group=Senior%20Associates' },
            { label: 'Associates', to: '/people?group=Associates' },
          ],
        },
      ],
    },
  },
  {
    label: 'Practices',
    to: '/practices',
    menu: {
      intro: 'Full commercial legal services from Lagos, Abuja and Port Harcourt.',
      image: stock.towerUp,
      wide: true,
      columns: [
        { title: 'Practice Areas', links: practices.slice(0, 6).map((p) => ({ label: p.name, to: `/practices/${p.slug}` })) },
        { title: ' ', links: [...practices.slice(6).map((p) => ({ label: p.name, to: `/practices/${p.slug}` })), { label: 'Pro Bono', to: '/pro-bono' }] },
      ],
    },
  },
  { label: 'Publications & Insights', to: '/publications' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export const footerNav = {
  firm: [
    { label: 'Who We Are', to: '/firm' },
    { label: 'Our History', to: '/firm/history' },
    { label: 'Our Values', to: '/firm/values' },
    { label: 'Client Care', to: '/firm/client-care' },
    { label: 'Our People', to: '/people' },
  ],
  more: [
    { label: 'Publications & Insights', to: '/publications' },
    { label: 'Careers', to: '/careers' },
    { label: 'Pro Bono', to: '/pro-bono' },
    { label: 'Alumni', to: '/alumni' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Search', to: '/search' },
  ],
};
