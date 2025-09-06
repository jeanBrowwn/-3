
import React from 'react';

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a2.25 2.25 0 000 3.182l2.472 2.472a2.25 2.25 0 003.182 0l10.94-10.94a2.25 2.25 0 000-3.182l-2.472-2.472zm-2.032 1.357L18.088 6.17l-10.94 10.94-1.15 1.15a.75.75 0 000 1.06l2.473 2.473a.75.75 0 001.06 0l10.94-10.94-1.15-1.15-1.15-1.15-1.357 1.357a.75.75 0 01-1.06 0z"
      clipRule="evenodd"
    />
    <path d="M9 3.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z" />
    <path d="M12.75 5.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z" />
    <path d="M6 6.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 016 6.75z" />
  </svg>
);
