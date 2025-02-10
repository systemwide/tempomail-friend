
import EmailBox from "@/components/EmailBox";
import MessageList from "@/components/MessageList";
import AdBanner from "@/components/AdBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <AdBanner className="w-full py-4" /> {/* Top banner */}
      <div className="flex px-4">
        <AdBanner className="hidden lg:block w-48 min-h-screen sticky top-0" /> {/* Left sidebar */}
        <div className="flex-1 max-w-4xl mx-auto py-12">
          <div className="text-center mb-12 slide-up">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Beta</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Temporary Email Service
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Get an instant disposable email address for secure, anonymous sign-ups
            </p>
          </div>

          <EmailBox />
          <MessageList />
          <AdBanner className="mt-6" />
        </div>
        <AdBanner className="hidden lg:block w-48 min-h-screen sticky top-0" /> {/* Right sidebar */}
      </div>
    </div>
  );
};

export default Index;
