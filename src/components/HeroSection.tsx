import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="gradient-hero text-foreground py-20 mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Master 10 Skills with One Bundle
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-accent mb-6">
          Lifetime Access @ ₹299 Only!
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
          Learn Canva, WordPress, Freelancing, SEO, Digital Marketing & More – Instant Delivery After Payment
        </p>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30">
            <iframe
              src="https://videopress.com/v/qfjdnGpB?autoplay=1&loop=1"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
              title="Course Preview Video"
            />
          </div>
        </div>

        <CountdownTimer />

        {/* Certificate Preview */}
        <div className="max-w-lg mx-auto mb-8 p-6 card-gradient border-2 border-accent/30">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 text-card-foreground p-6 rounded-2xl border border-primary/20">
            <div className="text-accent font-bold text-xl mb-3">🏆 CERTIFICATE OF COMPLETION</div>
            <div className="text-base text-foreground/90 mb-3">
              Get certified in 10+ digital skills upon completion
            </div>
            <div className="text-primary font-bold text-lg">Learnfy Academy</div>
            <div className="text-sm text-muted-foreground mt-2">Professional Certificate • Industry Recognized</div>
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
        
        <div className="mt-6 text-base text-foreground/90 max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <span className="flex items-center gap-2">✅ Instant Access</span>
            <span className="flex items-center gap-2">✅ Lifetime Validity</span>
            <span className="flex items-center gap-2">✅ Mobile Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;