export interface Answer {
  step1?: 'yes' | 'no';
  step2?: string;
  step3?: string;
  timestamp: string;
  userAgent: string;
}