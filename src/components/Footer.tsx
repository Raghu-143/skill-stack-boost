import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">L</span>
            </div>
            <span className="text-2xl font-bold">Learnfy</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center space-x-6 mb-6 text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-green-500">🔒</span>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-blue-500">⚡</span>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-purple-500">♾️</span>
              <span>Lifetime Validity</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-500">🏆</span>
              <span>Get Certified</span>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-secondary-foreground/60 mb-4 md:mb-0">
                <p>Contact: support@learnfy.com</p>
                <p className="mt-1">© 2025 Learnfy Academy. All rights reserved.</p>
              </div>
              
              <a
                href="https://payments.cashfree.com/forms/10box"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="btn-accent">
                  🚀 Get Started @ ₹299
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;