
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { getTranslation } from "@/lib/translations";
import type { Message } from '@/types/database';
import MessageHeader from './message/MessageHeader';
import MessageContent from './message/MessageContent';
import MessageListItem from './message/MessageListItem';

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

  const t = getTranslation(currentLanguage);

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

    // Poll every 15 seconds instead of using Realtime WebSockets
    const interval = setInterval(fetchMessages, 15000);

    return () => {
      clearInterval(interval);
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

  if (loading) {
    return (
      <div className="glass mt-6 rounded-lg w-full max-w-xl mx-auto fade-in p-4 text-center">
        {t.loading}
      </div>
    );
  }

  return (
    <div className="glass mt-6 rounded-lg w-full max-w-xl mx-auto fade-in">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">{t.inbox}</h2>
      </div>
      
      {selectedMessage ? (
        <div className="fade-in">
          <MessageHeader
            message={selectedMessage}
            onBack={() => {
              setSelectedMessageId(null);
              setSelectedUrl(null);
            }}
            onPrevious={() => {
              const currentIndex = messages.findIndex(m => m.id === selectedMessageId);
              const prevMessage = messages[currentIndex + 1];
              if (prevMessage) {
                setSelectedMessageId(prevMessage.id);
                setSelectedUrl(null);
              }
            }}
            onNext={() => {
              const currentIndex = messages.findIndex(m => m.id === selectedMessageId);
              const nextMessage = messages[currentIndex - 1];
              if (nextMessage) {
                setSelectedMessageId(nextMessage.id);
                setSelectedUrl(null);
              }
            }}
            hasPrevious={messages.findIndex(m => m.id === selectedMessageId) < messages.length - 1}
            hasNext={messages.findIndex(m => m.id === selectedMessageId) > 0}
            onClose={() => {
              setSelectedMessageId(null);
              setSelectedUrl(null);
            }}
            t={t}
          />
          <ScrollArea className="h-[calc(100vh-300px)] min-h-[400px] bg-white">
            <MessageContent
              message={selectedMessage}
              selectedUrl={selectedUrl}
              onUrlClose={() => setSelectedUrl(null)}
              translating={translating}
              translatedContent={translatedContent}
              currentLanguage={currentLanguage}
              t={t}
            />
          </ScrollArea>
        </div>
      ) : (
        <ScrollArea className="h-[400px]">
          <div className="divide-y divide-gray-100">
            {messages.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                {t.noMessages}
              </div>
            ) : (
              messages.map((message) => (
                <MessageListItem
                  key={message.id}
                  message={message}
                  isSelected={selectedMessageId === message.id}
                  onClick={() => handleMessageClick(message.id)}
                />
              ))
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default MessageList;
