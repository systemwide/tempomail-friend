
import { Mail } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import type { Message } from '@/types/database';

const MessageList = () => {
  const { toast } = useToast();
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .order('received_at', { ascending: false });

        if (error) throw error;
        setMessages(data || []);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: "Error",
          description: "Failed to load messages. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    // Set up real-time subscription
    const subscription = supabase
      .channel('messages')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'messages' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setMessages(prev => [payload.new as Message, ...prev]);
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  const handleMessageClick = (messageId: string) => {
    setSelectedMessageId(messageId);
    const message = messages.find(m => m.id === messageId);
    if (message) {
      toast({
        title: message.subject,
        description: message.body,
      });
    }
  };

  if (loading) {
    return (
      <div className="glass mt-6 rounded-lg w-full max-w-xl mx-auto fade-in p-4 text-center">
        Loading messages...
      </div>
    );
  }

  return (
    <div className="glass mt-6 rounded-lg w-full max-w-xl mx-auto fade-in">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Inbox</h2>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="divide-y divide-gray-100">
          {messages.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No messages yet
            </div>
          ) : (
            messages.map((message) => (
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
                    <p className="text-sm text-gray-500 mt-1 truncate">{message.body}</p>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(message.received_at).toLocaleString()}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageList;
