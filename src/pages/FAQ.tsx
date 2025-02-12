
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import { getTranslation } from "@/lib/translations";
import { useState } from "react";

const FAQ = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const t = getTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{t.faq}</h1>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is">
            <AccordionTrigger>{t.faqWhatIsQuestion}</AccordionTrigger>
            <AccordionContent>
              {t.faqWhatIsAnswer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-use">
            <AccordionTrigger>{t.faqWhyUseQuestion}</AccordionTrigger>
            <AccordionContent>
              {t.faqWhyUseAnswer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-long">
            <AccordionTrigger>{t.faqHowLongQuestion}</AccordionTrigger>
            <AccordionContent>
              {t.faqHowLongAnswer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="is-it-safe">
            <AccordionTrigger>{t.faqSafeQuestion}</AccordionTrigger>
            <AccordionContent>
              {t.faqSafeAnswer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-many">
            <AccordionTrigger>{t.faqHowManyQuestion}</AccordionTrigger>
            <AccordionContent>
              {t.faqHowManyAnswer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
