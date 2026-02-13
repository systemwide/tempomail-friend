
import EmailBox from "@/components/EmailBox";
import MessageList from "@/components/MessageList";
import AdBanner from "@/components/AdBanner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { getTranslation } from "@/lib/translations";

const Index = () => {
  const [currentAddressId, setCurrentAddressId] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const t = getTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 select-text flex flex-col">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      
      {/* Top banner ad - high visibility, 728x90 leaderboard */}
      <AdBanner format="banner" className="w-full py-2" refreshInterval={30} />
      
      <div className="flex px-4 flex-1">
        {/* Left sidebar ad - 160x600 skyscraper */}
        <AdBanner format="sidebar" className="hidden lg:flex w-48 min-h-screen sticky top-16" refreshInterval={30} />
        
        <main className="flex-1 max-w-4xl mx-auto py-12">
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
            <EmailBox onAddressChange={setCurrentAddressId} />
          </section>

          {/* Rectangle ad below email box - prime real estate (300x250) */}
          <AdBanner format="rectangle" className="mt-4" refreshInterval={30} />

          <section aria-label="Messages" className="mt-8">
            <h3 className="sr-only">Email Messages</h3>
            <MessageList 
              currentAddressId={currentAddressId}
              currentLanguage={currentLanguage}
            />
          </section>
          
          {/* Native ad at bottom of content */}
          <AdBanner format="native" className="mt-6 w-full" refreshInterval={60} />
        </main>
        
        {/* Right sidebar ad - 160x600 skyscraper */}
        <AdBanner format="sidebar" className="hidden lg:flex w-48 min-h-screen sticky top-16" refreshInterval={30} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
