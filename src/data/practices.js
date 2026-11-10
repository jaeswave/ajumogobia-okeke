/**
 * Practice areas migrated from the individual practice pages of
 * https://www.ajumogobiaokeke.com. Text is edited for readability only.
 * `contacts` are derived from the practice areas listed on each partner's own
 * profile — confirm with the Firm (see CLIENT_APPROVAL_CHECKLIST.md).
 */
import { stock } from './images.js';

export const practicesIntro = {
  heading: 'Superior legal expertise, sector by sector.',
  lead:
    'Ajumogobia & Okeke has established a reputation for cutting-edge legal advice using modern and local solutions that enable clients to capitalise on business opportunities and manage change effectively.',
  paragraphs: [
    'Our sector specialisations are central to our effectiveness. Our lawyers understand our clients’ industries well enough to give broad, knowledge-based advice, and each sector and each office offers a full range of commercial legal services.',
    'With offices in three Nigerian cities — Lagos, Port Harcourt and Abuja — and correspondent relationships with leading international firms, we provide local expertise in a local context.',
  ],
};

export const practices = [
  {
    slug: 'aviation',
    name: 'Aviation',
    icon: 'Plane',
    image: stock.aircraft,
    summary:
      'First-choice Nigerian counsel to international and domestic air carriers, lessors and financiers on leasing, registration, liens and regulatory compliance.',
    intro:
      'The Firm has an established aviation practice and has represented several international and domestic air carriers over the years. It is often the first-choice Nigerian counsel for leading international aviation companies, advising on their corporate and commercial interests.',
    sections: [
      {
        heading: 'Transactions and leasing',
        items: [
          'Acting for international airlines in negotiating and drafting joint operating and code-share agreements with Nigeria’s national carrier.',
          'Local counsel on aircraft wet lease agreements, with advice on liens and aircraft registration requirements.',
          'Advising international aircraft leasing companies on operating leases with domestic passenger carriers, and drafting operating leases, powers of attorney and assignments of aircraft insurance.',
          'Advising on repossession and deregistration in Nigeria, third-party claims and other non-statutory liens.',
          'A long-standing working relationship with Nigerian regulators, particularly the Nigeria Civil Aviation Authority (NCAA) and the Ministry of Aviation.',
        ],
      },
      {
        heading: 'Start-up and compliance',
        items: [
          'Advising on the full legal set-up of international airline operations.',
          'Routine advice on regulatory compliance, including employment and labour matters and the engagement of skilled expatriate personnel.',
          'Representing domestic and international passenger airlines in claims and disputes under contracts of carriage by air.',
        ],
      },
      {
        heading: 'Thought leadership',
        body:
          'The Firm wrote the Nigeria chapter of Aircraft Finance (Registration, Security and Enforcement) (Longman), later updated for Aircraft Liens and Detention Rights (Sweet & Maxwell). Our partners continue to author the Nigeria chapter of the ICLG Aviation Finance & Leasing guide.',
      },
    ],
    services: [
      'Aircraft operating leases (wet and dry leases)',
      'Registration and deregistration',
      'Carriage by air claims',
      'Employment and labour matters',
      'Industry regulatory compliance',
      'Aircraft liens and detention rights',
    ],
    contacts: ['patrick-a-osu', 'h-odein-ajumogobia-san'],
  },
  {
    slug: 'banking-finance',
    name: 'Banking & Finance',
    icon: 'Landmark',
    image: stock.markets,
    summary:
      'Advising domestic and foreign banks and financial institutions on regulation, syndicated and bilateral lending, structured, asset and trade finance.',
    intro:
      'Our Banking and Finance team advises domestic and foreign banks and other financial institutions on banking regulation and handles their transactions. The team regularly acts on syndicated and non-syndicated financings.',
    sections: [
      {
        heading: 'Financings we regularly act on',
        items: [
          'Secured and unsecured loans',
          'Liquidity facilities for structured finance',
          'Commercial paper back-up facilities',
          'Senior and subordinated credit facilities',
          'Acquisition credit and leveraged buy-outs of public and private companies',
          'Asset-based loans to middle-market companies',
        ],
      },
      {
        heading: 'Our approach',
        body:
          'We aim to move finance transactions to an early close — from documentation through to security — with cost-effectiveness as a key priority. We work with financial institutions, asset managers, investors, borrowers, mortgagors, mortgagees and other users of third-party capital.',
      },
      {
        heading: 'Law reform and recovery',
        body:
          'Members of the Firm led the drafting of the Mortgage & Property Law 2009 and the Home Ownership and Mortgage Scheme (HOMS). Our banking and finance lawyers also work with litigation colleagues on asset and financial recovery, and provide early dispute-resolution advice where needed.',
      },
    ],
    services: [
      'Project finance',
      'Securitisation and international capital markets',
      'Public finance and asset finance',
      'Trade finance',
      'Syndicated and bilateral lending',
      'Debt conversion',
      'Global depositories and collective investment securities',
      'Insolvency and recovery actions',
    ],
    contacts: ['patrick-a-osu'],
  },
  {
    slug: 'taxation-and-foreign-investment',
    name: 'Tax & Foreign Investment',
    icon: 'Receipt',
    image: stock.documents,
    summary:
      'Specialist tax lawyers advising on Nigeria’s emerging tax regimes, foreign participation, privatisation, tax disputes and immigration.',
    intro:
      'The Firm has a dedicated team of specialist tax lawyers who advise on Nigeria’s emerging tax regimes. We offer practical advice that accounts for business needs and multiple jurisdictions, supported by strong domestic tax capability through both qualification and practice.',
    sections: [
      {
        heading: 'Tax in commercial transactions',
        body:
          'Tax guidance is a key part of our advice on commercial transactions. We help clients understand the tax effects of corporate alliances, mergers, financing arrangements, restructurings and local labour tax obligations. Recent work includes:',
        items: [
          'Capital market flotations',
          'Project financing',
          'Foreign and international participation in Nigerian enterprises, including tax exemptions and pioneer status',
          'Employment and pensions regulation',
        ],
      },
      {
        heading: 'Setting up or acquiring a business in Nigeria',
        body:
          'Establishing or acquiring a business in Nigeria involves specialised procedures. We advise on foreign participation rules and corporate structuring to support clients’ investment goals. We have advised both public bodies and buyers and are a leading adviser on privatisation: the Firm was legal adviser to the Bureau of Public Enterprises on the first privatisation of a public enterprise in Nigeria, and acted as solicitor to the issue in that Initial Public Offer.',
      },
      {
        heading: 'Tax disputes',
        body:
          'When disputes arise with tax authorities, our litigation team handles protests, petitions and appeals, from tax commissioners up to the Federal courts. The Firm also sat on the committee that reviewed Nigerian tax legislation.',
      },
      {
        heading: 'Immigration',
        body:
          'Our immigration team supports international clients doing business in Nigeria, advising on the requirements of the Nigerian Immigration Service and other regulators to protect clients’ foreign participation.',
        items: [
          'Procuring residence permits and expatriate quota positions for foreign staff',
          'Filing returns with the immigration office',
          'Advising on all aspects of immigration law',
        ],
      },
    ],
    services: [
      'Petroleum Income Tax',
      'Companies Income Tax',
      'Tax appeals',
      'Personal Income Tax',
      'Revenue charges and other liabilities',
      'Legal and regulatory advisory',
      'Corporate governance',
      'Tax advice and business permits',
    ],
    contacts: [],
  },
  {
    slug: 'mining',
    name: 'Mining',
    icon: 'Pickaxe',
    image: stock.quarry,
    summary:
      'Advising on Nigeria’s legal, regulatory and investment framework for mineral exploration and production.',
    intro:
      'The Firm advises clients on mineral exploration and production. We have built substantial mining experience over the years and are often consulted on Nigeria’s legal, regulatory and investment framework for the mineral sector.',
    sections: [
      {
        heading: 'A visible presence in the sector',
        body: 'Our mineral-related advice covers:',
        items: ['Licensing and mineral titles', 'Community development agreements', 'Mineral land rights', 'Other mineral matters'],
      },
      {
        heading: 'Current work',
        body:
          'The Firm is advising on the development of a mineral project connected to a globally recognised geological discovery in Nigeria’s North-West.',
      },
      {
        heading: 'Policy and knowledge sharing',
        items: [
          'Our publication “Nigerian Mining Sector: Legal & Regulatory Overview” provides industry updates and contributes to sector policy.',
          'We periodically run knowledge-exchange programmes with leading international law firms to support policy analysis in the sector.',
        ],
      },
    ],
    services: ['Licensing and mineral titles', 'Community development agreements', 'Mineral land rights', 'Regulatory and investment advisory'],
    contacts: ['h-odein-ajumogobia-san'],
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    icon: 'Flame',
    image: stock.refinery,
    summary:
      'Supporting companies across hydrocarbon exploration and production — licensing, PSCs, acquisitions, project finance and pollution litigation.',
    intro:
      'Our Oil and Gas practice supports companies engaged in hydrocarbon exploration and production. Our work covers the legal and regulatory framework of the industry, including advice on the ongoing petroleum industry reforms.',
    sections: [
      {
        heading: 'Track record',
        items: [
          'Counsel to North American, British, French, Dutch and Italian corporations on transactions ranging from oil mining lease acquisitions to large sector projects.',
          'Counsel to the International Finance Corporation and other international lenders on significant Nigerian projects.',
          'Lead defence counsel in what has been described as the largest oil spill litigation in Nigeria — a multi-party action against a leading oil-producing multinational.',
        ],
      },
    ],
    services: [
      'Licensing of exploration rights',
      'Transportation and storage',
      'Farm-in and farm-out arrangements and related financing',
      'Leases and Production Sharing Contracts (PSCs)',
      'Acquisition and assignment of Oil Mining Leases',
      'Upstream and downstream project matters',
      'Acquisition and disposal of interests in oil and gas fields, marginal fields and other concessions',
      'Transaction structuring for project financing of petroleum investments',
      'Oil pollution actions and related litigation',
      'Extractive industry performance and policy',
    ],
    contacts: ['h-odein-ajumogobia-san', 'patrick-a-osu'],
  },
  {
    slug: 'intellectual-property',
    name: 'Intellectual Property',
    icon: 'Lightbulb',
    image: stock.ideas,
    summary:
      'A full range of services for the protection, exploitation and litigation of trademarks, patents, designs and copyright.',
    intro:
      'The Firm provides a full range of legal services relating to the protection, exploitation and litigation of intellectual property rights. Our IP group combines expertise with local knowledge of sectors such as pharmaceuticals, consumer products, communications, information technology and media.',
    sections: [
      {
        heading: 'Clients and transactions',
        items: [
          'Representing multinational consumer product companies.',
          'Advising on franchise and distributorship agreements, merchandise marks and IP licensing.',
          'Advising on acquisitions of industrial and IP assets, royalties, franchising, licensing and other international trade protection measures.',
        ],
      },
      {
        heading: 'Registries and compliance',
        body:
          'We maintain working relationships with Nigeria’s trademark, patent and design registries, making timely and accurate filings to protect local and international businesses.',
      },
      {
        heading: 'IP litigation',
        items: [
          'Oppositions to registration',
          'Passing-off actions',
          'Protection of trademarks and products',
          'Seizure and disposal of infringing goods',
          'Injunctions and parallel trading disputes',
          'Copyright collecting society and IT protection actions',
        ],
      },
      {
        heading: 'Industry involvement',
        items: [
          'Participation in the committee revising Nigeria’s IP laws.',
          'Contribution to the trademark study group on a proposed draft bill for a consolidated enactment.',
          'Membership of the International Trademark Association (INTA) and the Intellectual Property Law Association of Nigeria (IPLAN).',
          'Support for the Asia-Pacific IP Forum.',
        ],
      },
    ],
    services: [
      'Trademark registration',
      'Passing-off and seizure',
      'Copyright and design',
      'Opposition proceedings',
      'Transaction agreements',
      'Enforcement of trademark and copyright infringements',
      'Litigation, arbitration and dispute resolution',
      'Advisory',
    ],
    contacts: ['babatunde-a-sodipo-san'],
  },
  {
    slug: 'litigation',
    name: 'Litigation & Dispute Resolution',
    icon: 'Gavel',
    image: stock.gavelBooks,
    summary:
      'Assertive representation before Nigeria’s superior courts and in domestic and international arbitration, led by a Senior Advocate of Nigeria.',
    intro:
      'Our litigation team responds assertively to corporate and commercial disputes that parties cannot settle themselves, before the Federal and State High Courts, the Court of Appeal and the Supreme Court of Nigeria. The group is led by a member of the inner bar whose rank of Senior Advocate of Nigeria is Nigeria’s highest mark of distinction.',
    sections: [
      {
        heading: 'How we work',
        body:
          'An invaluable contributor to positive results for A&O clients is the Firm’s modern and resourceful litigation support and paralegal team. We draw on knowledge of our clients’ businesses to resolve disputes efficiently, and use several methods to keep costs reasonable. The Firm is a leading practice in product liability.',
      },
      {
        heading: 'Notable work',
        items: [
          'Lead defence counsel for a large tobacco multinational against multiple state government reimbursement claims seeking medical expenses allegedly linked to tobacco use.',
          'Authors of the Nigerian chapters of Getting the Deal Through – Product Recall (2010, updated 2011).',
        ],
      },
      {
        heading: 'Arbitration and ADR',
        body:
          'ADR and arbitration services are offered firm-wide and are encouraged for commercial disputes that call for quick, effective, binding and final resolution. Our lawyers are associates, members or fellows of the Chartered Institute of Arbitrators and often act as counsel in domestic and international arbitration. Some members hold international mediation accreditation and have experience in construction adjudication.',
      },
      {
        heading: 'Affiliations',
        items: [
          'Member of the Nigerian chapter of the International Chamber of Commerce (ICC). A senior partner served on the ICC International Court of Arbitration and its Commission on Arbitration in Paris.',
          'Member of the Lagos Court of Arbitration and a founding member of the Maritime Arbitrators Association of Nigeria (MAAN).',
          'A significant role in national arbitration law reform and the development of the Arbitration Law 2009.',
        ],
      },
    ],
    services: [
      'Company and corporate law litigation',
      'Contract claims of varied complexity',
      'Oil and gas, admiralty and shipping',
      'Insolvency and tax appeals',
      'Intellectual property actions',
      'Environmental and product liability defence, including multi-suit and multi-party representative actions',
      'Domestic and international arbitration',
      'Mediation and ADR',
    ],
    contacts: ['babatunde-a-sodipo-san', 'h-odein-ajumogobia-san'],
  },
  {
    slug: 'sports-entertainment-media',
    name: 'Sports, Entertainment & Media',
    icon: 'Clapperboard',
    image: stock.stadium,
    summary:
      'Contracts, representation, IP and regulatory advice for athletes, artists, studios, broadcasters, publishers and investors.',
    intro:
      'Our sports law team includes lawyers who are also keen sports fans. Given Nigeria’s strong football culture and wealth of talent, the team focuses on football-related legal matters, with knowledge of FIFA and Nigeria Football Federation (NFF) rules and experience reviewing standard football contracts across various leagues.',
    sections: [
      {
        heading: 'Sports',
        body:
          'Our negotiators aim to secure favourable deals for clients, and we advise on the legal side of sports branding and merchandising. Regular advisory work includes:',
        items: [
          'Drafting and reviewing professional service, endorsement, appearance and exclusive agreements',
          'Representation and multiple-representation agreements',
          'Standard player contracts',
          'Agreements involving minors, arranged through a parent or guardian',
          'Negotiating contract terms',
          'Tax advisory and mediation',
        ],
      },
      {
        heading: 'Media & Entertainment',
        body:
          'We help clients protect their intellectual property and royalty income, support careers intended to succeed over the long term and across borders, and help clients build personal brands — taking a proactive approach to corporate and regulatory compliance. Our IP unit supports these clients with trademark registration, copyright protection and notices, brand protection and licensing.',
      },
      {
        heading: 'Who we act for',
        body:
          'Media outlets, studios, performing artists, writers, musicians, producers, filmmakers, distributors, recording artists and online entertainment innovators; and in media, publishers, broadcasters, content providers, technology and communications companies, financiers and investors. Recent work includes advising on excessive entertainment taxes imposed on a client’s cinemas in Lagos, and advising a local entertainment and multimedia group on a proposed partnership with a South African outdoor advertising brand.',
      },
    ],
    services: [
      'Transaction documentation',
      'Intellectual property protection',
      'Legal and regulatory advisory',
      'Contract negotiation',
      'Content carriage and programming contracts',
      'Performing artist and production contracts',
      'Endorsement and sponsorship arrangements',
      'Employment and labour matters',
      'Personal and company income tax compliance, estate and wealth planning',
      'Real estate investment advisory',
    ],
    contacts: [],
  },
  {
    slug: 'maritime-shipping',
    name: 'Maritime & Shipping',
    icon: 'Ship',
    image: stock.port,
    summary:
      'Charter-party disputes, cargo claims, vessel finance and arrests for shipowners, charterers, P&I Clubs and financiers.',
    intro:
      'The Firm practises across international trade and maritime law. Our shipping group handles charter-party disputes, cargo claims and contracts of carriage, acting for shipowners, operators, charterers and their P&I Clubs. Leading international firms often instruct us on behalf of carrier interests.',
    sections: [
      {
        heading: 'Breadth of practice',
        body:
          'We advise all market participants on bills of lading, sale contracts, sea carriage statutes, cabotage and shipping investment. Our oil and gas practice is supported locally by shipping expertise, particularly in health, safety and environmental compliance.',
      },
      {
        heading: 'Selected work',
        items: [
          'Counsel to a syndicate of international financiers funding the construction and acquisition of tanker vessels.',
          'Adviser on the privatisation of Nigeria’s largest shipbuilding, offshore structure fabrication and ship repair yard.',
        ],
      },
      {
        heading: 'Blue water and brown water',
        body:
          'Our offices are close to the ports, allowing us to respond to emergencies and gather first-hand information on vessel locations. Our matters include traditional “blue water” shipping — personal injury, cargo, longshore and towage — and “brown water” oil and gas matters covering exploration, development, production, transportation, pollution and environmental litigation.',
      },
      {
        heading: 'Memberships',
        body:
          'The Firm is a founding member of the Maritime Arbitrators Association of Nigeria, and its members are active in the Nigerian Maritime Lawyers Association.',
      },
    ],
    services: [
      'Registration of vessels',
      'Protection and Indemnity',
      'International sale and trade',
      'Charter parties',
      'Syndication and vessel acquisition',
      'Cargo claims and cargo defence',
      'Ship mortgages',
      'Vessel arrests',
    ],
    contacts: ['babatunde-a-sodipo-san'],
  },
  {
    slug: 'capital-market-private-equity',
    name: 'Capital Markets & Private Equity',
    icon: 'TrendingUp',
    image: stock.signing,
    summary:
      'Debt and equity issuances, project finance, M&A and the full private equity cycle — from fundraising and due diligence to exit.',
    intro:
      'The Firm has a core team of lawyers focused on capital markets and private equity advisory work. They deliver advice on a par with leading international standards, respond at short notice, and serve clients from our offices in Lagos, Abuja and Port Harcourt.',
    sections: [
      {
        heading: 'Experience',
        body:
          'The practice has long experience of project financing across private equity, traditional lending, restructuring, mergers and acquisitions and capital markets — including debt and equity issuances on the Nigerian Stock Exchange and public-private partnerships.',
      },
      {
        heading: 'Private equity',
        items: [
          'General transaction agreements covering contractual, regulatory and corporate aspects',
          'Identifying risk-mitigating factors and allocating risk effectively',
          'Tax structuring',
          'Fundraising and investor due diligence — pre-investment, investee/investor and post-investment integration reviews',
          'Exit planning',
          'Advice on the most suitable dispute-resolution mechanisms',
        ],
      },
      {
        heading: 'Transaction documents',
        items: ['Share sale and purchase agreements', 'Domiciliation and escrow agreements', 'Loan note instruments'],
      },
      {
        heading: 'Due diligence',
        body:
          'We prepare due diligence checklists and questionnaires as required by industry rules or regulators, flag red-flag and green-light issues, assess the strengths, weaknesses, opportunities and threats that could affect a deal, and review management and employment matters, governance rights, contractual protections, investment vehicle structures, exclusion lists, risk rankings and minority and majority rights.',
      },
    ],
    services: [
      'Debt and equity capital markets',
      'Public-private partnerships',
      'Mergers and acquisitions',
      'Private equity fundraising and investment',
      'Due diligence',
      'Tax structuring',
      'Exit planning',
    ],
    contacts: ['patrick-a-osu'],
  },
  {
    slug: 'company-secretarial',
    name: 'Company Secretarial & Regulatory Compliance',
    icon: 'ShieldCheck',
    image: stock.officeInterior,
    summary:
      'Incorporation, statutory records, meetings, resolutions and compliance advisory for local and international businesses.',
    intro:
      'Our Company Secretarial and Regulatory Compliance group has extensive experience in regulatory compliance and corporate law in Nigeria, advising local and international clients across sectors. The compliance of a Nigerian business entity with Nigerian laws is key to the success of the business, and our aim is to help clients meet their compliance requirements at minimal cost.',
    sections: [
      {
        heading: 'What we do',
        items: [
          'Company formation — pre-formation, incorporation and post-incorporation work',
          'Preparing, attending and coordinating company meetings, preparing minutes and maintaining the minute book',
          'Keeping the register of members and other statutory books and records, and filing returns',
          'Preparing company resolutions',
          'Regulatory compliance advice',
          'Directorship services',
          'Corporate structuring advisory',
          'General advice on routine statutory company secretarial matters',
          'Other company secretarial services as required',
        ],
      },
    ],
    services: [
      'Company formation',
      'Meetings and minutes',
      'Statutory records and returns',
      'Resolutions',
      'Compliance advisory',
      'Directorship services',
      'Corporate structuring',
    ],
    contacts: [],
  },
];

export const getPractice = (slug) => practices.find((p) => p.slug === slug);
