import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How do I get the courses after payment?",
    answer: "You'll receive instant access via email + direct download link immediately after payment. No waiting time - start learning right away!"
  },
  {
    question: "Is it a one-time payment or recurring?",
    answer: "It's a one-time payment of ₹299 only. No monthly fees, no hidden charges, no subscriptions. Pay once and own it forever!"
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes, certificates are provided after course completion for each of the 10 courses. Professional certificates perfect for LinkedIn and your resume!"
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Yes, you can watch anytime on mobile, tablet, or PC. All courses are mobile-optimized for learning on the go."
  },
  {
    question: "Are these updated for 2025?",
    answer: "Yes, all courses are updated and future updates are included. You'll always have access to the latest techniques and strategies."
  },
  {
    question: "What if I need support?",
    answer: "We provide full email support at support@learnfy.in. Our team responds within 24 hours to help you with any questions."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers! Everything you need to know about our course bundle.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6 mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-gradient px-8 py-4 rounded-2xl border-2 border-primary/20 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-bold text-lg text-foreground hover:no-underline hover:text-accent transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Still have questions? Email us: <a href="mailto:support@learnfy.in" className="text-accent hover:text-primary transition-colors font-bold">support@learnfy.in</a>
            </p>
            <a
              href="https://payments.cashfree.com/forms/10box"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-hero">
                💬 Get All Answers @ ₹299
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;