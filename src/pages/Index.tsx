
import EmailBox from "@/components/EmailBox";
import MessageList from "@/components/MessageList";
import AdBanner from "@/components/AdBanner";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { getTranslation } from "@/lib/translations";

const Index = () => {
  const [currentAddressId, setCurrentAddressId] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const t = getTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 select-text">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <AdBanner className="w-full py-4" />
      <div className="flex px-4">
        <AdBanner className="hidden lg:block w-48 min-h-screen sticky top-0" />
        <div className="flex-1 max-w-4xl mx-auto py-12">
          <div className="text-center mb-12 slide-up">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              {t.subtitle}
            </p>
          </div>

          <EmailBox onAddressChange={setCurrentAddressId} />
          <MessageList 
            currentAddressId={currentAddressId}
            currentLanguage={currentLanguage}
          />
          <AdBanner className="mt-6" />
        </div>
        <AdBanner className="hidden lg:block w-48 min-h-screen sticky top-0" />
      </div>
    </div>
  );
};

export default Index;
