# DESIGN SYSTEM PROFISSIONAL - MASTER GUIDE

> Sistema de design de classe mundial baseado nas melhores práticas de Stripe, Linear, Notion, Vercel, Figma, Material Design 3, Apple HIG e Shopify Polaris.

**CRÍTICO**: Este guia garante contraste adequado e acessibilidade em TODOS os temas (light/dark). Zero tolerância para texto invisível ou ilegível.

---

## 📖 ÍNDICE

1. [Princípios Fundamentais](#-princípios-fundamentais)
2. [Sistema de Cores e Temas](#-sistema-de-cores-e-temas)
3. [Tipografia](#️-tipografia)
4. [Espaçamento e Layout](#-espaçamento-e-layout)
5. [Componentes](#-componentes)
6. [Microinterações](#-microinterações)
7. [Acessibilidade](#️-acessibilidade)
8. [Responsividade](#-responsividade)
9. [Performance](#-performance)
10. [Checklist de Implementação](#-checklist-de-implementação)

---

## 🎯 PRINCÍPIOS FUNDAMENTAIS

### Filosofia de Design

**"Form follows function"** - Clareza, eficiência e elegância minimalista

#### Hierarquia Visual
- Clara, consistente e intuitiva em todos os componentes
- Uso de tamanho, peso, cor e espaçamento para criar hierarquia
- Máximo 3 níveis de hierarquia por tela

#### Densidade de Informação
- Balanceada: nem muito densa, nem muito espaçada
- Respira: espaço em branco é conteúdo
- Agrupa elementos relacionados

#### Feedback Imediato
- Toda ação deve ter resposta visual instantânea (< 100ms)
- Estados de loading claros e informativos
- Confirmações visuais de sucesso/erro

#### Microinterações
- Sutis, funcionais e deliciosas
- Animações com propósito, nunca decorativas
- Duração: 150-300ms para UI responsivo

#### Consistência
- Padrões reutilizáveis em toda a aplicação
- Mesmos componentes para mesmas funções
- Terminologia uniforme

---

## 🎨 SISTEMA DE CORES E TEMAS

### Variáveis CSS Semânticas (Contrast-Safe)

**CRÍTICO**: Use SEMPRE variáveis semânticas, NUNCA valores hard-coded.

```css
:root {
  /* ========================================
     LIGHT MODE (Padrão)
     ======================================== */

  /* === BACKGROUNDS === */
  --bg-primary: #FFFFFF;           /* Fundo principal (cards, modals) */
  --bg-secondary: #FAFAFA;         /* Fundo da página */
  --bg-tertiary: #F5F5F5;          /* Hover states, disabled */
  --bg-elevated: #FFFFFF;          /* Elementos flutuantes (dropdowns) */
  --bg-overlay: rgba(0, 0, 0, 0.5); /* Overlay de modals */

  /* === TEXT COLORS (Contraste Garantido) === */
  --text-primary: #0A0A0A;         /* Texto principal - Contraste 16:1 */
  --text-secondary: #525252;       /* Texto secundário - Contraste 7:1 */
  --text-tertiary: #737373;        /* Texto terciário - Contraste 4.5:1 */
  --text-disabled: #A3A3A3;        /* Texto desabilitado - Contraste 3:1 */
  --text-inverse: #FFFFFF;         /* Texto em fundos escuros */
  --text-placeholder: #A3A3A3;     /* Placeholders */
  --text-link: #0066FF;            /* Links */
  --text-link-hover: #0052CC;      /* Links hover */

  /* === BORDERS === */
  --border-primary: #E5E5E5;       /* Borders padrão */
  --border-secondary: #D4D4D4;     /* Borders com ênfase */
  --border-focus: #0066FF;         /* Border em foco */
  --border-error: #DC2626;         /* Border de erro */
  --border-success: #059669;       /* Border de sucesso */
  --border-warning: #D97706;       /* Border de aviso */

  /* === BRAND COLORS === */
  --brand-primary: #0066FF;        /* Cor primária da marca */
  --brand-primary-hover: #0052CC;  /* Primary hover */
  --brand-primary-active: #0041A8; /* Primary active */
  --brand-primary-light: #E6F0FF;  /* Primary background */

  /* === SEMANTIC COLORS === */
  --color-success: #10B981;        /* Feedback positivo */
  --color-success-hover: #059669;
  --color-success-light: #D1FAE5;
  --color-success-dark: #047857;

  --color-warning: #F59E0B;        /* Avisos */
  --color-warning-hover: #D97706;
  --color-warning-light: #FEF3C7;
  --color-warning-dark: #B45309;

  --color-error: #EF4444;          /* Erros */
  --color-error-hover: #DC2626;
  --color-error-light: #FEE2E2;
  --color-error-dark: #B91C1C;

  --color-info: #3B82F6;           /* Informações */
  --color-info-hover: #2563EB;
  --color-info-light: #DBEAFE;
  --color-info-dark: #1D4ED8;

  /* === FORM CONTROLS === */
  --input-bg: #FFFFFF;
  --input-bg-hover: #FAFAFA;
  --input-bg-disabled: #F5F5F5;
  --input-border: #D4D4D4;
  --input-border-hover: #A3A3A3;
  --input-border-focus: #0066FF;
  --input-text: #0A0A0A;           /* SEMPRE legível */
  --input-placeholder: #737373;

  --label-text: #0A0A0A;           /* SEMPRE legível */
  --label-required: #DC2626;
  --label-optional: #737373;

  /* === SHADOWS === */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.2);

  /* === INTERACTIVE STATES === */
  --state-hover: rgba(0, 0, 0, 0.04);
  --state-active: rgba(0, 0, 0, 0.08);
  --state-focus: rgba(0, 102, 255, 0.12);
  --state-selected: rgba(0, 102, 255, 0.08);
}

/* ========================================
   DARK MODE - Contraste Mantido
   ======================================== */
[data-theme="dark"] {
  /* === BACKGROUNDS === */
  --bg-primary: #171717;
  --bg-secondary: #0A0A0A;
  --bg-tertiary: #262626;
  --bg-elevated: #1F1F1F;
  --bg-overlay: rgba(0, 0, 0, 0.7);

  /* === TEXT COLORS (Contraste Mantido) === */
  --text-primary: #FAFAFA;         /* Contraste 15:1 */
  --text-secondary: #D4D4D4;       /* Contraste 8:1 */
  --text-tertiary: #A3A3A3;        /* Contraste 4.6:1 */
  --text-disabled: #737373;        /* Contraste 3.2:1 */
  --text-inverse: #0A0A0A;
  --text-placeholder: #737373;
  --text-link: #3B82F6;
  --text-link-hover: #60A5FA;

  /* === BORDERS === */
  --border-primary: #2A2A2A;
  --border-secondary: #404040;
  --border-focus: #3B82F6;
  --border-error: #EF4444;
  --border-success: #10B981;
  --border-warning: #F59E0B;

  /* === BRAND COLORS === */
  --brand-primary: #3B82F6;
  --brand-primary-hover: #60A5FA;
  --brand-primary-active: #2563EB;
  --brand-primary-light: #1E3A8A;

  /* === SEMANTIC COLORS === */
  --color-success: #10B981;
  --color-success-hover: #34D399;
  --color-success-light: #064E3B;
  --color-success-dark: #059669;

  --color-warning: #F59E0B;
  --color-warning-hover: #FBBF24;
  --color-warning-light: #78350F;
  --color-warning-dark: #D97706;

  --color-error: #EF4444;
  --color-error-hover: #F87171;
  --color-error-light: #7F1D1D;
  --color-error-dark: #DC2626;

  --color-info: #3B82F6;
  --color-info-hover: #60A5FA;
  --color-info-light: #1E3A8A;
  --color-info-dark: #2563EB;

  /* === FORM CONTROLS === */
  --input-bg: #1F1F1F;
  --input-bg-hover: #262626;
  --input-bg-disabled: #262626;
  --input-border: #404040;
  --input-border-hover: #525252;
  --input-border-focus: #3B82F6;
  --input-text: #FAFAFA;          /* SEMPRE legível */
  --input-placeholder: #737373;

  --label-text: #FAFAFA;          /* SEMPRE legível */
  --label-required: #EF4444;
  --label-optional: #A3A3A3;

  /* === SHADOWS === */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.6);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.7);

  /* === INTERACTIVE STATES === */
  --state-hover: rgba(255, 255, 255, 0.08);
  --state-active: rgba(255, 255, 255, 0.12);
  --state-focus: rgba(59, 130, 246, 0.2);
  --state-selected: rgba(59, 130, 246, 0.15);
}

/* Auto-detect preferência do sistema */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    @extend [data-theme="dark"];
  }
}
```

### Theme Toggle (JavaScript)

```javascript
const ThemeManager = {
  init() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (prefersDark.matches ? 'dark' : 'light');

    this.setTheme(theme);

    prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Atualiza meta theme-color para mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      const color = theme === 'dark' ? '#0A0A0A' : '#FFFFFF';
      metaTheme.setAttribute('content', color);
    }

    // Dispatch evento customizado
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  },

  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  },

  getTheme() {
    return document.documentElement.getAttribute('data-theme');
  }
};

// Inicializa ANTES do DOM para evitar flash
ThemeManager.init();
```

---

## ✍️ TIPOGRAFIA

### Font Families

```css
/* Fonts primárias */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Consolas', monospace;
--font-display: 'Cal Sans', var(--font-sans); /* Opcional: títulos especiais */

/* Configuração global */
body {
  font-family: var(--font-sans);
  font-feature-settings: 'ss01', 'ss02', 'cv01', 'cv02'; /* Alternativas estilísticas do Inter */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

code, pre, kbd, samp {
  font-family: var(--font-mono);
  font-feature-settings: 'liga' 1, 'calt' 1; /* Ligatures */
}
```

### Type Scale (Perfect Fourth - 1.333)

```css
/* Font Sizes */
--text-xs: 0.75rem;      /* 12px - labels pequenas, captions */
--text-sm: 0.875rem;     /* 14px - body secundário, helper text */
--text-base: 1rem;       /* 16px - body principal */
--text-lg: 1.125rem;     /* 18px - subtítulos, leads */
--text-xl: 1.25rem;      /* 20px - headings pequenos */
--text-2xl: 1.5rem;      /* 24px - headings médios */
--text-3xl: 1.875rem;    /* 30px - headings grandes */
--text-4xl: 2.25rem;     /* 36px - page titles */
--text-5xl: 3rem;        /* 48px - hero titles */
--text-6xl: 3.75rem;     /* 60px - display titles */
--text-7xl: 4.5rem;      /* 72px - marketing headers */

/* Font Weights */
--font-thin: 100;
--font-extralight: 200;
--font-light: 300;
--font-regular: 400;     /* Texto padrão */
--font-medium: 500;      /* Ênfase leve */
--font-semibold: 600;    /* Headings e labels */
--font-bold: 700;        /* Títulos importantes */
--font-extrabold: 800;
--font-black: 900;

/* Line Heights */
--leading-none: 1;       /* Títulos display */
--leading-tight: 1.25;   /* Headings */
--leading-snug: 1.375;   /* Headings pequenos */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.75; /* Leitura longa */
--leading-loose: 2;      /* Muito espaçado */

/* Letter Spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### Utility Classes

```css
/* Headings */
.heading-1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

.heading-2 {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
}

.heading-3 {
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--text-primary);
}

.heading-4 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--text-primary);
}

/* Body text */
.text-body {
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}

.text-body-sm {
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}

/* Labels */
.text-label {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  color: var(--label-text);
}

.text-label-uppercase {
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* Links */
.text-link {
  color: var(--text-link);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 2px;
  transition: all 150ms ease;

  &:hover {
    color: var(--text-link-hover);
    text-decoration-color: currentColor;
  }
}
```

---

## 📐 ESPAÇAMENTO E LAYOUT

### Spacing Scale (8pt Grid System)

```css
/* Spacing Units */
--spacing-0: 0;
--spacing-1: 0.25rem;   /* 4px  - micro espaços */
--spacing-2: 0.5rem;    /* 8px  - espaços mínimos */
--spacing-3: 0.75rem;   /* 12px - espaços pequenos */
--spacing-4: 1rem;      /* 16px - base unit */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px - seções pequenas */
--spacing-8: 2rem;      /* 32px - seções médias */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px - seções grandes */
--spacing-16: 4rem;     /* 64px - hero sections */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
--spacing-32: 8rem;     /* 128px */

/* Border Radius */
--radius-none: 0;
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px - padrão */
--radius-lg: 0.75rem;   /* 12px - cards */
--radius-xl: 1rem;      /* 16px - modals */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Círculos */
```

### Container System

```css
/* Container padrão */
.container {
  width: 100%;
  max-width: 1280px;  /* 1280px padrão */
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
}

/* Variações */
.container-sm {
  max-width: 640px;
}

.container-md {
  max-width: 768px;
}

.container-lg {
  max-width: 1024px;
}

.container-xl {
  max-width: 1280px;
}

.container-2xl {
  max-width: 1536px;
}

.container-fluid {
  max-width: 100%;
}

/* Responsive padding */
@media (max-width: 640px) {
  .container {
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }
}
```

### Grid System

```css
/* CSS Grid */
.grid {
  display: grid;
  gap: var(--spacing-6);
}

/* Columns */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

/* Auto-fit responsive */
.grid-auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
}

.grid-auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
}

/* Flexbox */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 { gap: var(--spacing-2); }
.gap-4 { gap: var(--spacing-4); }
.gap-6 { gap: var(--spacing-6); }
.gap-8 { gap: var(--spacing-8); }
```

---

## 🧩 COMPONENTES

### 1. BOTÕES (Premium Button System)

#### Anatomia do Botão
```html
<button class="btn btn-primary btn-md">
  <svg class="btn-icon"><!-- ícone --></svg>
  <span class="btn-text">Label</span>
  <svg class="btn-loading"><!-- loading spinner --></svg>
</button>
```

#### CSS Base
```css
.btn {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);

  /* Typography */
  font-family: var(--font-sans);
  font-weight: var(--font-semibold);
  line-height: 1.25;
  text-decoration: none;
  white-space: nowrap;

  /* Appearance */
  border: 1.5px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  user-select: none;

  /* Transition */
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  /* States */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }
}

/* Tamanhos */
.btn-xs {
  height: 28px;
  padding: 0 var(--spacing-2);
  font-size: var(--text-xs);
}

.btn-sm {
  height: 32px;
  padding: 0 var(--spacing-3);
  font-size: var(--text-sm);
}

.btn-md {
  height: 40px;
  padding: 0 var(--spacing-4);
  font-size: var(--text-base);
}

.btn-lg {
  height: 48px;
  padding: 0 var(--spacing-6);
  font-size: var(--text-lg);
}

.btn-xl {
  height: 56px;
  padding: 0 var(--spacing-8);
  font-size: var(--text-xl);
}

/* Variantes */
.btn-primary {
  background: var(--brand-primary);
  color: var(--text-inverse);
  border-color: transparent;
  box-shadow: var(--shadow-sm);

  &:hover:not(:disabled) {
    background: var(--brand-primary-hover);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    background: var(--brand-primary-active);
    transform: translateY(0);
    box-shadow: var(--shadow-xs);
  }
}

.btn-secondary {
  background: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-secondary);

  &:hover:not(:disabled) {
    background: var(--bg-tertiary);
    border-color: var(--border-primary);
  }

  &:active:not(:disabled) {
    background: var(--bg-secondary);
  }
}

.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border-color: transparent;

  &:hover:not(:disabled) {
    background: var(--state-hover);
  }

  &:active:not(:disabled) {
    background: var(--state-active);
  }
}

.btn-danger {
  background: var(--color-error);
  color: var(--text-inverse);
  border-color: transparent;

  &:hover:not(:disabled) {
    background: var(--color-error-hover);
  }

  &:active:not(:disabled) {
    background: var(--color-error-dark);
  }
}

.btn-success {
  background: var(--color-success);
  color: var(--text-inverse);
  border-color: transparent;

  &:hover:not(:disabled) {
    background: var(--color-success-hover);
  }

  &:active:not(:disabled) {
    background: var(--color-success-dark);
  }
}

/* Loading state */
.btn-loading {
  .btn-text {
    visibility: hidden;
  }

  .btn-loading-spinner {
    position: absolute;
    display: block;
    animation: spin 600ms linear infinite;
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Icon only */
.btn-icon-only {
  padding: 0;
  aspect-ratio: 1;

  &.btn-md {
    width: 40px;
  }
}
```

### 2. INPUTS & FORMS (Contrast-Safe)

#### Input Field
```html
<div class="form-field">
  <label class="form-label" for="input-id">
    Nome do Campo
    <span class="form-required">*</span>
  </label>
  <div class="input-wrapper">
    <input
      id="input-id"
      type="text"
      class="form-input"
      placeholder="Digite aqui..."
      aria-label="Nome do Campo"
    />
  </div>
  <p class="form-hint">Texto de ajuda</p>
  <p class="form-error">Mensagem de erro</p>
</div>
```

#### CSS
```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-5);
}

/* Label - SEMPRE visível */
.form-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  color: var(--label-text); /* Contraste garantido */
}

.form-required {
  color: var(--label-required);
  font-size: var(--text-sm);
}

/* Input - SEMPRE legível */
.form-input {
  width: 100%;
  height: 44px;
  padding: var(--spacing-3) var(--spacing-3);

  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--input-text); /* Contraste garantido */

  background: var(--input-bg);
  border: 1.5px solid var(--input-border);
  border-radius: var(--radius-md);

  transition: all 180ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: var(--input-placeholder);
    opacity: 1;
  }

  &:hover:not(:disabled) {
    border-color: var(--input-border-hover);
    background: var(--input-bg-hover);
  }

  &:focus {
    outline: none;
    border-color: var(--input-border-focus);
    box-shadow: 0 0 0 3px var(--state-focus);
    background: var(--input-bg);
  }

  &:disabled {
    background: var(--input-bg-disabled);
    color: var(--text-disabled);
    border-color: var(--border-primary);
    cursor: not-allowed;
    opacity: 0.7;
  }

  &.error,
  &[aria-invalid="true"] {
    border-color: var(--border-error);

    &:focus {
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
    }
  }

  &.success {
    border-color: var(--border-success);

    &:focus {
      box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
    }
  }
}

/* Hint text */
.form-hint {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
  margin: 0;
}

/* Error message */
.form-error {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--border-error);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-1);

  &::before {
    content: '⚠';
    font-size: var(--text-base);
  }
}

/* Input com ícone */
.input-with-icon {
  position: relative;

  .input-icon {
    position: absolute;
    left: var(--spacing-3);
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-left: calc(var(--spacing-3) + 20px + var(--spacing-2));
  }
}
```

### 3. CARDS

```css
.card {
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-sm);
  transition: all 200ms ease;

  &:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--border-secondary);
  }
}

.card-header {
  margin-bottom: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  border-bottom: 1px solid var(--border-primary);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-1) 0;
}

.card-description {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
  margin: 0;
}

.card-content {
  margin-bottom: var(--spacing-4);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--border-primary);
}

/* Variações */
.card-interactive {
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.card-elevated {
  box-shadow: var(--shadow-lg);
  border: none;
}
```

### 4. MODALS / DIALOGS

```html
<div class="modal-overlay" id="modal-overlay">
  <div class="modal-content" role="dialog" aria-modal="true">
    <button class="modal-close" aria-label="Fechar">
      <svg><!-- X icon --></svg>
    </button>

    <div class="modal-header">
      <h2 class="modal-title">Título do Modal</h2>
      <p class="modal-description">Descrição opcional</p>
    </div>

    <div class="modal-body">
      <!-- Conteúdo -->
    </div>

    <div class="modal-footer">
      <button class="btn btn-secondary">Cancelar</button>
      <button class="btn btn-primary">Confirmar</button>
    </div>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--bg-overlay);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4);
  animation: fadeIn 200ms ease;
}

.modal-content {
  position: relative;
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-2xl);
  animation: slideUp 200ms ease;
}

.modal-close {
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background: var(--state-hover);
    color: var(--text-primary);
  }
}

.modal-header {
  margin-bottom: var(--spacing-6);
}

.modal-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-2) 0;
}

.modal-description {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
  margin: 0;
}

.modal-body {
  margin-bottom: var(--spacing-6);
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-3);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 5. LOADING STATES (Skeleton Screens)

**NUNCA use spinners genéricos. SEMPRE use skeleton screens.**

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-tertiary) 0%,
    var(--border-primary) 50%,
    var(--bg-tertiary) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: var(--radius-md);
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Variações */
.skeleton-text {
  height: 1rem;
  margin-bottom: var(--spacing-2);

  &:last-child {
    width: 60%;
  }
}

.skeleton-heading {
  height: 2rem;
  width: 40%;
  margin-bottom: var(--spacing-4);
}

.skeleton-button {
  height: 40px;
  width: 120px;
  border-radius: var(--radius-md);
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
}

.skeleton-card {
  padding: var(--spacing-6);
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
}
```

### 6. TOAST NOTIFICATIONS

```css
.toast-container {
  position: fixed;
  top: var(--spacing-4);
  right: var(--spacing-4);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  max-width: 420px;
  width: 100%;
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--bg-elevated);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  animation: slideInRight 200ms ease;
}

.toast-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin: 0 0 var(--spacing-1) 0;
}

.toast-message {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
  margin: 0;
}

.toast-close {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all 150ms ease;

  &:hover {
    background: var(--state-hover);
    color: var(--text-primary);
  }
}

/* Variants */
.toast-success {
  border-left: 4px solid var(--color-success);

  .toast-icon {
    color: var(--color-success);
  }
}

.toast-error {
  border-left: 4px solid var(--color-error);

  .toast-icon {
    color: var(--color-error);
  }
}

.toast-warning {
  border-left: 4px solid var(--color-warning);

  .toast-icon {
    color: var(--color-warning);
  }
}

.toast-info {
  border-left: 4px solid var(--color-info);

  .toast-icon {
    color: var(--color-info);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

[Continua no próximo bloco...]
