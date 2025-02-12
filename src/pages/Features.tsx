
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";

const Features = () => {
  const features = [
    {
      title: "Instant Email Generation",
      description: "Create disposable email addresses instantly with no registration required.",
    },
    {
      title: "Multi-Language Support",
      description: "Access our service in multiple languages including English, Spanish, French, German, Chinese, and Japanese.",
    },
    {
      title: "Real-Time Notifications",
      description: "Receive instant notifications when new emails arrive in your temporary inbox.",
    },
    {
      title: "Automatic Cleanup",
      description: "All temporary emails and messages are automatically deleted after 24 hours for your privacy.",
    },
    {
      title: "Zero Setup Required",
      description: "Start using the service immediately - no registration, no passwords, no hassle.",
    },
    {
      title: "Secure & Anonymous",
      description: "Your privacy is our priority - we don't store any personal information.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Features</h1>
        
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
