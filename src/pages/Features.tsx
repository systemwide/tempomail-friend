
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { getTranslation } from "@/lib/translations";
import { useState } from "react";

const Features = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const t = getTranslation(currentLanguage);

  const features = [
    {
      title: t.featureInstantTitle,
      description: t.featureInstantDesc,
    },
    {
      title: t.featureMultiLangTitle,
      description: t.featureMultiLangDesc,
    },
    {
      title: t.featureNotificationsTitle,
      description: t.featureNotificationsDesc,
    },
    {
      title: t.featureCleanupTitle,
      description: t.featureCleanupDesc,
    },
    {
      title: t.featureSetupTitle,
      description: t.featureSetupDesc,
    },
    {
      title: t.featureSecureTitle,
      description: t.featureSecureDesc,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{t.features}</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
