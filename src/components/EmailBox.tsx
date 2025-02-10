
import { useState, useEffect } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const EmailBox = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const generateEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    setEmail(`${randomString}@tempomail.temp`);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard",
      description: "The email address has been copied to your clipboard.",
    });
  };

  useEffect(() => {
    generateEmail();
  }, []);

  return (
    <div className="glass p-6 rounded-lg w-full max-w-xl mx-auto slide-up">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between bg-white/40 rounded-lg p-4 border border-gray-100">
          <span className="text-lg font-medium text-gray-800">{email}</span>
          <div className="flex space-x-2">
            <button
              onClick={copyEmail}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
              aria-label="Copy email"
            >
              <Copy className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={generateEmail}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
              aria-label="Generate new email"
            >
              <RefreshCw className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBox;
