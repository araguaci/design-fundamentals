import { useLocale } from '@/contexts/LocaleContext';
import { t } from '@/lib/i18n';

export function useTranslation() {
  const { locale } = useLocale();
  
  return {
    t: (key: string) => t(locale, key),
    locale,
  };
}

