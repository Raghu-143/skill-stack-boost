import { Button } from "@/components/ui/button";
import { Shield, CreditCard, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero border-t border-primary/20 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Learnfy</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-base text-muted-foreground mb-6">
            <div className="flex items-center gap-3 bg-card/20 px-4 py-2 rounded-xl backdrop-blur-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span>SSL Secure Payment</span>
            </div>
            <div className="flex items-center gap-3 bg-card/20 px-4 py-2 rounded-xl backdrop-blur-sm">
              <CreditCard className="w-5 h-5 text-accent" />
              <span>Cashfree Gateway</span>
            </div>
            <div className="flex items-center gap-3 bg-card/20 px-4 py-2 rounded-xl backdrop-blur-sm">
              <Lock className="w-5 h-5 text-primary" />
              <span>100% Safe & Secure</span>
            </div>
          </div>
          
          <p className="text-lg text-foreground mb-6">
            Need Help? Email us: <a href="mailto:support@learnfy.in" className="text-accent hover:text-primary transition-colors font-bold">support@learnfy.in</a>
          </p>
          
          <div className="mb-8">
            <a
              href="https://payments.cashfree.com/forms/10box"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-hero">
                🚀 Last Chance - Get Bundle @ ₹299
              </Button>
            </a>
          </div>
        </div>
        
        <div className="pt-6 border-t border-primary/20">
          <p className="text-base text-muted-foreground">
            Copyright © 2025 Learnfy Academy. All rights reserved. | Transform Your Career Today!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;