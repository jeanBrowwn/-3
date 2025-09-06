
import React from 'react';
import { Author, type Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const AILogo: React.FC = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
    AI
  </div>
);

const UserLogo: React.FC = () => (
    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
      U
    </div>
  );

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.author === Author.USER;

  return (
    <div className={`flex items-start gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <AILogo />}
      <div
        className={`max-w-2xl p-4 rounded-2xl shadow-md ${
          isUser
            ? 'bg-sky-600 text-white rounded-br-none'
            : 'bg-gray-700/80 backdrop-blur-sm text-gray-200 rounded-bl-none'
        }`}
      >
        <div className="prose prose-invert prose-sm max-w-none prose-p:my-2 prose-headings:my-3 prose-li:my-1">
            {message.content}
        </div>
      </div>
      {isUser && <UserLogo />}
    </div>
  );
};
