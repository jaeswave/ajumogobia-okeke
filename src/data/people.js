/**
 * People — migrated from https://www.ajumogobiaokeke.com/people and individual profiles.
 * Only people named by the firm's own website are listed. Associates named in firm
 * publications are included with the designation used there and a pending profile.
 * The existing site also has empty listing groups (Associate Partners, Practice Manager,
 * Senior Associates, Associates) whose members could not be retrieved — see PROJECT_AUDIT.md.
 */
import { firmAssets } from './images.js';

export const peopleGroups = ['Partners', 'Senior Associates', 'Associates'];

export const people = [
  {
    slug: 'h-odein-ajumogobia-san',
    name: 'H. Odein Ajumogobia',
    postNominals: 'SAN, OFR',
    title: 'Founding Partner',
    group: 'Partners',
    office: 'Lagos',
    email: 'odein@ajumogobiaokeke.com',
    phone: '+234-1-2719368',
    portrait: firmAssets.portraits.odein,
    focus: 'Energy & Natural Resources · Arbitration',
    practices: ['oil-gas', 'mining', 'litigation', 'aviation'],
    summary:
      'A founding partner of the Firm, Senior Advocate of Nigeria and former member of the ICC International Court of Arbitration, he leads the Firm’s Energy and Natural Resources practice.',
    bio: [
      'Mr. Ajumogobia is a founding partner of the Firm. He was called to the Nigerian Bar in 1979 and admitted to the inner bar as a Senior Advocate of Nigeria in 2003. Since the establishment of the Firm in 1984, he has been involved in numerous high-value corporate and commercial transactions.',
      'In later years — before, and especially since, heading Nigeria’s Energy and Petroleum Ministries — he has specialised in Energy and Natural Resources law, and currently leads that practice group in the Firm, leveraging the considerable esteem in which he is held in the industry and in government circles for the benefit of the Firm’s clients.',
      'His rich experience as a negotiator and litigator of commercial disputes gives him an edge in advising clients on complex commercial transactions, building consensus and averting avoidable disputes that tend to delay completion. He was lead defence counsel for an international oil company in multi-party oil spill litigation spanning all the Niger Delta states.',
      'Besides litigation, Mr. Ajumogobia is highly regarded in alternative dispute resolution, especially arbitration. He served two terms (2001 – 2006) as a member of the ICC International Court of Arbitration, Paris, and has been a Fellow of the Chartered Institute of Arbitrators (UK) since 1996. He is Chairman of the Nigeria Natural Resource Charter (NNRC).',
    ],
    specialisms: [
      'Commercial litigation and arbitration',
      'Environmental law and oil pollution litigation',
      'Transportation law, with a specific interest in aviation law',
    ],
    education: [
      'Harvard Law School, Cambridge, Massachusetts — LL.M., 1988',
      'Nigerian Law School — B.L., 1979',
      'University of Lagos — LL.B. (Hons), 1978',
    ],
    experience: [
      'Partner, Ajumogobia & Okeke, 1987 – present',
      'Minister for Foreign Affairs, 2009 – 2011',
      'Minister of State for Petroleum Resources, 2007 – 2009',
      'Attorney General and Commissioner for Justice, Rivers State, 2003 – 2007',
      'Nigerian LNG Consultants, 1983',
    ],
    memberships: [
      'Fellow, Chartered Institute of Arbitrators (London)',
      'Nigerian Bar Association — National Executive Committee',
      'Nigerian Society of International Law',
      'International Bar Association',
      'American Society of International Law',
      'American Bar Association (Associate Member)',
    ],
    honours: [
      'Officer of the Order of the Federal Republic of Nigeria (OFR), 2010',
      'Senior Advocate of Nigeria (SAN), 2003',
      'Member, ICC International Court of Arbitration and ICC Commission on Arbitration, 2001 – 2006',
      'Honorary Member, International Arbitration Court, Rio de Janeiro (since 2002)',
      'Consultant, World Intellectual Property Organization — franchising guide for developing countries, Geneva (1992)',
      'University of Lagos Law Society award for distinction in the Legal Profession (1993)',
      'Special mention, Chambers International Law Directory',
      'Listed in Who’s Who Legal — International Who’s Who of Oil & Gas Lawyers (2004)',
    ],
    prizes: [
      'Graduated top of the class; Faculty Prize for best results in the Final Degree Examination',
      'Semi-finalist, Philip C. Jessup International Law Moot Court Competition (1978)',
      'Federal Government of Nigeria Merit Award for Academic Excellence (1975 – 1976)',
    ],
    publications: [
      'Nigeria chapters in Aircraft Finance (Registration, Security and Enforcement), eds. McBain & Harmes (Longman, 1990)',
      'Enforcement of Foreign Judgments, eds. Louis Garb & Julian Lew (Kluwer, 1994)',
      'Aircraft Liens and Detention Rights (Longman, 2002)',
      'International Product Liability (Aspatore Inc., 2004)',
    ],
  },
  {
    slug: 'babatunde-a-sodipo-san',
    name: 'Babatunde A. Sodipo',
    postNominals: 'SAN',
    title: 'Partner',
    group: 'Partners',
    office: 'Lagos',
    email: 'bsodipo@ajumogobiaokeke.com',
    phone: '+234-1-2771325',
    portrait: firmAssets.portraits.sodipo,
    focus: 'Dispute Resolution, Arbitration & ADR',
    practices: ['litigation', 'intellectual-property', 'maritime-shipping'],
    summary:
      'Head of the Firm’s Dispute Resolution, Arbitration and ADR Group, with more than 35 years’ post-call experience in commercial litigation, arbitration and mediation.',
    bio: [
      'Mr. Sodipo is a Senior Advocate of Nigeria and heads the Firm’s Dispute Resolution, Arbitration and ADR Group. He has more than 35 years of post-call experience in commercial litigation, arbitration and mediation.',
      'He advises domestic and international clients in the energy, tobacco, aviation, aircraft manufacturing, banking, insurance, beverage, software, construction and shipping sectors. He represents two major international oil companies in oil spill litigation and a global tobacco company in tobacco litigation.',
      'In 2007 he sat on a Lagos State Attorney-General review panel for the High Court Civil Procedure Rules. He is cited in Who’s Who Legal and IFLR1000. On 30 September 2024, the Legal Practitioners Privileges Committee (LPPC) conferred on him the rank of Senior Advocate of Nigeria.',
    ],
    specialisms: [
      'Litigation & Arbitration',
      'Product Liability',
      'Intellectual Property',
      'Employment & Labour',
      'Real Estate',
      'Environmental law, shipping and corporate compliance advisory',
    ],
    education: [
      'Institute of Maritime Law, University of Southampton — 45th Maritime Law Short Course, 2018',
      'University of Lagos — LL.M., 1997',
      'Nigerian Law School — B.L., 1988',
      'University of Ife — LL.B. (Hons), 1987',
    ],
    experience: [
      'Ajumogobia & Okeke, December 1999 – present (Partner since 2011)',
      'Fani-Kayode & Sowemimo, 1988 – 1999',
    ],
    memberships: [
      'Nigerian Bar Association',
      'International Bar Association',
      'Chartered Institute of Arbitrators (UK), Nigeria Branch',
      'Notary Public for Nigeria',
    ],
    honours: ['Senior Advocate of Nigeria (SAN), conferred 30 September 2024', 'Cited in Who’s Who Legal and IFLR1000'],
    publications: [
      'Nigerian chapter, Lexology Getting the Deal Through: Product Liability (2011 – 2023)',
      'Nigerian chapter, Lexology Getting the Deal Through: Product Recall (2010 – 2012)',
      'Nigerian chapter, Lexology Getting the Deal Through: Shipbuilding (2019 – 2023)',
    ],
  },
  {
    slug: 'patrick-a-osu',
    name: 'Patrick A. Osu',
    postNominals: '',
    title: 'Partner',
    group: 'Partners',
    office: 'Lagos',
    email: 'posu@ajumogobiaokeke.com',
    phone: '+234-1-2711324',
    portrait: firmAssets.portraits.osu,
    focus: 'Aviation · M&A · Energy & Finance',
    practices: ['aviation', 'banking-finance', 'oil-gas', 'capital-market-private-equity'],
    summary:
      'A transaction lawyer with over twenty years’ experience across energy and infrastructure, oil and gas, banking and finance, M&A, foreign investment and aviation.',
    bio: [
      'Mr. Osu is a transaction lawyer with over twenty years of experience. His work covers energy and infrastructure, oil and gas, banking and finance, mergers and acquisitions, foreign investment, aviation and regulatory matters. He has advised local and international clients, including on government privatisations and for buy-side investors.',
      'He regularly leads the Firm’s advice to foreign banks, owners and lessors on aircraft financing and leasing.',
    ],
    matters: [
      'A public-private partnership between the Lagos State Government and MTN for a multi-level car park valued at over US$22 million.',
      'Lead adviser to the 4Power Consortium on its acquisition of the Port Harcourt Electricity Distribution Company.',
      'Lead counsel on the acquisition of five rubber plantations to form Nigeria’s largest rubber plantation company.',
      'Counsel to Indorama Group on its US$270 million acquisition of the Eleme Petrochemical Company.',
      'Transaction adviser on the purchase of a US$40 million equity stake in Hydrodive Nigeria Limited, and on the BPE’s proposed divestiture of the Port Harcourt and Kaduna refineries.',
      'Transaction adviser on Visa International’s acquisition of equity in Valucard Nigeria Plc.',
      'Advising the Chicason Group on the multibillion-dollar Abuja City Project and on its oil assets in Ghana, Senegal, Kenya, Sierra Leone and elsewhere.',
    ],
    specialisms: ['Aircraft & Aviation', 'Mergers & Acquisitions', 'Finance', 'Energy & Natural Resources', 'Litigation & Arbitration'],
    education: ['Nigerian Law School — B.L., 1995', 'University of Calabar — LL.B. (Hons), 1993'],
    experience: ['Ajumogobia & Okeke, 1999 – present (Partner since 2011)', 'Ukiri & Shasore, 1994 – 1999', 'Coker & Co., 1994'],
    memberships: ['Nigerian Bar Association', 'International Aviation Lawyers', 'Member, Chartered Institute of Arbitrators (MCIArb)'],
    publications: [
      'Nigeria chapter, ICLG Aviation Finance & Leasing 2026 (with Maryam Olaitan Bello)',
      'Nigeria chapter, ICLG Aviation Finance & Leasing 2025 (with Oluwafunmilola Lawal)',
    ],
  },
  {
    slug: 'kingsley-n-amaefule',
    name: 'Kingsley N. Amaefule',
    postNominals: '',
    title: 'Senior Associate',
    group: 'Senior Associates',
    office: 'Lagos',
    email: '',
    phone: '',
    portrait: '',
    focus: 'Tax',
    practices: ['taxation-and-foreign-investment', 'maritime-shipping'],
    summary: 'Senior Associate and author of the Firm’s review of the income taxation of international shipping companies.',
    bio: [],
    profilePending: true,
  },
  {
    slug: 'oluwafunmilola-lawal',
    name: 'Oluwafunmilola Lawal',
    postNominals: '',
    title: 'Associate',
    group: 'Associates',
    office: 'Lagos',
    email: '',
    phone: '',
    portrait: '',
    focus: 'Aviation & Aircraft Services',
    practices: ['aviation'],
    summary: 'Associate in the Firm’s Aviation & Aircraft Services team and co-author of the Nigeria chapter of ICLG Aviation Finance & Leasing 2025.',
    bio: [],
    profilePending: true,
  },
];

export const getPerson = (slug) => people.find((p) => p.slug === slug);
export const fullName = (p) => (p.postNominals ? `${p.name} ${p.postNominals}` : p.name);
