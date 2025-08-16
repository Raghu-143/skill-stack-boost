import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Amazing bundle! I learned WordPress development and started my freelancing career. Now earning ₹40k+ monthly. Best investment ever!"
  },
  {
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "The Canva and Digital Marketing courses are incredible! Got a promotion at work and doubled my salary. Thank you Learnfy!"
  },
  {
    name: "Amit Singh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Excellent value for ₹299! All 10 courses are professionally made and updated for 2025. Perfect for beginners and experts alike."
  },
  {
    name: "Sneha Patel",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Used the Shopify and Facebook Ads courses to start my online store. Now making ₹1L+ monthly! Life-changing content!"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 10,000+ students who transformed their careers with our courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="card-gradient p-8 text-center hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground text-base mb-6 italic leading-relaxed">
                "{review.review}"
              </p>
              <h4 className="font-bold text-card-foreground text-lg">
                {review.name}
              </h4>
              <p className="text-primary text-sm mt-1">Verified Student</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://payments.cashfree.com/forms/10box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="btn-hero">
              🌟 Join Our Success Stories
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;