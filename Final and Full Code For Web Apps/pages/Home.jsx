import PromotionBanner from '../components/PromotionBanner';
import OfferSection from '../components/OfferSection';
import CategoriesSection from '../components/CategoriesSection';
import HotSaleSection from '../components/HotSaleSection';
import WomenClothing from '../components/WomenClothing';
import MenClothing from '../components/MenClothing';
import LaptopGadgetSection from '../components/LaptopGadgetSection';
import Recommendation from "../components/Recommendation";
export default function Home() {
  return (
    <>
      <PromotionBanner />
      <Recommendation />
      <OfferSection />
      <CategoriesSection />
      <HotSaleSection />
      <WomenClothing />
      <MenClothing />
      <LaptopGadgetSection />
      {/* Other sections */}
    </>
  );
}