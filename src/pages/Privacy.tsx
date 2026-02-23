
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
          <p className="mt-2 text-gray-600">Last updated: February 20, 2026</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Ten Minute Emails, operated under the Lansira brand, provides a free
            temporary email service designed to protect your personal privacy
            online. This Privacy Policy explains what information we collect, how
            we use it, and how we safeguard your data when you use our website
            and services. By using Ten Minute Emails, you acknowledge and agree
            to the practices described in this policy.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>Temporary Email Data</h3>
          <p>
            When you use our service, we generate a temporary email address on
            your behalf and store any messages received at that address for the
            duration of your active session. This data is transient by design and
            is automatically and permanently deleted within 24 hours. We do not
            read, analyze, or share the contents of emails received through our
            service.
          </p>

          <h3>Usage Data</h3>
          <p>
            We collect basic, anonymized usage data to help us understand how our
            service is used and to improve its performance. This may include
            information such as page views, browser type, device type, and
            general geographic region. This data is collected in aggregate form
            and cannot be used to personally identify you.
          </p>

          <h3>Information We Do Not Collect</h3>
          <p>
            Ten Minute Emails does not require any form of registration or
            account creation. We do not collect your name, phone number, home
            address, payment information, or any other personally identifiable
            information. You are never asked to provide personal details in order
            to use our service.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            The limited information we collect is used solely for the following
            purposes:
          </p>
          <ul>
            <li>
              <strong>Providing the service:</strong> Generating temporary email
              addresses and delivering incoming messages to your browser session.
            </li>
            <li>
              <strong>Maintaining security:</strong> Monitoring for abuse,
              unauthorized access, and malicious activity to protect our
              infrastructure and users.
            </li>
            <li>
              <strong>Improving functionality:</strong> Analyzing anonymized
              usage patterns to identify areas for improvement and optimize the
              user experience.
            </li>
            <li>
              <strong>Displaying advertisements:</strong> Serving ads through
              third-party advertising partners to support the free operation of
              our service.
            </li>
          </ul>

          <h2>4. Advertising</h2>
          <p>
            Ten Minute Emails uses Google AdSense to display advertisements on
            our website. Google AdSense and its partners may use cookies, web
            beacons, and similar tracking technologies to serve ads based on your
            prior visits to our site or other websites across the internet. These
            cookies allow Google and its partners to deliver advertising that may
            be relevant to your interests.
          </p>
          <p>
            You can opt out of personalized advertising by visiting Google's Ads
            Settings page. Additionally, you may opt out of third-party vendor
            cookies by visiting the Network Advertising Initiative's opt-out
            page. Please note that opting out of personalized ads does not remove
            advertising from our site; you will still see non-personalized
            advertisements.
          </p>

          <h2>5. Data Retention and Deletion</h2>
          <p>
            Temporary email addresses and all associated messages are
            permanently deleted within 24 hours of their creation. Once deleted,
            this data cannot be recovered by anyone, including our team. We do
            not maintain backups or archives of temporary email data.
          </p>
          <p>
            Anonymized usage logs may be retained for up to 30 days for security
            monitoring and abuse prevention purposes. After this period, these
            logs are automatically purged from our systems. No personally
            identifiable information is contained within these logs.
          </p>

          <h2>6. Data Security</h2>
          <p>
            All connections to Ten Minute Emails are encrypted using HTTPS
            (TLS/SSL) to protect data in transit between your browser and our
            servers. Because our service does not require account creation, there
            are no passwords or credentials stored on our systems. Our
            infrastructure is hosted with reputable providers that maintain
            industry-standard physical and digital security measures.
          </p>
          <p>
            While we take reasonable steps to protect your data, no method of
            electronic transmission or storage is completely secure. We cannot
            guarantee absolute security, but we are committed to implementing
            appropriate safeguards for the data we handle.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Our service relies on the following third-party providers to
            function:
          </p>
          <ul>
            <li>
              <strong>Supabase:</strong> Provides database hosting for temporary
              email storage and management.
            </li>
            <li>
              <strong>Cloudflare:</strong> Provides DNS resolution, email
              routing, and content delivery services.
            </li>
            <li>
              <strong>Google:</strong> Provides advertising services through
              Google AdSense.
            </li>
          </ul>
          <p>
            Each of these providers operates under their own privacy policies and
            data handling practices. We encourage you to review their respective
            privacy policies to understand how they may process data related to
            your use of our service.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Ten Minute Emails is not directed at children under the age of 13.
            We do not knowingly collect personal information from children under
            13 in compliance with the Children's Online Privacy Protection Act
            (COPPA). Since our service does not require registration or the
            submission of personal data, the risk of inadvertent collection is
            minimal. If we become aware that we have collected information from a
            child under 13, we will take immediate steps to delete that
            information.
          </p>

          <h2>9. Your Rights</h2>
          <p>
            Because Ten Minute Emails does not collect personally identifiable
            information, there is generally no personal data for us to provide,
            modify, or delete on your behalf. Temporary email data is
            automatically and permanently removed within 24 hours without any
            action required from you.
          </p>
          <p>
            If you have questions or concerns about your data or believe we may
            have inadvertently collected personal information, please do not
            hesitate to contact us using the details provided below.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technologies, or legal requirements. Any
            updates will be posted on this page with a revised "Last updated"
            date. We encourage you to review this policy periodically. Your
            continued use of Ten Minute Emails after any changes constitutes your
            acceptance of the updated policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please visit our{" "}
            <a href="/contact">Contact page</a> or reach us directly by email
            at{" "}
            <a href="mailto:lansira.dev@gmail.com">lansira.dev@gmail.com</a>. We
            will make every effort to respond to your inquiry in a timely manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
