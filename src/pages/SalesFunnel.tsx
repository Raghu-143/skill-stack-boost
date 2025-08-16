import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseGrid from "@/components/CourseGrid";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReviewsSection from "@/components/ReviewsSection";
import CertificateSection from "@/components/CertificateSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LiveNotification from "@/components/LiveNotification";

const SalesFunnel = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CourseGrid />
      <WhyChooseSection />
      <ReviewsSection />
      <CertificateSection />
      <FAQSection />
      <Footer />
      <LiveNotification />
    </div>
  );
};

export default SalesFunnel;