import { Palette, Code, Users, ShoppingCart, Mail, Megaphone, Store, Search, Facebook, Layers } from "lucide-react";

const courses = [
  {
    name: "Canva Designing",
    icon: Palette,
    description: "Master graphic design with professional Canva techniques"
  },
  {
    name: "WordPress Website Development", 
    icon: Code,
    description: "Build stunning websites from scratch with WordPress"
  },
  {
    name: "Freelancing",
    icon: Users,
    description: "Start your freelancing career and earn money online"
  },
  {
    name: "Dropshipping",
    icon: ShoppingCart,
    description: "Launch profitable dropshipping stores without inventory"
  },
  {
    name: "Email Marketing",
    icon: Mail,
    description: "Create high-converting email campaigns that sell"
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    description: "Master all aspects of online marketing strategies"
  },
  {
    name: "Shopify Store Setup",
    icon: Store,
    description: "Build and optimize professional e-commerce stores"
  },
  {
    name: "SEO (Search Engine Optimization)",
    icon: Search,
    description: "Rank #1 on Google and drive organic traffic"
  },
  {
    name: "Facebook Ads",
    icon: Facebook,
    description: "Run profitable Facebook advertising campaigns"
  },
  {
    name: "UX/UI Design",
    icon: Layers,
    description: "Design beautiful and user-friendly interfaces"
  }
];

const CourseGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            10 Complete Skill Courses Bundle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to master digital skills and boost your career - all for just ₹299!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card-gradient p-8 text-center group hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <course.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {course.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {course.description}
              </p>
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
              🚀 Get All 10 Courses @ ₹299
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;