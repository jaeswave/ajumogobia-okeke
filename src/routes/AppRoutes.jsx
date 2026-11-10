import { lazy } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import { publications } from '../data/publications.js';

// Inner pages are code-split; the homepage ships in the main bundle for a fast first paint.
const About = lazy(() => import('../pages/About.jsx'));
const History = lazy(() => import('../pages/History.jsx'));
const Values = lazy(() => import('../pages/Values.jsx'));
const ClientCare = lazy(() => import('../pages/ClientCare.jsx'));
const People = lazy(() => import('../pages/People.jsx'));
const LawyerDetails = lazy(() => import('../pages/LawyerDetails.jsx'));
const PracticeAreas = lazy(() => import('../pages/PracticeAreas.jsx'));
const PracticeDetails = lazy(() => import('../pages/PracticeDetails.jsx'));
const Publications = lazy(() => import('../pages/Publications.jsx'));
const PublicationDetails = lazy(() => import('../pages/PublicationDetails.jsx'));
const Careers = lazy(() => import('../pages/Careers.jsx'));
const ProBono = lazy(() => import('../pages/ProBono.jsx'));
const Alumni = lazy(() => import('../pages/Alumni.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy.jsx'));
const SearchPage = lazy(() => import('../pages/Search.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

/** Legacy WordPress URLs from the current site, redirected to their new homes. */
const legacyRedirects = [
  ['/history', '/firm/history'],
  ['/our-values', '/firm/values'],
  ['/client-care', '/firm/client-care'],
  ['/practice-areas', '/practices'],
  ['/media', '/publications'],
  ['/people/h-odein-ajumogobia-san', '/people/h-odein-ajumogobia-san'],
  ['/babatunde-a-sodipo', '/people/babatunde-a-sodipo-san'],
  ['/patrick-a-osu', '/people/patrick-a-osu'],
  ['/aviation', '/practices/aviation'],
  ['/banking-finance', '/practices/banking-finance'],
  ['/taxation-and-foreign-investment', '/practices/taxation-and-foreign-investment'],
  ['/mining', '/practices/mining'],
  ['/oil-gas', '/practices/oil-gas'],
  ['/intellectual-property', '/practices/intellectual-property'],
  ['/litigation', '/practices/litigation'],
  ['/media-entertainment', '/practices/sports-entertainment-media'],
  ['/maritime-shipping', '/practices/maritime-shipping'],
  ['/capital-market-private-equity', '/practices/capital-market-private-equity'],
  ['/company-secretarial', '/practices/company-secretarial'],
  ...publications.map((p) => [p.legacyPath.replace(/\/$/, ''), `/publications/${p.slug}`]),
].filter(([from, to]) => from !== to);

function LegacyPublication() {
  const { slug } = useParams();
  return <Navigate to={`/publications/${slug}`} replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="firm" element={<About />} />
        <Route path="firm/history" element={<History />} />
        <Route path="firm/values" element={<Values />} />
        <Route path="firm/client-care" element={<ClientCare />} />
        <Route path="people" element={<People />} />
        <Route path="people/:slug" element={<LawyerDetails />} />
        <Route path="practices" element={<PracticeAreas />} />
        <Route path="practices/:slug" element={<PracticeDetails />} />
        <Route path="publications" element={<Publications />} />
        <Route path="publications/:slug" element={<PublicationDetails />} />
        <Route path="insights/:slug" element={<LegacyPublication />} />
        <Route path="careers" element={<Careers />} />
        <Route path="pro-bono" element={<ProBono />} />
        <Route path="alumni" element={<Alumni />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="search" element={<SearchPage />} />
        {legacyRedirects.map(([from, to]) => (
          <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
