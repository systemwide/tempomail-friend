
import { useState, useEffect } from 'react';
import { Copy, RefreshCw, Timer } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import type { Address } from '@/types/database';

interface EmailBoxProps {
  onAddressChange?: (addressId: string | null) => void;
}

const EmailBox = ({ onAddressChange }: EmailBoxProps) => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [currentAddressId, setCurrentAddressId] = useState<string | null>(null);
  const { toast } = useToast();

  const generateEmail = async () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    const newEmail = `${randomString}@tenminuteemails.com`;
    
    // Calculate expiration time (10 minutes from now)
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);

    // Insert new address into Supabase
    const { data, error } = await supabase
      .from('addresses')
      .insert([
        {
          email: newEmail,
          expires_at: expiresAt.toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating email address:', error);
      toast({
        title: "Error",
        description: "Failed to generate email address. Please try again.",
      });
      return;
    }

    setEmail(newEmail);
    setCurrentAddressId(data.id);
    onAddressChange?.(data.id);
    setTimeLeft(600); // Reset timer when generating new email
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard",
      description: "The email address has been copied to your clipboard.",
    });
  };

  const resetTimer = async () => {
    if (!currentAddressId) return;

    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);

    const { error } = await supabase
      .from('addresses')
      .update({ expires_at: expiresAt.toISOString() })
      .eq('id', currentAddressId);

    if (error) {
      console.error('Error resetting timer:', error);
      toast({
        title: "Error",
        description: "Failed to reset timer. Please try again.",
      });
      return;
    }

    setTimeLeft(600);
    toast({
      title: "Timer Reset",
      description: "Email expiration timer has been reset to 10 minutes.",
    });
  };

  useEffect(() => {
    generateEmail();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          generateEmail(); // Generate new email when timer expires
          return 600;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

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
        
        <div className="flex items-center justify-between bg-white/40 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center space-x-2">
            <Timer className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium text-gray-800">
              Expires in: {formatTime(timeLeft)}
            </span>
          </div>
          <button
            onClick={resetTimer}
            className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200"
            aria-label="Reset timer"
          >
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Reset Timer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailBox;
