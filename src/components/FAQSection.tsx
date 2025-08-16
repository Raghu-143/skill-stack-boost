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
    answer: "After successful payment, you'll receive an email with login credentials and access links within 5 minutes. You can also access courses through our mobile app."
  },
  {
    question: "Is it a one-time payment?",
    answer: "Yes! It's a one-time payment of ₹299 for lifetime access to all 10 courses. No hidden fees, no recurring charges ever."
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes! You get individual certificates for each course completion. All certificates are industry-recognized and can be added to your LinkedIn profile and resume."
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Absolutely! All courses are mobile-optimized and you can learn on-the-go using our mobile app available for both Android and iOS."
  },
  {
    question: "Are these courses updated for 2025?",
    answer: "Yes! All courses are regularly updated with the latest 2025 trends, tools, and strategies. You get lifetime updates at no extra cost."
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your money, no questions asked."
  },
  {
    question: "How long will it take to complete all courses?",
    answer: "Each course is 2-4 hours long. You can complete all 10 courses in 2-3 weeks if you dedicate 1 hour daily. But there's no time limit - learn at your own pace!"
  },
  {
    question: "Do I need any prior experience?",
    answer: "No prior experience needed! All courses are designed for beginners and include step-by-step instructions with practical examples."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-gradient px-6 py-2 rounded-xl border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? Contact us at support@learnfy.com
          </p>
          <a
            href="https://payments.cashfree.com/forms/10box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-primary">
              Get Your Questions Answered @ ₹299
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;