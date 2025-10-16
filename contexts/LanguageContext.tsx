import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang === 'ar' || savedLang === 'en') ? savedLang : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const changeLanguage = (lang: Language) => {
    // Only reload if the language is actually changing
    if (language !== lang) {
      localStorage.setItem('language', lang);
      window.location.reload();
    }
  };

  const t = (key: string): string => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return translations[language][key] || key;
  };
  
  const value = useMemo(() => ({ language, changeLanguage, t }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
