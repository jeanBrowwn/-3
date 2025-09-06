
import React, { useState, useRef } from 'react';
import { SendIcon, UploadIcon } from './IconComponents';

interface ChatInputProps {
  onSendMessage: (message: string, file?: File) => void;
  isProcessing: boolean;
  placeholder: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isProcessing, placeholder }) => {
  const [text, setText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isProcessing) {
      onSendMessage(text);
      setText('');
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSendMessage(`Uploaded file: ${file.name}`, file);
      // Reset file input
      if(fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder={placeholder}
          disabled={isProcessing}
          rows={1}
          className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 pr-24 pl-12 resize-none focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-200"
        />
        <button
          type="button"
          onClick={triggerFileUpload}
          disabled={isProcessing}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-400 disabled:opacity-50 transition-colors"
        >
          <UploadIcon className="w-6 h-6" />
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
        </button>
        <button
          type="submit"
          disabled={isProcessing || !text.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-sky-600 text-white rounded-md p-2 hover:bg-sky-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? (
             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <SendIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
};
