import { Download, Award, Infinity, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Download,
    title: "📥 Instant Download & Access",
    description: "Get immediate access to all courses right after payment - no waiting!"
  },
  {
    icon: Award,
    title: "🎓 Certificate Included",
    description: "Receive professional certificates upon completion to boost your resume"
  },
  {
    icon: Infinity,
    title: "♾️ Lifetime Access",
    description: "Learn at your own pace with unlimited access - yours forever!"
  },
  {
    icon: Rocket,
    title: "🚀 Beginner to Advanced",
    description: "Perfect for beginners, with advanced techniques for experts"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-primary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Why This Bundle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to master digital skills and transform your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[var(--shadow-button)]">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="card-gradient p-12 text-center border-2 border-accent/30 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className="line-through text-muted-foreground text-2xl">Regular Price: ₹2,999</span>
          </h3>
          <p className="text-2xl text-accent mb-4">Today's Special Offer:</p>
          <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Only ₹299
          </div>
          <p className="text-xl mb-8 text-foreground">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-bold">Save ₹2,700 - That's 90% OFF!</span>
          </p>
          <a
            href="https://payments.cashfree.com/forms/10box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="btn-hero">
              🔥 Claim This Deal Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;