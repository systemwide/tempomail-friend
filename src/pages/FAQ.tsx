
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is">
            <AccordionTrigger>What is a temporary email service?</AccordionTrigger>
            <AccordionContent>
              A temporary email service provides disposable email addresses that you can use for temporary purposes, such as signing up for services, without revealing your personal email address. These addresses automatically expire after a set period.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-use">
            <AccordionTrigger>Why should I use a temporary email address?</AccordionTrigger>
            <AccordionContent>
              Temporary email addresses help protect your privacy, reduce spam in your primary inbox, and provide a safe way to test or sign up for services without risking your personal email address being sold or compromised.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-long">
            <AccordionTrigger>How long do the email addresses last?</AccordionTrigger>
            <AccordionContent>
              Our temporary email addresses are active for 24 hours from creation. After this period, they are automatically deleted along with any received messages to protect your privacy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="is-it-safe">
            <AccordionTrigger>Is it safe to use temporary email addresses?</AccordionTrigger>
            <AccordionContent>
              Yes, our service is designed with security in mind. We don't store any personal information, and all emails are automatically deleted after expiration. However, avoid using temporary emails for important accounts or sensitive communications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-many">
            <AccordionTrigger>How many email addresses can I create?</AccordionTrigger>
            <AccordionContent>
              You can create unlimited temporary email addresses. There's no restriction on the number of addresses you can generate, and no registration is required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
