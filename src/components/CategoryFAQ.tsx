import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/JsonLd";
import { categoryFAQs } from "@/data/categoryFAQs";

interface CategoryFAQProps {
  categoryKey: string;
}

const CategoryFAQ = ({ categoryKey }: CategoryFAQProps) => {
  const data = categoryFAQs[categoryKey];
  if (!data) return null;

  return (
    <section className="mt-8 mb-4">
      <FAQSchema
        items={data.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-telegram-blue/10 rounded-lg mr-3">
            <HelpCircle className="w-6 h-6 text-telegram-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Perguntas frequentes sobre Grupos de {data.label}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {data.faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-telegram-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CategoryFAQ;