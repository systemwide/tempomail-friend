
import { Mail } from 'lucide-react';
import { cn } from "@/lib/utils";
import type { Message } from '@/types/database';

interface MessageListItemProps {
  message: Message;
  isSelected: boolean;
  onClick: () => void;
}

const MessageListItem = ({ message, isSelected, onClick }: MessageListItemProps) => {
  return (
    <div
      className={cn(
        "p-4 hover:bg-white/40 transition-colors duration-200 cursor-pointer",
        isSelected && "bg-white/60"
      )}
      onClick={onClick}
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
  );
};

export default MessageListItem;
