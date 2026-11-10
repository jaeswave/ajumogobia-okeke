import { firm } from '../data/firm.js';
import { offices } from '../data/offices.js';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.ajumogobiaokeke.com').replace(/\/$/, '');
export const SITE_NAME = firm.name;
export const DEFAULT_DESCRIPTION =
  'Ajumogobia & Okeke is a leading full-service commercial law firm in Nigeria, founded in 1984, with offices in Lagos, Abuja and Port Harcourt.';

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const pageTitle = (title) => (title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Commercial Law Firm in Nigeria since 1984`);

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: firm.name,
    alternateName: firm.shortName,
    url: SITE_URL,
    email: firm.email,
    telephone: firm.phone,
    foundingDate: String(firm.founded),
    founder: firm.founders.map((name) => ({ '@type': 'Person', name })),
    areaServed: 'NG',
    address: offices.map((o) => ({
      '@type': 'PostalAddress',
      streetAddress: o.lines.slice(0, -1).join(', '),
      addressLocality: o.city,
      addressCountry: 'NG',
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.to || '/'),
    })),
  };
}
