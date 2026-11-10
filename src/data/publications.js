/**
 * Publications — the 10 most recent posts from https://www.ajumogobiaokeke.com/media/ (page 1 of 4).
 * Titles, authors, dates and external links are as published. Article bodies are
 * condensed from the originals; the full original text should be pasted in before launch
 * (see PROJECT_AUDIT.md). `practice` links each item to a related practice area.
 */
import { stock } from './images.js';

const legacy = 'https://www.ajumogobiaokeke.com/wp-content/uploads';
const ICLG = 'https://iclg.com/practice-areas/aviation-finance-and-leasing/nigeria';

export const publicationCategories = ['All', 'Aviation', 'Tax', 'Corporate', 'Litigation', 'Maritime', 'Regulatory'];

export const publications = [
  {
    slug: 'aviation-finance-leasing-2026',
    legacyPath: '/aviation_finance_leasing_2026/',
    title: 'Ajumogobia & Okeke Authors Nigerian Chapter in Aviation Finance & Leasing 2026',
    date: '2026-08-28',
    authors: ['patrick-a-osu'],
    contributors: ['Patrick Osu', 'Maryam Olaitan Bello'],
    category: 'Publications',
    topic: 'Aviation',
    practice: 'aviation',
    image: stock.aircraft,
    excerpt:
      'The Firm has authored the Nigeria chapter of the ICLG Aviation Finance & Leasing 2026 guide, covering financing structures, registration, security, enforcement and the Cape Town Convention.',
    body: [
      { type: 'p', text: 'Ajumogobia & Okeke is pleased to announce that it has authored the Nigeria chapter of Aviation Finance & Leasing 2026, part of the International Comparative Legal Guides (ICLG) series.' },
      { type: 'h2', text: 'The chapter' },
      { type: 'p', text: 'Written by Patrick Osu and Maryam Olaitan Bello, the chapter gives an overview of Nigeria’s legal and regulatory framework for aviation finance and aircraft leasing.' },
      { type: 'ul', items: ['Financing structures and taxation', 'Aircraft registration and deregistration', 'Security interests, enforcement and repossession', 'The Cape Town Convention', 'Insolvency', 'Emerging aircraft and engine technology'] },
      { type: 'h2', text: 'Our commitment' },
      { type: 'p', text: 'The publication forms part of the Firm’s continuing effort to give stakeholders in Nigeria’s aviation sector practical legal advice that accounts for cross-border issues.' },
      { type: 'p', text: 'Questions about the Firm’s Aviation & Aircraft Services practice may be sent to ao@ajumogobiaokeke.com.' },
    ],
    links: [{ label: 'Read the full chapter on ICLG', href: ICLG }],
  },
  {
    slug: 'aviation-finance-leasing-nigeria-2025',
    legacyPath: '/aviation-finance-leasing-nigeria-2025/',
    title: 'Aviation Finance & Leasing Nigeria 2025',
    date: '2025-10-03',
    authors: ['patrick-a-osu', 'oluwafunmilola-lawal'],
    contributors: ['Patrick Osu (Partner)', 'Oluwafunmilola Lawal (Associate)'],
    category: 'Publications',
    topic: 'Aviation',
    practice: 'aviation',
    image: stock.aircraft,
    excerpt:
      'Patrick Osu and Oluwafunmilola Lawal of the Aviation & Aircraft Services team analyse Nigeria’s evolving aviation finance framework for the ICLG 2025 guide.',
    body: [
      { type: 'p', text: 'Patrick Osu (Partner) and Oluwafunmilola Lawal (Associate) of the Firm’s Aviation & Aircraft Services team have written the Nigeria chapter of the ICLG Aviation Finance & Leasing 2025 guide.' },
      { type: 'h2', text: 'What the chapter covers' },
      { type: 'p', text: 'The contribution analyses Nigeria’s evolving aviation finance framework, including:' },
      { type: 'ul', items: ['Lease structuring', 'Cape Town Convention protections', 'Enforcement mechanics', 'Tax considerations', 'Regulatory challenges'] },
      { type: 'p', text: 'It also identifies opportunities for investors and lessors in the Nigerian domestic aviation market.' },
      { type: 'p', text: 'Questions about the Firm’s Aviation & Aircraft Services practice may be sent to ao@ajumogobiaokeke.com.' },
    ],
    links: [{ label: 'Read the full chapter on ICLG', href: ICLG }],
  },
  {
    slug: 'income-taxation-of-international-shipping-companies',
    legacyPath: '/income-taxation-of-international-shipping-companies-a-review-of-recent-developments/',
    title: 'Income Taxation of International Shipping Companies – A Review of Recent Developments',
    date: '2024-01-30',
    authors: ['kingsley-n-amaefule'],
    category: 'Publications',
    topic: 'Tax',
    practice: 'taxation-and-foreign-investment',
    image: stock.port,
    excerpt:
      'FIRS has issued back-tax assessments to international shipping companies dating from 2010. We review liability on outbound revenue, limitation periods, profit determination and double tax agreements.',
    body: [
      { type: 'h2', text: 'Introduction' },
      { type: 'p', text: 'The Federal Inland Revenue Service (FIRS) has issued tax assessments to international shipping companies for back taxes dating from 2010. Under Nigerian law, these companies are taxable on revenue from carrying passengers and goods out of Nigeria, but not on inbound carriage. Because shipping regulators must require proof of tax filing and tax clearance under section 14(6) of the Companies Income Tax Act (CITA) before these companies can operate or obtain permits, tax compliance directly affects whether a vessel can load cargo or passengers in Nigeria.' },
      { type: 'h2', text: 'Tax liability of foreign shipping companies' },
      { type: 'p', text: 'Section 14 of CITA treats the full profits or losses from carrying passengers, mail, livestock and goods loaded in Nigeria as derived from Nigeria when a foreign shipping company’s vessel calls at a Nigerian port. Those profits are therefore subject to Companies Income Tax.' },
      { type: 'h2', text: 'Back taxes and the limitation period' },
      { type: 'p', text: 'Under section 66(1) of CITA, the FIRS may assess tax or additional tax where a taxpayer has been under-assessed or not assessed at all. The general limitation period is six years — on that basis an assessment window of 2017 to 2023.' },
      { type: 'p', text: 'CITA allows the FIRS to reach further back where there is wilful default or neglect. Since section 55(1) requires companies to file self-assessment returns and pay tax within six months of the end of each accounting period, the FIRS may argue that failure to do so for 2010 to 2019 justifies assessments beyond six years.' },
      { type: 'h2', text: 'Determination of profits' },
      { type: 'p', text: 'Under section 14(2) of CITA, profits are computed according to whether the company’s home country computes profits in a similar way to the FIRS:' },
      { type: 'ul', items: ['Similar method — the FIRS applies the certified ratio of profit to global transport revenue to the company’s Nigerian-derived revenue.', 'Materially different method — the FIRS assesses a fair percentage of transport revenue derived from Nigeria on a best-of-judgment basis.'] },
      { type: 'h2', text: 'Double tax agreements' },
      { type: 'p', text: 'Double Tax Agreements (DTAs) may relieve double taxation, either by unconditional exemption or by reciprocal exemption tied to Nigerian shipping companies operating in the other contracting state. Since few or no Nigerian companies engage in international shipping, reciprocal full exemption is unlikely; generally only DTAs with unconditional relief would deliver full exemption.' },
      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: 'Shipping companies are liable on outbound revenue, and the FIRS can generally assess back taxes for six years, with exceptions permitting older assessments. Because tax compliance now determines whether these companies can operate in Nigeria, the FIRS should ensure its assessments align with Nigerian law.' },
    ],
    links: [],
  },
  {
    slug: 'aircraft-liens-and-detention-rights',
    legacyPath: '/aircraftliensanddetentionrights/',
    title: 'Aircraft Liens and Detention Rights (The Nigerian Chapter)',
    date: '2023-09-25',
    authors: ['patrick-a-osu'],
    contributors: ['H. Odein Ajumogobia SAN (chapter author)'],
    category: 'Publications',
    topic: 'Aviation',
    practice: 'aviation',
    image: stock.aircraft,
    excerpt:
      'The 2023 Nigerian chapter on aircraft liens — possessory, statutory detention, fuel and sellers’ liens — published by Thomson Reuters / Sweet & Maxwell.',
    body: [
      { type: 'p', text: 'Aviation transactions bring together equipment owners, lessors, lessees and service providers, and trust among them is central. Owners want their assets secured and returned; lessors want rent paid and the right to repossess; service providers want to be paid for their work. These competing interests create legal complexity and security concerns.' },
      { type: 'h2', text: 'Why aircraft liens matter' },
      { type: 'p', text: 'A lien allows a non-owner to retain possession of an aircraft until a debt is paid. Liens include possessory liens, statutory detention liens, liens for fuel expenses and sellers’ liens following a transfer of ownership. Understanding them supports legal compliance, risk management, financial security, lender confidence and successful leasing and financing transactions.' },
      { type: 'h2', text: 'The Nigerian chapter' },
      { type: 'p', text: 'The Firm’s 2023 Nigerian chapter on aircraft liens, published in July 2023 by Thomson Reuters / Sweet & Maxwell and written by H. Odein Ajumogobia SAN, is intended for legal practitioners and aviation participants in Nigeria. It covers the types of aircraft liens, their legal implications and enforcement strategies. It is reproduced with the permission of Sweet & Maxwell, a Thomson Reuters business.' },
    ],
    links: [{ label: 'Download the chapter (PDF)', href: `${legacy}/2019/08/Aircraft-Liens-and-Detention-Rights-The-Nigerian-Chapter.pdf` }],
  },
  {
    slug: 'the-impact-of-covid-19-on-immigration',
    legacyPath: '/the-impact-of-covid-19-on-immigration/',
    title: 'The Impact of COVID-19 on Immigration',
    date: '2020-07-01',
    authors: [],
    category: 'Publications',
    topic: 'Regulatory',
    practice: 'taxation-and-foreign-investment',
    image: stock.skyline,
    excerpt:
      'COVID-19 affected nearly every sector of the global economy. We consider the effect of travel restrictions on resident expatriates and prospective visitors to Nigeria.',
    body: [
      { type: 'p', text: 'COVID-19 affected nearly all sectors of the global economy. Governments responded by restricting both international and domestic travel to slow the spread of the virus, with a plain effect on resident expatriates and prospective visitors.' },
      { type: 'p', text: 'The full analysis was published as a downloadable paper on the Firm’s previous website.' },
    ],
    links: [],
    pendingFullText: true,
  },
  {
    slug: 'impact-of-covid-19-on-board-and-general-meetings',
    legacyPath: '/impact-of-covid-19-on-board-and-general-meetings-of-companies-in-nigeria/',
    title: 'Impact of COVID-19 on Board and General Meetings of Companies in Nigeria',
    date: '2020-04-22',
    authors: [],
    contributors: ['Anita O. Eguabor', 'Oluwatosin O. Okunrinboye', 'Osarieme Edokpolo'],
    category: 'Publications',
    topic: 'Corporate',
    practice: 'company-secretarial',
    image: stock.boardroom,
    excerpt:
      'Movement restrictions announced on 29 March 2020 directly affect companies’ ability to hold the board and general meetings required by CAMA.',
    body: [
      { type: 'h2', text: 'Statutory meeting obligations' },
      { type: 'p', text: 'The Companies and Allied Matters Act, CAP C20, LFN 2004 (“CAMA”) places statutory obligations on the members and directors of public and private companies, covering board meetings, annual general meetings and other meetings required by the Act.' },
      { type: 'h2', text: 'Government restrictions and their effect' },
      { type: 'p', text: 'The President’s broadcast of 29 March 2020 restricted movement and banned social gatherings in Lagos, Ogun and the Federal Capital Territory; several State Governors and the FCT Minister had announced similar measures earlier. These restrictions directly affect companies’ ability to hold the meetings CAMA requires.' },
      { type: 'p', text: 'The full analysis was published as a downloadable paper on the Firm’s previous website.' },
    ],
    links: [],
    pendingFullText: true,
  },
  {
    slug: 'covid-19-pandemic-liability-of-air-carriers',
    legacyPath: '/the-coronavirus-covid-19-pandemic-the-liability-of-air-carriers/',
    title: 'The Coronavirus (COVID-19) Pandemic – The Liability of Air Carriers',
    date: '2020-04-08',
    authors: [],
    category: 'Publications',
    topic: 'Aviation',
    practice: 'aviation',
    image: stock.aircraft,
    excerpt:
      'What duties do air carriers owe for passenger health and safety, and can a passenger sue for contracting COVID-19 on board?',
    body: [
      { type: 'h2', text: 'Background' },
      { type: 'p', text: 'The World Health Organisation declared COVID-19 a pandemic on 11 March 2020, severely disrupting economic and social life worldwide. Airlines were hit especially hard: flights were almost entirely and indefinitely suspended, and many countries closed their borders and airports.' },
      { type: 'h2', text: 'Liability concerns' },
      { type: 'p', text: 'Beyond financial strain that threatens many airlines’ survival, carriers may face liability for unknowingly carrying infected passengers across borders. The paper addresses four questions:' },
      { type: 'ul', items: ['What duties do air carriers owe for passengers’ health and safety?', 'What recourse do passengers have when denied boarding, or when flights are cancelled or suspended for public safety reasons?', 'Can a passenger successfully sue an airline for contracting COVID-19 from an infected fellow passenger?', 'How much responsibility does the law place on such a passenger?'] },
      { type: 'p', text: 'The full analysis was published as a downloadable paper on the Firm’s previous website.' },
    ],
    links: [],
    pendingFullText: true,
  },
  {
    slug: 'public-health-regulations-on-covid-19',
    legacyPath: '/public-health-regulations-on-covid-19-who-has-the-final-say-in-nigeria/',
    title: 'Public Health Regulations on COVID-19: Who Has the Final Say in Nigeria?',
    date: '2020-04-07',
    authors: [],
    contributors: ['Abodunde H. Are', 'Adenike N. Arogbonlo', 'J. Akinola Akinyanju'],
    category: 'Publications',
    topic: 'Regulatory',
    practice: 'litigation',
    image: stock.gavelBooks,
    excerpt:
      'Where the President and a State Governor both regulate under the Quarantine Act, whose regulations prevail?',
    body: [
      { type: 'h2', text: 'Federal and State regulations under the same statute' },
      { type: 'p', text: 'Where both the President and a State Governor make regulations under the same Federal statute, the constitutional rule for resolving conflicts between a Federal Act and a State Law (section 4(5) of the Constitution) does not apply: the Governor’s regulations are made not under a State Law but under the same Act of the National Assembly that authorises the President’s regulations.' },
      { type: 'h2', text: 'The Governor’s powers under section 8 of the Quarantine Act' },
      { type: 'p', text: 'Section 8 of the Quarantine Act allows a Governor to exercise the President’s powers for a State where the President has made no declaration or regulations for that State. Once a Governor acts under sections 2, 3, 4 and 8 without a corresponding presidential action, the Governor’s declaration and regulations take effect as law and cannot be reversed by the President except by court order.' },
      { type: 'h2', text: 'Later presidential regulations' },
      { type: 'p', text: 'If the President later issues regulations on similar matters for the same State, the Governor’s earlier regulations prevail in the event of conflict.' },
      { type: 'p', text: 'The full analysis was published as a downloadable paper on the Firm’s previous website.' },
    ],
    links: [],
    pendingFullText: true,
  },
  {
    slug: 'getting-the-deal-through-shipbuilding-2019',
    legacyPath: '/getting-the-deal-through-shipbuilding-2019/',
    title: 'Getting the Deal Through: Shipbuilding 2019',
    date: '2019-08-09',
    authors: ['babatunde-a-sodipo-san'],
    category: 'Publications',
    topic: 'Maritime',
    practice: 'maritime-shipping',
    image: stock.port,
    excerpt:
      'The Nigeria chapter of GTDT Shipbuilding 2019: foreign participation, repatriation of returns and the governing investment legislation.',
    body: [
      { type: 'p', text: 'This Nigeria chapter of the 2019 Getting the Deal Through guide on shipbuilding is reproduced with the publisher’s permission.' },
      { type: 'p', text: 'Nigeria’s shipbuilding sector welcomes foreign participation and investment, with no restrictions on foreign participation in the industry. Foreign investors may repatriate returns and proceeds in any convertible currency, provided the capital was brought into Nigeria under a Certificate of Capital Importation issued by a Nigerian bank.' },
      { type: 'p', text: 'The governing sources are the Nigerian Investment Promotion Commission Act and the Foreign Exchange (Monitoring and Miscellaneous Provisions) Act, Laws of the Federation of Nigeria 2004.' },
    ],
    links: [
      { label: 'Download the chapter (PDF)', href: `${legacy}/2019/08/edition-743-chapter-18-190809130200515-shipbuilding-2019-nigeria.pdf` },
      { label: 'Getting the Deal Through: Shipbuilding', href: 'https://gettingthedealthrough.com/area/49/shipbuilding/' },
    ],
  },
  {
    slug: 'getting-the-deal-through-product-liability-2019',
    legacyPath: '/getting-the-deal-through-product-liability-2019/',
    title: 'Getting the Deal Through: Product Liability 2019',
    date: '2019-08-09',
    authors: ['babatunde-a-sodipo-san'],
    category: 'Publications',
    topic: 'Litigation',
    practice: 'litigation',
    image: stock.gavelBooks,
    excerpt:
      'The Nigeria chapter of GTDT Product Liability 2019, beginning with the structure of Nigeria’s civil court system.',
    body: [
      { type: 'p', text: 'This Nigeria chapter of the 2019 Getting the Deal Through guide on product liability is reproduced with the permission of Law Business Research Ltd. The guide’s contributing editors were Gregory L Fowler and Simon Castley of Shook Hardy & Bacon LLP.' },
      { type: 'h2', text: 'The civil court system' },
      { type: 'p', text: 'Under the 1999 Constitution (as amended), the courts of record, in hierarchical order, are the Supreme Court, the Court of Appeal, the Federal High Court, the National Industrial Court, the State High Courts and the High Court of the Federal Capital Territory. Each of Nigeria’s 36 States and the FCT has a High Court in which civil cases are filed, and product liability claims are usually instituted in these courts.' },
    ],
    links: [
      { label: 'Download the chapter (PDF)', href: `${legacy}/2019/08/edition-767-chapter-18-190809130237968-product-liability-2019-nigeria.pdf` },
      { label: 'Getting the Deal Through: Product Liability', href: 'https://gettingthedealthrough.com/area/30/product-liability/' },
    ],
  },
];

export const getPublication = (slug) => publications.find((p) => p.slug === slug);
export const sortedPublications = () => [...publications].sort((a, b) => b.date.localeCompare(a.date));
