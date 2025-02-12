
import { X } from 'lucide-react';
import type { Message } from '@/types/database';

interface MessageContentProps {
  message: Message;
  selectedUrl: string | null;
  onUrlClose: () => void;
  translating: boolean;
  translatedContent: string | null;
  currentLanguage: string;
  t: {
    translating: string;
    original: string;
    translated: string;
  };
}

const MessageContent = ({
  message,
  selectedUrl,
  onUrlClose,
  translating,
  translatedContent,
  currentLanguage,
  t,
}: MessageContentProps) => {
  if (selectedUrl) {
    return (
      <div className="relative h-full">
        <div className="absolute top-0 left-0 right-0 bg-white/90 p-2 border-b flex items-center justify-between">
          <span className="text-sm truncate flex-1 mr-4">{selectedUrl}</span>
          <button
            onClick={onUrlClose}
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
          {t.translating}
        </div>
      ) : translatedContent && currentLanguage !== 'en' ? (
        <>
          <div className="mb-4 pb-4 border-b">
            <div className="text-xs text-gray-500 mb-2">{t.original}:</div>
            {message.body}
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-2">{t.translated}:</div>
            {translatedContent}
          </div>
        </>
      ) : (
        message.body
      )}
    </div>
  );
};

export default MessageContent;
