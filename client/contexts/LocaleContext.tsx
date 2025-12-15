import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, supportedLocales } from '@/lib/i18n';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return defaultLocale;
    
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && supportedLocales.includes(saved)) {
      return saved;
    }
    
    // Detecta idioma do navegador
    const browserLang = navigator.language;
    if (browserLang.startsWith('pt')) {
      return 'pt_BR';
    }
    if (browserLang.startsWith('en')) {
      return 'en';
    }
    
    return defaultLocale;
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale === 'pt_BR' ? 'pt-BR' : 'en';
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

