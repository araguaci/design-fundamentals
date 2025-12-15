import { useState } from "react";
import { Languages } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { Locale, supportedLocales } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = {
  pt_BR: 'PT',
  en: 'EN',
};

const localeNames: Record<Locale, string> = {
  pt_BR: 'Português',
  en: 'English',
};

export default function LocaleSelector() {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex items-center gap-2"
        aria-label="Select language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Languages className="h-5 w-5" />
        <span className="text-sm font-medium hidden sm:inline">
          {localeLabels[locale]}
        </span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-lg shadow-lg z-50">
            {supportedLocales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocale(loc);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  locale === loc
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                {localeLabels[loc]} - {localeNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

