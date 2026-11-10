/**
 * Office details from https://www.ajumogobiaokeke.com/contact/.
 * NOTE: the existing site is inconsistent — see `discrepancy` notes; these are flagged
 * for confirmation in CLIENT_APPROVAL_CHECKLIST.md.
 */
import { stock } from './images.js';

export const offices = [
  {
    slug: 'lagos',
    city: 'Lagos',
    label: 'Head Office',
    descriptor: 'The commercial capital',
    lines: ['2nd Floor, Sterling Towers', '20 Marina', 'Lagos Island, Lagos'],
    phones: ['+234 (0) 201 633 4491', '+234 (0) 201 633 4492', '+234-1-2719368'],
    email: 'ao@ajumogobiaokeke.com',
    mapQuery: 'Sterling Towers, 20 Marina, Lagos, Nigeria',
    image: stock.skyline,
    discrepancy:
      'Contact page lists +234 (0) 201 633 4491/4492; other pages list +234-1-2719368.',
  },
  {
    slug: 'abuja',
    city: 'Abuja',
    label: 'Abuja Office',
    descriptor: 'The seat of government',
    lines: ['No. 84 Kwame Nkrumah Crescent', 'Asokoro District', 'Abuja, FCT'],
    phones: ['+234 (0) 905 191 7220'],
    email: 'ao@ajumogobiaokeke.com',
    mapQuery: '84 Kwame Nkrumah Crescent, Asokoro, Abuja, Nigeria',
    image: stock.architecture,
    discrepancy:
      'The /firm page footer lists “UAC Complex, Central Business District”; the Contact page lists Asokoro.',
  },
  {
    slug: 'port-harcourt',
    city: 'Port Harcourt',
    label: 'Port Harcourt Office',
    descriptor: 'The centre of the oil and gas industry',
    lines: ['1st Floor, Sapphire House', '39 Wogu Street, D/Line', 'Port Harcourt, Rivers State'],
    phones: ['0704 200 0110', '0704 200 0112'],
    email: 'ao@ajumogobiaokeke.com',
    mapQuery: 'Sapphire House, 39 Wogu Street, D/Line, Port Harcourt, Nigeria',
    image: stock.port,
  },
];

export const toTel = (phone) => {
  const digits = phone.replace(/\(0\)/g, '').replace(/[^\d+]/g, '');
  return digits.startsWith('0') ? `+234${digits.slice(1)}` : digits;
};

export const mapLink = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
