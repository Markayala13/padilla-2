import SiteHeader from "@/components/SiteHeader";
import FloatingGoogleButton from "@/components/FloatingGoogleButton";
import LocationHero from "@/components/LocationHero";
import LocationInfo from "@/components/LocationInfo";
import FeaturesBar from "@/components/FeaturesBar";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import FinancingSection from "@/components/FinancingSection";
import JennyMarrsSection from "@/components/JennyMarrsSection";
import TeamSection from "@/components/TeamSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import AustinReviews from "@/components/AustinReviews";
import AwardsSection from "@/components/AwardsSection";
import FAQSection from "@/components/FAQSection";
import LocationConsultationForm from "@/components/LocationConsultationForm";
import BlogResourcesSection from "@/components/BlogResourcesSection";
import TrustSection from "@/components/TrustSection";
import SiteFooter from "@/components/SiteFooter";
export const metadata = {
  title: "Bathroom Remodeling in Dallas, TX | Padilla Prestige Remodeling",
  description:
    "Padilla Prestige Remodeling offers full bathroom remodels, accessible bathrooms, and tub & shower updates. Free in-home design consultations. Call +1 (214) 810-5012.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[120px] md:pt-[184px]">
        <LocationHero />
        <LocationConsultationForm />
        <LocationInfo />
        <ServicesSection />
        <FeaturesBar />
        <TrustSection />
        <OffersSection />
        <FinancingSection />
        <JennyMarrsSection />
        <TeamSection />
        <BeforeAfterGallery />
        <AustinReviews />
        <AwardsSection />
        <FAQSection />
        <BlogResourcesSection />
      </main>
      <SiteFooter />
      <FloatingGoogleButton />
    </>
  );
}
