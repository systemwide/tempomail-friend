
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
          <p className="mt-2 text-gray-600">Last updated: February 20, 2026</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Ten Minute Emails, you agree to be bound by
            these Terms of Service and all applicable laws and regulations. If
            you do not agree with any part of these terms, you must discontinue
            use of the service immediately. Your continued use of the website
            constitutes your ongoing acceptance of these terms.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Ten Minute Emails is a free temporary and disposable email service
            that allows users to receive emails at randomly generated addresses
            without registration or account creation. The service is
            receive-only; you cannot send outgoing emails from a Ten Minute
            Emails address. Temporary email addresses expire after your active
            session ends, and all associated messages are automatically and
            permanently deleted within 24 hours.
          </p>
          <p>
            The service is intended to help users protect their personal email
            addresses from spam, verify online accounts, and test applications
            that require email input. Ten Minute Emails is not designed to serve
            as a permanent or primary email solution.
          </p>

          <h2>3. Acceptable Use</h2>

          <h3>Permitted Uses</h3>
          <p>You may use Ten Minute Emails for the following purposes:</p>
          <ul>
            <li>
              Receiving verification or confirmation emails from websites and
              online services.
            </li>
            <li>
              Protecting your personal email address from spam and unwanted
              marketing.
            </li>
            <li>
              Testing applications, forms, or workflows that require a valid
              email address.
            </li>
            <li>
              Any other lawful purpose consistent with the intended function of
              the service.
            </li>
          </ul>

          <h3>Prohibited Uses</h3>
          <p>You may not use Ten Minute Emails to:</p>
          <ul>
            <li>
              Engage in any illegal activity, including fraud, identity theft, or
              any conduct that violates applicable local, state, national, or
              international laws.
            </li>
            <li>
              Send spam, phishing messages, or other unsolicited communications.
              Although our service is receive-only, any attempt to use it as part
              of a spam or phishing operation is strictly prohibited.
            </li>
            <li>
              Attempt to circumvent rate limits, session expiration timers, or
              any other technical restrictions built into the service.
            </li>
            <li>
              Interfere with, disrupt, or place an undue burden on the service's
              operation, servers, or infrastructure.
            </li>
            <li>
              Use automated tools, bots, scrapers, or scripts to mass-generate
              temporary email addresses or to harvest received emails at scale.
            </li>
            <li>
              Engage in any activity that violates the rights of others or that
              could expose Ten Minute Emails or its users to legal liability.
            </li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, design, graphics, branding, logos, and other
            intellectual property displayed on the Ten Minute Emails website are
            the property of Ten Minute Emails and the Lansira brand, or are used
            under license. You may not copy, reproduce, distribute, modify, or
            create derivative works from any portion of our site or branding
            without prior written consent. This restriction applies to both
            commercial and non-commercial use.
          </p>

          <h2>5. Service Availability</h2>
          <p>
            Ten Minute Emails is provided on an "as is" and "as available"
            basis. We make no guarantees regarding uptime, availability, or
            uninterrupted access to the service. We reserve the right to modify,
            suspend, or discontinue the service, in whole or in part, at any time
            and for any reason without prior notice. We shall not be liable to
            you or any third party for any modification, suspension, or
            discontinuation of the service.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Ten Minute Emails
            and its operators, affiliates, and partners shall not be liable for
            any direct, indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of, or
            inability to use, the service. This includes, but is not limited to,
            damages for loss of data, lost profits, or business interruption.
          </p>
          <p>
            We are not responsible for the content of any emails received through
            our service. We are also not responsible for any third-party
            websites, services, or platforms that you may access using a
            temporary email address generated by our service.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Ten Minute Emails,
            its operators, the Lansira brand, and their respective officers,
            directors, employees, and agents from and against any and all claims,
            liabilities, damages, losses, costs, and expenses (including
            reasonable attorney's fees) arising out of or related to your use of
            the service, your violation of these Terms of Service, or your
            violation of any rights of any third party.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to restrict, suspend, or terminate your access
            to the service at any time, without prior notice, for any reason we
            deem appropriate. This includes, but is not limited to, cases where
            we reasonably believe you have violated these Terms of Service,
            engaged in abusive behavior, or used the service in a manner that
            could harm our infrastructure or other users. Any temporary email
            data associated with a terminated session will be deleted in
            accordance with our standard data retention practices.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with applicable law, without regard to conflict of law
            principles. Any disputes arising from or relating to these terms or
            your use of the service shall be resolved in accordance with
            applicable legal procedures. By using the service, you consent to the
            jurisdiction of the applicable courts for the resolution of any such
            disputes.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to revise, amend, or update these Terms of
            Service at any time without prior notice. Any changes will be
            effective immediately upon posting to this page with a revised "Last
            updated" date. It is your responsibility to review these terms
            periodically. Your continued use of Ten Minute Emails after any
            changes have been posted constitutes your acceptance of the revised
            terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have any questions, concerns, or feedback regarding these
            Terms of Service, please visit our{" "}
            <a href="/contact">Contact page</a> or reach us directly by email
            at{" "}
            <a href="mailto:lansira.dev@gmail.com">lansira.dev@gmail.com</a>. We
            welcome your input and will make every effort to respond promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
