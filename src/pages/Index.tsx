
import EmailBox from "@/components/EmailBox";
import MessageList from "@/components/MessageList";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getTranslation } from "@/lib/translations";

interface IndexProps {
  currentAddressId: string | null;
  onAddressChange: (id: string | null) => void;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Index = ({ currentAddressId, onAddressChange, currentLanguage, onLanguageChange }: IndexProps) => {
  const t = getTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 select-text flex flex-col">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
      
      <main className="flex-1 max-w-4xl mx-auto py-12 px-4">
        <header className="text-center mb-12 slide-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <h2 className="text-lg text-gray-600 max-w-md mx-auto">
            {t.subtitle}
          </h2>
        </header>

        <section aria-label="Email Generator">
          <h3 className="sr-only">Generate Temporary Email</h3>
          <EmailBox onAddressChange={onAddressChange} existingAddressId={currentAddressId} />
        </section>

        <section aria-label="Messages" className="mt-8">
          <h3 className="sr-only">Email Messages</h3>
          <MessageList 
            currentAddressId={currentAddressId}
            currentLanguage={currentLanguage}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
