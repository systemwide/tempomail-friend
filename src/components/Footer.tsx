import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Ten Minute Emails</h3>
            <p className="text-sm text-gray-500">
              Privacy-first disposable email addresses. No signup required.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-500 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-primary">About</Link></li>
              <li><Link to="/features" className="text-sm text-gray-500 hover:text-primary">Features</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-500 hover:text-primary">Blog</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2024 Ten Minute Emails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
