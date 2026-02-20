
import Navigation from "@/components/Navigation";
import AdUnit from "@/components/AdUnit";
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
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqWhatIsQuestion}</h2>
            <p className="text-gray-700">{t.faqWhatIsAnswer}</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqWhyUseQuestion}</h2>
            <p className="text-gray-700">{t.faqWhyUseAnswer}</p>
          </div>

          <div>
            <AdUnit slot="YOUR_AD_SLOT_4" />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqHowLongQuestion}</h2>
            <p className="text-gray-700">{t.faqHowLongAnswer}</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqSafeQuestion}</h2>
            <p className="text-gray-700">{t.faqSafeAnswer}</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqHowManyQuestion}</h2>
            <p className="text-gray-700">{t.faqHowManyAnswer}</p>
          </div>

          <div>
            <AdUnit slot="YOUR_AD_SLOT_5" />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqFreeQuestion}</h2>
            <p className="text-gray-700">{t.faqFreeAnswer}</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqSendQuestion}</h2>
            <p className="text-gray-700">{t.faqSendAnswer}</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqStoreDataQuestion}</h2>
            <p className="text-gray-700">{t.faqStoreDataAnswer}</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.faqLegalQuestion}</h2>
            <p className="text-gray-700">{t.faqLegalAnswer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
