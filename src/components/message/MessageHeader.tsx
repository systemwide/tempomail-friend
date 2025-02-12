
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { Message } from '@/types/database';

interface MessageHeaderProps {
  message: Message;
  onBack: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  onClose: () => void;
  t: {
    backToInbox: string;
  };
}

const MessageHeader = ({
  message,
  onBack,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  onClose,
  t,
}: MessageHeaderProps) => {
  return (
    <div className="p-4 border-b border-gray-100 bg-white/40">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center text-sm text-primary hover:text-primary/80"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t.backToInbox}
        </button>
        <div className="flex items-center space-x-2">
          <button
            onClick={onPrevious}
            className="p-1 hover:bg-primary/10 rounded transition-colors disabled:opacity-50"
            disabled={!hasPrevious}
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
          </button>
          <button
            onClick={onNext}
            className="p-1 hover:bg-primary/10 rounded transition-colors disabled:opacity-50"
            disabled={!hasNext}
          >
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-primary/10 rounded transition-colors"
          >
            <X className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {message.subject}
      </h3>
      <div className="text-sm text-gray-600 mb-4">
        From: {message.sender}
        <br />
        Date: {new Date(message.received_at).toLocaleString()}
      </div>
    </div>
  );
};

export default MessageHeader;
