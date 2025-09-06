export enum Author {
  USER = 'user',
  AI = 'ai',
}

export interface Message {
  id: string;
  author: Author;
  content: React.ReactNode;
}

export interface StepInfo {
  step: number;
  titleKey: string;
  descriptionKey: string;
}
