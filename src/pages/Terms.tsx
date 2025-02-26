
import Navigation from "@/components/Navigation";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>1. Terms</h2>
          <p>By accessing Ten Minute Emails, you agree to these terms of service. Please read them carefully.</p>

          <h2>2. Use License</h2>
          <p>We grant you a limited, non-exclusive license to use our temporary email service for legitimate purposes. You may not:</p>
          <ul>
            <li>Use the service for spam, phishing, or other malicious activities</li>
            <li>Attempt to bypass the 10-minute time limit</li>
            <li>Interfere with the service's operation</li>
            <li>Access the service through automated means</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>The service is provided "as is" without warranties of any kind. We are not responsible for any emails received or their contents.</p>

          <h2>4. Limitations</h2>
          <p>We shall not be liable for any damages arising from the use of our service.</p>

          <h2>5. Revisions</h2>
          <p>We may revise these terms at any time without notice. By continuing to use the service, you agree to the updated terms.</p>

          <h2>6. Governing Law</h2>
          <p>These terms are governed by the laws of the jurisdiction where our service operates.</p>

          <h2>7. Contact</h2>
          <p>For questions about these terms, please visit our Contact page.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
