
import { X, Paperclip, Download } from 'lucide-react';
import type { Message, Attachment } from '@/types/database';

interface MessageContentProps {
  message: Message;
  selectedUrl: string | null;
  onUrlClose: () => void;
  translating: boolean;
  translatedContent: string | null;
  currentLanguage: string;
  attachments?: Attachment[];
  t: {
    translating: string;
    original: string;
    translated: string;
  };
}

const SUPABASE_URL = "https://cxebsmeahtoxaviuttgr.supabase.co";

function formatFileSize(bytes: number | null) {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getAttachmentUrl(storagePath: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/email-attachments/${storagePath}`;
}

function isImageType(contentType: string | null) {
  return contentType?.startsWith('image/') ?? false;
}

const MessageContent = ({
  message,
  selectedUrl,
  onUrlClose,
  translating,
  translatedContent,
  currentLanguage,
  attachments = [],
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
    <div className="p-4">
      <div className="font-mono text-sm whitespace-pre-wrap break-words max-w-full overflow-x-auto">
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

      {attachments.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Paperclip className="w-4 h-4" />
            <span>{attachments.length} attachment{attachments.length > 1 ? 's' : ''}</span>
          </div>
          <div className="space-y-2">
            {attachments.map((attachment) => {
              const fileUrl = getAttachmentUrl(attachment.storage_path);
              const isImage = isImageType(attachment.content_type);

              return (
                <div key={attachment.id}>
                  {isImage && (
                    <div className="mb-2 rounded-lg overflow-hidden border border-gray-100">
                      <img
                        src={fileUrl}
                        alt={attachment.filename}
                        className="max-w-full max-h-64 object-contain"
                      />
                    </div>
                  )}
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={attachment.filename}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                  >
                    <Download className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{attachment.filename}</div>
                      <div className="text-xs text-gray-400">
                        {formatFileSize(attachment.size)}
                        {attachment.content_type && ` · ${attachment.content_type}`}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageContent;
