import { Mail, X, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import type { Message } from '@/types/database';

interface MessageListProps {
  currentAddressId?: string | null;
  currentLanguage?: string;
}

const MessageList = ({ currentAddressId, currentLanguage = 'en' }: MessageListProps) => {
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!currentAddressId) {
        setMessages([]);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .eq('address_id', currentAddressId)
          .order('received_at', { ascending: false });

        if (error) throw error;
        setMessages(data || []);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    const subscription = supabase
      .channel('messages')
      .on('postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'messages',
          filter: `address_id=eq.${currentAddressId}`
        },
        (payload) => {
          setMessages(prev => [payload.new as Message, ...prev]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [currentAddressId]);

  useEffect(() => {
    if (selectedMessageId && currentLanguage !== 'en') {
      const translateMessage = async () => {
        const message = messages.find(m => m.id === selectedMessageId);
        if (!message) return;

        setTranslating(true);
        try {
          const { data, error } = await supabase.functions.invoke('translate', {
            body: {
              text: message.body,
              targetLang: currentLanguage,
            },
          });

          if (error) throw error;
          setTranslatedContent(data.translatedText);
        } catch (error) {
          console.error('Translation error:', error);
          setTranslatedContent(null);
        } finally {
          setTranslating(false);
        }
      };

      translateMessage();
    } else {
      setTranslatedContent(null);
    }
  }, [selectedMessageId, currentLanguage, messages]);

  useEffect(() => {
    if (selectedMessageId) {
      const message = messages.find(m => m.id === selectedMessageId);
      if (message) {
        const urlMatch = message.body.match(/(https?:\/\/[^\s]+)/);
        if (urlMatch) {
          setSelectedUrl(urlMatch[0]);
        }
      }
    } else {
      setSelectedUrl(null);
    }
  }, [selectedMessageId, messages]);

  const handleMessageClick = (messageId: string) => {
    setSelectedMessageId(messageId === selectedMessageId ? null : messageId);
  };

  const selectedMessage = messages.find(m => m.id === selectedMessageId);

  const renderMessageContent = (message: Message) => {
    if (selectedUrl) {
      return (
        <div className="relative h-full">
          <div className="absolute top-0 left-0 right-0 bg-white/90 p-2 border-b flex items-center justify-between">
            <span className="text-sm truncate flex-1 mr-4">{selectedUrl}</span>
            <button
              onClick={() => setSelectedUrl(null)}
              className="p-1 hover:bg-primary/10 rounded transition-colors"
            >
              <X className="w-4 h-4 text-primary" />
            </button>
          </div>
          <iframe
            src={selectedUrl}
            className="w-full h-[calc(100vh-300px)] min-h-[400px] border-0"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      );
    }

    return (
      <div className="p-4 font-mono text-sm whitespace-pre-wrap break-words max-w-full overflow-x-auto">
        {translating ? (
          <div className="text-center text-gray-500">
            Translating...
          </div>
        ) : translatedContent && currentLanguage !== 'en' ? (
          <>
            <div className="mb-4 pb-4 border-b">
              <div className="text-xs text-gray-500 mb-2">Original:</div>
              {message.body}
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-2">Translated:</div>
              {translatedContent}
            </div>
          </>
        ) : (
          message.body
        )}
      </div>
    );
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
      
      {selectedMessage ? (
        <div className="fade-in">
          <div className="p-4 border-b border-gray-100 bg-white/40">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => {
                  setSelectedMessageId(null);
                  setSelectedUrl(null);
                }}
                className="flex items-center text-sm text-primary hover:text-primary/80"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Inbox
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    const currentIndex = messages.findIndex(m => m.id === selectedMessageId);
                    const prevMessage = messages[currentIndex + 1];
                    if (prevMessage) {
                      setSelectedMessageId(prevMessage.id);
                      setSelectedUrl(null);
                    }
                  }}
                  className="p-1 hover:bg-primary/10 rounded transition-colors disabled:opacity-50"
                  disabled={messages.findIndex(m => m.id === selectedMessageId) === messages.length - 1}
                >
                  <ArrowLeft className="w-4 h-4 text-primary" />
                </button>
                <button
                  onClick={() => {
                    const currentIndex = messages.findIndex(m => m.id === selectedMessageId);
                    const nextMessage = messages[currentIndex - 1];
                    if (nextMessage) {
                      setSelectedMessageId(nextMessage.id);
                      setSelectedUrl(null);
                    }
                  }}
                  className="p-1 hover:bg-primary/10 rounded transition-colors disabled:opacity-50"
                  disabled={messages.findIndex(m => m.id === selectedMessageId) === 0}
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </button>
                <button
                  onClick={() => {
                    setSelectedMessageId(null);
                    setSelectedUrl(null);
                  }}
                  className="p-1 hover:bg-primary/10 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-primary" />
                </button>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedMessage.subject}
            </h3>
            <div className="text-sm text-gray-600 mb-4">
              From: {selectedMessage.sender}
              <br />
              Date: {new Date(selectedMessage.received_at).toLocaleString()}
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-300px)] min-h-[400px] bg-white">
            {renderMessageContent(selectedMessage)}
          </ScrollArea>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MessageList;
