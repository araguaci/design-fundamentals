import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { themeManager, type Theme } from "@/lib/theme-manager";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(themeManager.getTheme());

    const handleThemeChange = (e: CustomEvent<{ theme: Theme }>) => {
      setTheme(e.detail.theme);
    };

    window.addEventListener('themechange', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange as EventListener);
    };
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => themeManager.toggle()}
      className="p-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}

