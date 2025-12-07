import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  variant?: "full" | "compact";
  className?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What services does Eritage EntCare offer?",
    answer: "Eritage ENT Care provides comprehensive ear, nose, and throat treatments for both children and adults. Our services include ENT consultations, hearing tests through partnered audiology centers, treatment for infections, allergies, sinus conditions, voice disorders, and surgical referrals when needed."
  },
  {
    question: "Do you perform Hearing Tests (PTA, Tympanometry, OAE)?",
    answer: "Yes! We partner with certified audiology centers in Entebbe to provide comprehensive hearing tests including Pure Tone Audiometry (PTA), Tympanometry, Otoacoustic Emissions (OAE), Auditory Brainstem Response (ABR), and newborn hearing screening. Our ENT specialist interprets results and provides personalized care plans."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can easily book an appointment by calling us at +256 740 166 778 or +256 742 017 229. You can also reach us via WhatsApp for quick appointment scheduling. We recommend booking in advance, though walk-ins are also welcome."
  },
  {
    question: "Where is the clinic located?",
    answer: "Eritage ENT Care is conveniently located along Entebbe Road, Entebbe, Central Region, Uganda. You can find us easily on Google Maps for directions to our clinic."
  },
  {
    question: "Do you treat both children and adults?",
    answer: "Absolutely! Our ENT specialist is experienced in treating patients of all ages, from newborns requiring hearing screening to elderly patients with age-related hearing concerns. We provide gentle, compassionate care tailored to each age group."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, we welcome walk-in patients! However, to ensure minimal waiting time and guarantee availability, we recommend scheduling an appointment in advance by calling or messaging us on WhatsApp."
  }
];

const FAQSection = ({ variant = "full", className = "" }: FAQSectionProps) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I have a question for Eritage ENT Care.");
    window.open(`https://wa.me/256740166778?text=${message}`, '_blank');
  };

  const displayItems = variant === "compact" ? faqItems.slice(0, 4) : faqItems;

  return (
    <section className={`py-16 bg-accent/20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our ENT services in Entebbe
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {displayItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {variant === "compact" && (
            <div className="text-center mt-8">
              <a 
                href="/faq" 
                className="text-primary hover:underline font-semibold text-lg"
              >
                View All FAQs →
              </a>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-primary/10 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need More Help?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Contact us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="tel:+256740166778">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
