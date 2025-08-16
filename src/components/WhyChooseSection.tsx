import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: "⚡",
    title: "Instant Access",
    description: "Get immediate access to all courses after payment"
  },
  {
    icon: "♾️",
    title: "Lifetime Validity",
    description: "Learn at your own pace, no time restrictions"
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    description: "Access courses on any device, anywhere"
  },
  {
    icon: "🏆",
    title: "Get Certified",
    description: "Receive certificates for each completed course"
  },
  {
    icon: "🔄",
    title: "Updated Content",
    description: "All courses updated for 2025 trends"
  },
  {
    icon: "💰",
    title: "Money Back Guarantee",
    description: "100% satisfaction guaranteed or money back"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose This Bundle?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-gradient p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Regular Price: ₹2,999
          </h3>
          <p className="text-xl mb-4">Today's Special Price:</p>
          <div className="text-4xl md:text-5xl font-black text-accent mb-6">
            Only ₹299
          </div>
          <p className="text-lg mb-6">
            Save ₹2,700 - That's 90% OFF!
          </p>
          <a
            href="https://payments.cashfree.com/forms/10box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-hero">
              Claim This Deal Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;