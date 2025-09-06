
import React, { useState, useEffect, useCallback } from 'react';
import type { Message } from './types';
import { Author } from './types';
import { StepIndicator } from './components/StepIndicator';
import { ChatWindow } from './components/ChatWindow';
import { ChatInput } from './components/ChatInput';
import { getAiResponse } from './services/aiService';
import { ImageComparisonSlider } from './components/ImageComparisonSlider';
import { useTranslation } from './i18n/I18nContext';

const App: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [conceptImage, setConceptImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = t('mainTitle');
  }, [t]);
  
  const addMessage = (author: Author, content: React.ReactNode) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), author, content }]);
  };

  const processAiResponse = useCallback(async (step: number, userInput: string, file?: File) => {
    setIsProcessing(true);
    try {
      const aiResponseText = await getAiResponse(step, userInput, t, file);
      
      if (step === 6 && userInput.toLowerCase().includes('edit')) {
          setCurrentStep(7);
          addMessage(Author.AI, aiResponseText);
      } else {
        addMessage(Author.AI, aiResponseText);
        if (step < 7) {
            setCurrentStep(step + 1);
        }
      }

    } catch (error) {
      console.error("Error getting AI response:", error);
      addMessage(Author.AI, "I'm sorry, something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  }, [t]);

  useEffect(() => {
    // Prevent re-running on language change
    if (messages.length > 0) return;
    // Initial welcome message
    processAiResponse(0, 'Init');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processAiResponse]);

  const handleSendMessage = (message: string, file?: File) => {
    let content: React.ReactNode = message;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      content = (
        <div>
          <p>{message}</p>
          <img src={imageUrl} alt={file.name} className="mt-2 rounded-lg max-w-xs" />
        </div>
      );
      if (currentStep === 1) setOriginalImage(imageUrl);
      if (currentStep === 3) setConceptImage(imageUrl);
    }

    addMessage(Author.USER, content);
    processAiResponse(currentStep, message, file);
  };
  
  const getInputPlaceholder = () => {
    switch(currentStep) {
        case 1: return t('placeholderStep1');
        case 3: return t('placeholderStep3');
        case 7: return t('placeholderStep7');
        default: return t('placeholderDefault');
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <div className="flex h-screen font-sans bg-gray-800">
      <StepIndicator currentStep={currentStep} />
      <main className="flex-1 flex flex-col h-screen">
        <header className="flex justify-between items-center p-4 bg-gray-900/50 border-b border-gray-700 flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-200">{t('mainTitle')}</h1>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{t('language')}:</span>
                <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200 bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                    {language === 'en' ? '한국어' : 'English'}
                </button>
            </div>
        </header>

        {currentStep === 7 ? (
            <div className='flex-1 flex flex-col p-6 overflow-y-auto'>
                <h1 className='text-2xl font-bold text-sky-400 mb-4 text-center'>{t('interactiveEditingTitle')}</h1>
                <p className='text-gray-400 mb-6 text-center'>{t('interactiveEditingDescription')}</p>
                <ImageComparisonSlider 
                    beforeImage={originalImage || "https://picsum.photos/1600/900?random=1"} 
                    afterImage={conceptImage || "https://picsum.photos/1600/900?random=2"}
                />
            </div>
        ) : (
            <ChatWindow messages={messages} isProcessing={isProcessing} />
        )}
        <ChatInput onSendMessage={handleSendMessage} isProcessing={isProcessing} placeholder={getInputPlaceholder()}/>
      </main>
    </div>
  );
};

export default App;
