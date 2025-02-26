
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
