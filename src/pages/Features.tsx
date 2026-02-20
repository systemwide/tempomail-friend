import { CheckCircle2, Mail, Copy, Trash2 } from "lucide-react";
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
      details:
        "Click once and get a working email address in under a second. No forms to fill out, no verification steps, no waiting. Your temporary inbox is ready to receive messages immediately.",
    },
    {
      title: t.featureMultiLangTitle,
      description: t.featureMultiLangDesc,
      details:
        "Our interface is fully translated into six languages, making privacy accessible to users worldwide. Each translation is crafted to feel natural, not machine-generated.",
    },
    {
      title: t.featureNotificationsTitle,
      description: t.featureNotificationsDesc,
      details:
        "Never miss an important verification email. Our real-time system checks for new messages automatically, so you can see incoming emails the moment they arrive without refreshing the page.",
    },
    {
      title: t.featureCleanupTitle,
      description: t.featureCleanupDesc,
      details:
        "Your temporary email address and all associated messages are permanently deleted after 24 hours. There's no archive, no backup, and no way to recover the data — exactly how it should be for true privacy.",
    },
    {
      title: t.featureSetupTitle,
      description: t.featureSetupDesc,
      details:
        "There's literally nothing to configure. No account creation, no personal information required, no browser extensions to install. Just visit the site and start using your temporary email.",
    },
    {
      title: t.featureSecureTitle,
      description: t.featureSecureDesc,
      details:
        "We don't track your browsing behavior, we don't store cookies for advertising, and we don't sell any data. Your temporary email session is completely anonymous.",
    },
  ];

  const steps = [
    {
      number: 1,
      icon: Mail,
      title: "Generate",
      description:
        "Visit Ten Minute Emails and a fresh, unique email address is created for you instantly. Copy it to your clipboard with one click.",
    },
    {
      number: 2,
      icon: Copy,
      title: "Use",
      description:
        "Use your temporary address anywhere you need an email — sign-ups, verifications, downloads, or any situation where you'd rather not share your real address.",
    },
    {
      number: 3,
      icon: Trash2,
      title: "Auto-Delete",
      description:
        "After 24 hours, your temporary email address and all received messages are permanently and automatically deleted. No trace left behind.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{t.features}</h1>

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Ten Minute Emails provides instant, disposable email addresses designed to protect your
          privacy online. Whether you're signing up for a service, downloading a resource, or testing
          an application, our temporary emails keep your real inbox clean and your identity safe.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <p className="text-gray-400 text-sm mt-2">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <step.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
