import { Button } from "@/components/ui/button";

const CertificateSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
            Get Certified in 10+ Skills
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-accent mb-12">
            Boost Your Career with Professional Certificates
          </h3>
          
          <div className="card-gradient p-10 mb-12 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-16 rounded-3xl border-2 border-primary/30">
              <div className="text-8xl mb-8">🏆</div>
              <h4 className="text-3xl font-bold text-foreground mb-6">
                CERTIFICATE OF COMPLETION
              </h4>
              <div className="text-2xl text-primary font-bold mb-4">
                10 Complete Digital Skills Mastery
              </div>
              <div className="text-xl text-muted-foreground mb-6">
                This certifies that
              </div>
              <div className="text-3xl font-bold text-accent mb-6">
                [Your Name Here]
              </div>
              <div className="text-lg text-muted-foreground mb-8">
                has successfully completed all 10 professional courses and demonstrated mastery in:
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-foreground/80 mb-8">
                <div>✓ Canva Design</div>
                <div>✓ WordPress</div>
                <div>✓ Freelancing</div>
                <div>✓ Dropshipping</div>
                <div>✓ Email Marketing</div>
                <div>✓ Digital Marketing</div>
                <div>✓ Shopify</div>
                <div>✓ SEO</div>
                <div>✓ Facebook Ads</div>
                <div>✓ UX/UI Design</div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                Learnfy Academy
              </div>
              <div className="text-base text-muted-foreground">
                Professional Digital Skills Certification Program • Industry Recognized
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Add these professional certificates to your LinkedIn profile and resume. Showcase your expertise to employers and clients with industry-recognized credentials.
          </p>

          <a
            href="https://payments.cashfree.com/forms/10box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-hero">
              🎓 Get Certified Now @ ₹299
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;