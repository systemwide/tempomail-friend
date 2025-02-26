
import Navigation from "@/components/Navigation";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>1. Information We Collect</h2>
          <p>When you use Ten Minute Emails, we collect:</p>
          <ul>
            <li>Temporary email addresses generated through our service</li>
            <li>Messages received at these temporary addresses</li>
            <li>Basic usage data (e.g., access times, browser type)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide temporary email services</li>
            <li>Improve our service functionality</li>
            <li>Maintain service security</li>
            <li>Display relevant advertisements</li>
          </ul>

          <h2>3. Data Retention</h2>
          <p>Temporary email addresses and their contents are automatically deleted after 10 minutes. We do not permanently store any emails or personal information.</p>

          <h2>4. Advertising</h2>
          <p>We use Google AdSense to display advertisements. AdSense uses cookies and similar technologies to serve relevant ads based on your browsing history and interests.</p>

          <h2>5. Security</h2>
          <p>We implement appropriate security measures to protect against unauthorized access or misuse of information.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify users of any material changes by posting the new policy on this page.</p>

          <h2>7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us through our Contact page.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
