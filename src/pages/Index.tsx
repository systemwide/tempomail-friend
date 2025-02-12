
import EmailBox from "@/components/EmailBox";
import MessageList from "@/components/MessageList";
import AdBanner from "@/components/AdBanner";
import { useState } from "react";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getTranslation } from "@/lib/translations";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
];

const Index = () => {
  const [currentAddressId, setCurrentAddressId] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const selectedLanguage = LANGUAGES.find(lang => lang.code === currentLanguage);
  const t = getTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 select-text">
      <AdBanner className="w-full py-4" />
      <div className="flex px-4">
        <AdBanner className="hidden lg:block w-48 min-h-screen sticky top-0" />
        <div className="flex-1 max-w-4xl mx-auto py-12">
          <div className="text-center mb-12 slide-up">
            <div className="flex justify-center items-center gap-2 mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {t.title}
              </h1>
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{selectedLanguage?.name}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className="flex items-center justify-between"
                    >
                      <span>{lang.name}</span>
                      {currentLanguage === lang.code && (
                        <Check className="w-4 h-4 ml-2" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
