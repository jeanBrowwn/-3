
import React, { useRef, useEffect } from 'react';
import type { Message } from '../types';
import { MessageBubble } from './MessageBubble';

interface ChatWindowProps {
  messages: Message[];
  isProcessing: boolean;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isProcessing }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isProcessing && (
            <div className="flex items-start gap-3 my-4 justify-start">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                    AI
                </div>
                <div className="bg-gray-700/80 p-4 rounded-2xl rounded-bl-none shadow-md">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-0"></div>
                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-150"></div>
                        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={scrollRef}></div>
      </div>
    </div>
  );
};
