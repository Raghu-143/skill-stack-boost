import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-foreground">Learnfy</span>
        </div>
        
        <a
          href="https://payments.cashfree.com/forms/10box"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn-primary">
            Buy Now @ ₹299
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;