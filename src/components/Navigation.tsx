
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
}

const Navigation = ({ currentLanguage = "en", onLanguageChange }: NavigationProps) => {
  const location = useLocation();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ];

  const LANGUAGES = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Ten Minute Emails
          </Link>
          
          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.href.charAt(1).toUpperCase() + link.href.slice(2)}
              </Link>
            ))}
            
            {onLanguageChange && (
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>{LANGUAGES.find(lang => lang.code === currentLanguage)?.name}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => onLanguageChange(lang.code)}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 text-xs text-gray-500 pb-2">
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
