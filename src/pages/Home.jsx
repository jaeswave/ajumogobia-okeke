import Seo from '../components/common/Seo.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import FirmIntroduction from '../components/home/FirmIntroduction.jsx';
import PracticeAreasPreview from '../components/home/PracticeAreasPreview.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import PeoplePreview from '../components/home/PeoplePreview.jsx';
import InsightsPreview from '../components/home/InsightsPreview.jsx';
import AwardsSection from '../components/home/AwardsSection.jsx';
import OfficeLocations from '../components/home/OfficeLocations.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { organizationSchema } from '../utils/seo.js';
import { stock } from '../data/images.js';

export default function Home() {
  return (
    <>
      <Seo
        description="Ajumogobia & Okeke is a leading full-service commercial law firm in Nigeria. Founded in 1984, with offices in Lagos, Abuja and Port Harcourt and international correspondent relationships."
        image={stock.towerUp}
        schema={organizationSchema()}
      />
      <HeroSection />
      <FirmIntroduction />
      <PracticeAreasPreview />
      <WhyChooseUs />
      <PeoplePreview />
      <InsightsPreview />
      <AwardsSection />
      <OfficeLocations />
      <ContactCTA />
    </>
  );
}
