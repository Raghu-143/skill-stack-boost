import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CertificateSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Certified in 10+ Skills & Boost Your Career
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Each course comes with a professional certificate that you can showcase on your resume, LinkedIn profile, and portfolio.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>Industry-recognized certificates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>Add to LinkedIn & resume</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>Boost career opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>Verify skills to employers</span>
              </div>
            </div>

            <a
              href="https://payments.cashfree.com/forms/10box"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-accent">
                Get Certified Today @ ₹299
              </Button>
            </a>
          </div>

          <div className="flex justify-center">
            <Card className="card-gradient p-8 max-w-md w-full">
              <CardContent className="p-0 text-center">
                <div className="border-4 border-primary rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-primary text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    CERTIFICATE OF COMPLETION
                  </h3>
                  <div className="border-t border-primary/20 my-4"></div>
                  <p className="text-sm text-muted-foreground mb-2">
                    This certifies that
                  </p>
                  <p className="text-lg font-bold mb-2">[Your Name]</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    has successfully completed the
                  </p>
                  <p className="text-base font-semibold text-primary mb-4">
                    10 Complete Skill Courses Bundle
                  </p>
                  <div className="border-t border-primary/20 my-4"></div>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>Learnfy Academy</span>
                    <span>Verified Certificate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;