import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="gradient-hero text-primary-foreground py-20 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          10 Complete Skill Courses
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
          Lifetime Access @ ₹299 Only!
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Master Digital Skills like WordPress, SEO, Facebook Ads & More – Get Instant Access Today
        </p>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://videopress.com/v/qfjdnGpB"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              title="Course Preview Video"
            />
          </div>
        </div>

        <CountdownTimer />

        {/* Certificate Preview */}
        <div className="max-w-md mx-auto mb-8 p-6 bg-card/20 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
          <div className="bg-card text-card-foreground p-4 rounded-xl">
            <div className="text-primary font-bold text-lg mb-2">🏆 CERTIFICATE OF COMPLETION</div>
            <div className="text-sm text-muted-foreground">
              Get certified in 10+ digital skills upon completion
            </div>
            <div className="mt-2 text-accent font-semibold">Learnfy Academy</div>
          </div>
        </div>

        {/* Main CTA */}
        <a
          href="https://payments.cashfree.com/forms/10box"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="btn-hero animate-pulse-slow">
            🚀 Get Instant Access @ ₹299
          </Button>
        </a>
        
        <div className="mt-4 text-sm text-primary-foreground/80">
          ✅ Instant Access • ✅ Lifetime Validity • ✅ Mobile Friendly
        </div>
      </div>
    </section>
  );
};

export default HeroSection;