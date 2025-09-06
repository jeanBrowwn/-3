
import React from 'react';
import { STEPS } from '../constants';
import { useTranslation, TranslationKey } from '../i18n/I18nContext';

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const { t } = useTranslation();
  return (
    <aside className="w-80 bg-gray-900/50 p-6 rounded-r-2xl h-full overflow-y-auto">
      <h2 className="text-xl font-bold text-sky-400 mb-6">{t('processSteps')}</h2>
      <nav>
        <ol className="space-y-4">
          {STEPS.map((stepInfo) => (
            <li key={stepInfo.step} className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= stepInfo.step
                      ? 'bg-sky-500 border-sky-500 text-white'
                      : 'bg-gray-700 border-gray-600 text-gray-400'
                  }`}
                >
                  <span className="font-bold">{stepInfo.step}</span>
                </div>
                {stepInfo.step < STEPS.length && (
                  <div className={`w-0.5 h-12 mt-1 ${currentStep > stepInfo.step ? 'bg-sky-500' : 'bg-gray-600'}`}></div>
                )}
              </div>
              <div>
                <h3 className={`font-semibold transition-colors duration-300 ${
                  currentStep === stepInfo.step ? 'text-sky-300' : 'text-gray-300'
                }`}>
                  {t(stepInfo.titleKey as TranslationKey)}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{t(stepInfo.descriptionKey as TranslationKey)}</p>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};
