/**
 * Theme Manager - Design System Master
 * Gerencia temas light/dark com persistência e auto-detect
 */

export type Theme = 'light' | 'dark';

class ThemeManager {
  private prefersDark: MediaQueryList | null = null;

  init() {
    if (typeof window === 'undefined') return;

    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const theme = savedTheme || (this.prefersDark.matches ? 'dark' : 'light');

    this.setTheme(theme);

    this.prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme: Theme) {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    // Remove classes antigas
    root.classList.remove('light', 'dark');
    
    // Adiciona nova classe
    root.classList.add(theme);
    
    // Atualiza data-theme para compatibilidade
    root.setAttribute('data-theme', theme);
    
    // Persiste no localStorage
    localStorage.setItem('theme', theme);

    // Atualiza meta theme-color para mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      const color = theme === 'dark' ? '#0A0A0A' : '#FFFFFF';
      metaTheme.setAttribute('content', color);
    }

    // Dispatch evento customizado
    window.dispatchEvent(
      new CustomEvent('themechange', { detail: { theme } })
    );
  }

  toggle() {
    const current = this.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  getTheme(): Theme {
    if (typeof document === 'undefined') return 'light';
    
    const root = document.documentElement;
    const dataTheme = root.getAttribute('data-theme');
    const classTheme = root.classList.contains('dark') ? 'dark' : 'light';
    
    return (dataTheme as Theme) || classTheme || 'light';
  }
}

export const themeManager = new ThemeManager();

// Inicializa automaticamente
if (typeof window !== 'undefined') {
  themeManager.init();
}

