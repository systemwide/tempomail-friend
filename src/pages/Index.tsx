import EmailBox from "@/components/EmailBox";
import MessageList from "@/components/MessageList";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";
import { getTranslation } from "@/lib/translations";
import { blogPosts } from "@/lib/blogPosts";
import { Link } from "react-router-dom";
import { Shield, Ban, Lock, CheckCircle2 } from "lucide-react";

interface IndexProps {
  currentAddressId: string | null;
  onAddressChange: (id: string | null) => void;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Index = ({ currentAddressId, onAddressChange, currentLanguage, onLanguageChange }: IndexProps) => {
  const t = getTranslation(currentLanguage);
  const recentPosts = blogPosts.slice(0, 3);

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

        <div className="mt-8">
          <AdUnit slot="YOUR_AD_SLOT_1" />
        </div>

        <section aria-label="Messages" className="mt-8">
          <h3 className="sr-only">Email Messages</h3>
          <MessageList
            currentAddressId={currentAddressId}
            currentLanguage={currentLanguage}
          />
        </section>

        <div className="mt-8">
          <AdUnit slot="YOUR_AD_SLOT_2" />
        </div>

        {/* Why Use a Temporary Email? */}
        <section className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
            Why Use a Temporary Email?
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Your real email address is a gateway to your identity. Disposable emails keep it protected.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Protect Your Privacy</h4>
              <p className="text-gray-600 text-sm">
                Keep your real email address hidden from companies that sell your data to third parties and advertisers.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Ban className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Avoid Spam</h4>
              <p className="text-gray-600 text-sm">
                Sign up for services, trials, and downloads without flooding your primary inbox with promotional emails.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Stay Secure</h4>
              <p className="text-gray-600 text-sm">
                Reduce your exposure to phishing attacks and data breaches by limiting where your real email appears online.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-lg font-semibold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Generate</h4>
              <p className="text-gray-600 text-sm">
                A unique disposable email address is created instantly when you visit. No sign-up or personal information needed.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-lg font-semibold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Receive</h4>
              <p className="text-gray-600 text-sm">
                Use your temporary address anywhere. Incoming emails appear in your inbox in real time — verification links, confirmations, and more.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-lg font-semibold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Auto-Delete</h4>
              <p className="text-gray-600 text-sm">
                After the timer expires, your email address and all messages are permanently deleted. No data is retained.
              </p>
            </div>
          </div>
        </section>

        {/* What People Use Temporary Emails For */}
        <section className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            What People Use Temporary Emails For
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Free Trial Sign-ups</h4>
                  <p className="text-gray-600 text-sm">Test services without committing your real email address.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Online Shopping</h4>
                  <p className="text-gray-600 text-sm">Make one-time purchases without joining mailing lists.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Forum Registration</h4>
                  <p className="text-gray-600 text-sm">Participate in discussions without revealing your identity.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Newsletter Previews</h4>
                  <p className="text-gray-600 text-sm">Sample a newsletter before subscribing with your real address.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">App Testing</h4>
                  <p className="text-gray-600 text-sm">QA test email flows in your own applications.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Wi-Fi Access</h4>
                  <p className="text-gray-600 text-sm">Connect to public Wi-Fi that requires an email to log in.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest from Our Blog */}
        <section className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Latest from Our Blog
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <Link to={`/blog/${post.id}`} className="font-semibold text-gray-900 hover:text-primary transition-colors">
                  {post.title}
                </Link>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="text-primary font-medium hover:underline">
              View all posts &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
