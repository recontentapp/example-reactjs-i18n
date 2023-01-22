import { resources, defaultNamespace } from './i18n/config';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNamespace;
    resources: typeof resources['en-GB'];
  };
};
