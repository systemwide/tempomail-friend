
import { Mail } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const MessageList = () => {
  const { toast } = useToast();
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);

  // Placeholder messages for demo
  const messages = [
    {
      id: 1,
      subject: "Welcome to TempMail",
      sender: "system@tempomail.temp",
      preview: "Thank you for using our service...",
      time: "Just now",
      body: "Welcome to TempMail! This is your temporary email service. Feel free to use this address for signing up to services securely."
    },
    {
      id: 2,
      subject: "Getting Started Guide",
      sender: "help@tempomail.temp",
      preview: "Here's how to use our service effectively...",
      time: "5 mins ago",
      body: "Learn how to make the most of your temporary email address with our quick start guide. Stay secure and spam-free!"
    },
  ];

  const handleMessageClick = (messageId: number) => {
    setSelectedMessageId(messageId);
    const message = messages.find(m => m.id === messageId);
    if (message) {
      toast({
        title: message.subject,
        description: message.body,
      });
    }
  };

  return (
    <div className="glass mt-6 rounded-lg w-full max-w-xl mx-auto fade-in">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Inbox</h2>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="divide-y divide-gray-100">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "p-4 hover:bg-white/40 transition-colors duration-200 cursor-pointer",
                selectedMessageId === message.id && "bg-white/60"
              )}
              onClick={() => handleMessageClick(message.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {message.subject}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{message.sender}</p>
                  <p className="text-sm text-gray-500 mt-1">{message.preview}</p>
                </div>
                <div className="text-xs text-gray-500">{message.time}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageList;
