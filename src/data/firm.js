/**
 * Firm-level content migrated from https://www.ajumogobiaokeke.com
 * (/firm, /history, /client-care, /careers, /alumni, /pro-bono, /privacy-policy).
 * Wording has been lightly edited for readability without changing meaning.
 * Items marked `verify` are flagged in CLIENT_APPROVAL_CHECKLIST.md.
 */
import { stock } from './images.js';

export const firm = {
  name: 'Ajumogobia & Okeke',
  shortName: 'A&O',
  founded: 1984,
  foundedMonth: 'January 1984',
  founders: ['H. Odein Ajumogobia SAN', 'C. Nonyelum Okeke'],
  tagline: 'A leading full-service commercial law firm in Nigeria since 1984.',
  email: 'ao@ajumogobiaokeke.com',
  infoEmail: 'info@ajumogobiaokeke.com',
  careersEmail: 'careers@ajumogobiaokeke.com',
  phone: '+234-1-2719368',
  phoneHref: '+23412719368',
  hours: 'Monday – Friday, 08:00 – 17:00',
  social: {
    // The current website links LinkedIn, Facebook, Twitter/X and Instagram to "#" placeholders.
    // Add verified profile URLs here; icons render only for non-empty values.
    linkedin: '',
    facebook: '',
    x: '',
    instagram: '',
  },
};

export const whoWeAre = {
  heading: 'A commercial law partnership built on four decades of trust.',
  lead:
    'Ajumogobia & Okeke ("A&O") is a leading full-service commercial law firm with its head office in Lagos, Nigeria. Our clients range from multinational corporations, diplomatic missions, international banks and major public companies to family businesses, individual entrepreneurs and government entities.',
  paragraphs: [
    'The Firm was founded in 1984 by H. Odein Ajumogobia SAN and C. Nonyelum Okeke. It is a multi-partner law practice with diverse expertise at partner level and firm-wide. In 2011, Babatunde A. Sodipo and Patrick A. Osu were admitted as partners of the Firm.',
    'A&O has established a reputation for providing cutting-edge legal advice, using modern and local solutions that enable clients to capitalise on business opportunities and manage change effectively. Our lawyers are organised into dedicated practice groups, which allow us to offer a full complement of commercial legal services.',
    'Our offices are strategically located in the commercial capital, Lagos; the centre of the oil and gas industry, Port Harcourt; and the seat of government, Abuja. Our correspondent relationships with international firms complement our ability to provide effective and cost-efficient services.',
    'Over the years, the Firm has drawn on the expertise and experience of its people, acquired within both the public and private sectors of the Nigerian economy. In the private sector, members of the Firm have represented private interests in diverse commercial undertakings.',
  ],
  image: stock.boardroom,
};

export const history = {
  heading: 'Partnership. Innovation. Solutions.',
  lead:
    'Founded in January 1984 by C. Nonyelum Okeke and H. Odein Ajumogobia, the practice has become “the firm of choice”.',
  paragraphs: [
    'A leading commercial law practice based in Lagos, Nigeria, the Firm has established its reputation through an unmatched knowledge of its clients’ business sectors, as well as strong and long-standing contacts throughout the commercial sector. The Firm is a multi-partner law practice with diverse expertise at partner level and firm-wide.',
    'The partnership practises under the name and style of Ajumogobia & Okeke, with its main offices located in the central business district of Lagos, at Sterling Towers on the Marina. Our offices are fully equipped with a three-city integrated networked IT system, comprehensive law libraries and competent paralegal and research support teams.',
    'After three decades, A&O remains one of the oldest continuing law partnerships — the leading commercial law practice in Nigeria.',
  ],
  // Milestones are drawn only from facts stated on the firm's website and partner profiles.
  milestones: [
    { year: '1984', title: 'The partnership is founded', text: 'H. Odein Ajumogobia and C. Nonyelum Okeke establish the practice in Lagos in January 1984.' },
    { year: '2001', title: 'International arbitration', text: 'Founding partner H. Odein Ajumogobia begins two terms (2001–2006) as a member of the ICC International Court of Arbitration, Paris.' },
    { year: '2003', title: 'Inner Bar', text: 'H. Odein Ajumogobia is admitted to the inner bar as a Senior Advocate of Nigeria.' },
    { year: '2009', title: 'Law reform', text: 'Members of the Firm lead the drafting of the Mortgage & Property Law 2009, and the Firm plays a significant role in the development of the Arbitration Law 2009.' },
    { year: '2011', title: 'A new generation of partners', text: 'Babatunde A. Sodipo and Patrick A. Osu are admitted as partners, and Mr. Ajumogobia returns to the Firm following public service.' },
    { year: '2024', title: 'A second Senior Advocate', text: 'On 30 September 2024 the Legal Practitioners Privileges Committee confers the rank of Senior Advocate of Nigeria on Babatunde A. Sodipo.' },
  ],
  image: stock.lawLibrary,
};

export const values = {
  heading: 'The values that guide every instruction.',
  lead: 'Four commitments shape how A&O works with clients, with one another and with the wider profession.',
  items: [
    { title: 'Client Satisfaction', text: 'Achieving client satisfaction through innovative solutions.' },
    { title: 'Quality Legal Service', text: 'Providing high-quality legal advice that meets our clients’ business interests.' },
    { title: 'Excellent Communication', text: 'Using knowledge and modern communication technology to add value to our services.' },
    { title: 'Capacity Building', text: 'Developing professionalism and building capacity among our people.' },
  ],
  image: stock.architecture,
};

export const clientCare = {
  heading: 'Legal direction, focused on your long-term objectives.',
  lead:
    'At Ajumogobia & Okeke we are committed to a continuing client care programme that ensures constant review of the progress of matters under instruction.',
  paragraphs: [
    'Frequent communication with clients keeps our attention on their long-term and ultimate requirements in each matter. Specialists are assigned according to their areas of expertise, and every instruction has a partner and at least one associate with primary responsibility for it.',
    'We aim to balance efficient delivery of work with rigorous quality control. We pride ourselves on our continuing professional training programmes, in-house training facilities, and a quarterly newsletter on developments in the law that is circulated to clients and legal institutions.',
    'Our management approach supports efficiency across our offices in Lagos, Port Harcourt and Abuja.',
  ],
  commitments: [
    { title: 'Constant review', text: 'The progress of every matter under instruction is reviewed regularly.' },
    { title: 'Partner responsibility', text: 'Each instruction has a partner and at least one associate with primary responsibility.' },
    { title: 'Specialist teams', text: 'Specialists are assigned according to their areas of expertise.' },
    { title: 'Knowledge sharing', text: 'A quarterly newsletter on legal developments is circulated to clients and legal institutions.' },
  ],
  image: stock.meeting,
};

export const differentiators = [
  { title: 'Four decades of commercial practice', text: 'Founded in 1984, A&O remains one of the oldest continuing law partnerships in Nigeria.', icon: 'Landmark' },
  { title: 'Client care programme', text: 'Constant review of every matter, with a partner and at least one associate responsible for each instruction.', icon: 'HeartHandshake' },
  { title: 'Deep industry knowledge', text: 'Sector specialisation lets our lawyers advise with an understanding of each client’s industry.', icon: 'Compass' },
  { title: 'International correspondent relationships', text: 'Relationships with leading international firms complement our local expertise.', icon: 'Globe' },
  { title: 'Inner Bar leadership', text: 'Two partners hold the rank of Senior Advocate of Nigeria, the country’s highest mark of distinction at the Bar.', icon: 'Scale' },
  { title: 'Three strategic offices', text: 'Lagos, the commercial capital; Port Harcourt, the centre of the oil and gas industry; and Abuja, the seat of government.', icon: 'MapPin' },
];

export const careers = {
  heading: 'Join the winning team.',
  lead: 'Our commitment to excellence starts with our people.',
  paragraphs: [
    'As a leading commercial law firm, we seek out and retain top talent: people with energy, passion and a commitment to client service.',
    'Employee satisfaction matters to us. Our goal is to keep our people motivated, engaged and empowered. Lawyers, paralegals, legal administrative assistants and business support staff work as one team, and every individual contribution is respected.',
  ],
  howToApply: 'To apply, send your CV and a brief covering note to',
  roles: ['Lawyers', 'Paralegals', 'Legal administrative assistants', 'Business support staff'],
  image: stock.officeInterior,
};

export const proBono = {
  heading: 'Community service is part of who we are.',
  lead:
    'The Firm treats community service and social responsibility as central to its culture.',
  paragraphs: [
    'Our pro bono work allows our lawyers to apply their skills across many areas of law to help individuals and organisations with limited means.',
    'Lawyers at A&O are encouraged to choose their own pro bono activities, so that their commitment reflects both their expertise and the causes that matter to them.',
  ],
  image: stock.handshake,
};

export const alumni = {
  heading: 'We are only as strong as our network.',
  lead:
    'Whether you left the Firm many years ago or more recently, you helped shape A&O into the firm it is today.',
  benefits: [
    'Industry and practice-area legal updates',
    'Invitations to seminars and networking events',
    'Pro bono opportunities',
    'A connection to the Firm’s LinkedIn community',
  ],
  image: stock.skyline,
};

export const privacyPolicy = {
  updated: 'Content migrated from the existing website — date to be confirmed by the Firm',
  sections: [
    {
      heading: 'Information collection',
      paragraphs: [
        'Ajumogobia & Okeke is the sole owner of the information collected on this website.',
        'To contact the Firm through this website, you complete the contact form and provide details such as your name and email address. We use this information to contact you about the services in which you have expressed an interest.',
      ],
    },
    {
      heading: 'Information use',
      paragraphs: [
        'On rare occasions it may be necessary to send you strictly service-related announcements — for example, notice of a temporary suspension of the website for maintenance. These communications are not promotional in nature.',
      ],
    },
    {
      heading: 'Sharing',
      paragraphs: [
        'We do not share personal information with third parties.',
        'We may disclose personal information when required by law, or in the good-faith belief that such action is necessary to comply with a court order, legal process or current judicial proceedings.',
      ],
    },
    {
      heading: 'Links',
      paragraphs: [
        'This website contains links to other sites. Please be aware that we are not responsible for the privacy practices of other sites. We encourage you to read the privacy statement of each website that collects personally identifiable information. This privacy policy applies solely to information collected by this website.',
      ],
    },
    {
      heading: 'Surveys',
      paragraphs: [
        'Participation in any survey is entirely voluntary. Information collected through surveys is used to monitor or improve the use of, and satisfaction with, this website.',
        'Any intermediary that conducts surveys on our behalf may not use your personally identifiable information for any secondary purpose.',
      ],
    },
    {
      heading: 'Notification of changes',
      paragraphs: [
        'Any changes to this policy will be posted on this page and in other appropriate places. Information is handled in accordance with the policy in effect at the time it was collected.',
        'If you have questions or suggestions about this policy, please contact us.',
      ],
    },
  ],
};
