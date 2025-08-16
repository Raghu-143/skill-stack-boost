import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    review: "Amazing courses! I learned WordPress and started my freelancing business. Already earning ₹25,000/month!",
    location: "Mumbai"
  },
  {
    name: "Rahul Kumar",
    avatar: "RK", 
    rating: 5,
    review: "The SEO course helped me rank my website on Google. Best investment I've made for my business!",
    location: "Delhi"
  },
  {
    name: "Sneha Patel",
    avatar: "SP",
    rating: 5,
    review: "Facebook Ads course was incredible. My ad campaigns now generate 5x ROI consistently!",
    location: "Bangalore"
  },
  {
    name: "Amit Singh",
    avatar: "AS",
    rating: 5,
    review: "All 10 courses for ₹299 is unbelievable value. Quality content with lifetime access!",
    location: "Pune"
  },
  {
    name: "Kavya Reddy",
    avatar: "KR",
    rating: 5,
    review: "The UX/UI design course helped me land a job at a top tech company. Worth every penny!",
    location: "Hyderabad"
  },
  {
    name: "Vikash Yadav",
    avatar: "VY",
    rating: 5,
    review: "Started my dropshipping store using these courses. Now making ₹50,000+ per month!",
    location: "Chennai"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful students who transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="card-gradient p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://payments.cashfree.com/forms/10box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-primary">
              Join Our Success Stories
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;