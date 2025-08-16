import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: "🎨",
    title: "Canva Designing",
    description: "Create stunning graphics and visual content"
  },
  {
    icon: "🌐", 
    title: "WordPress Development",
    description: "Build professional websites from scratch"
  },
  {
    icon: "💼",
    title: "Freelancing",
    description: "Start your own freelancing business"
  },
  {
    icon: "📦",
    title: "Dropshipping",
    description: "Launch a profitable online store"
  },
  {
    icon: "📧",
    title: "Email Marketing",
    description: "Master email campaigns & automation"
  },
  {
    icon: "📱",
    title: "Digital Marketing",
    description: "Complete digital marketing strategies"
  },
  {
    icon: "🛒",
    title: "Shopify Store Setup",
    description: "Create professional e-commerce stores"
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    description: "Rank higher on Google search results"
  },
  {
    icon: "📘",
    title: "Facebook Ads",
    description: "Run profitable Facebook advertising campaigns"
  },
  {
    icon: "💻",
    title: "UX/UI Design",
    description: "Design beautiful user experiences"
  }
];

const CourseGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll Master
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            10 complete courses designed to transform you into a digital expert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="card-gradient p-6 text-center">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.description}</p>
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
            <Button className="btn-accent">
              Get All 10 Courses @ ₹299
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;