
import { Mail } from 'lucide-react';

const MessageList = () => {
  // Placeholder messages for demo
  const messages = [
    {
      id: 1,
      subject: "Welcome to TempMail",
      sender: "system@tempomail.temp",
      preview: "Thank you for using our service...",
      time: "Just now"
    },
  ];

  return (
    <div className="glass mt-6 rounded-lg w-full max-w-xl mx-auto fade-in">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Inbox</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {messages.map((message) => (
          <div
            key={message.id}
            className="p-4 hover:bg-white/40 transition-colors duration-200 cursor-pointer"
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
    </div>
  );
};

export default MessageList;
