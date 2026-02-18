export interface WCAGCriteria {
  id: string;
  level: 'A' | 'AA' | 'AAA';
  title: string;
  description: string;
}

export interface ARIAAttribute {
  name: string;
  purpose: string;
  usage: string;
}

export interface ComponentDoc {
  id: string;
  name: string;
  description: string;
  wcagCriteria: WCAGCriteria[];
  ariaAttributes: ARIAAttribute[];
  keyboardSupport: {
    key: string;
    action: string;
  }[];
  features: string[];
}
