# DESIGN SYSTEM MASTER - PARTE 2

> Continuação do Design System Master. Esta é a segunda parte do guia completo.

---

## 🎭 MICROINTERAÇÕES

### Princípios de Animação

```css
/* Durações */
--duration-instant: 100ms;
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;

/* Easing Functions */
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Hover Effects

```css
/* Elevação suave */
.hover-lift {
  transition: transform var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }
}

/* Scale sutil */
.hover-scale {
  transition: transform var(--duration-normal) var(--ease-out);

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}

/* Glow effect */
.hover-glow {
  transition: box-shadow var(--duration-normal) var(--ease-out);

  &:hover {
    box-shadow: 0 0 0 4px var(--state-focus);
  }
}
```

### Loading Animations

```css
/* Pulse */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Bounce */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
```

### Page Transitions

```css
/* Fade in */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn var(--duration-slow) var(--ease-out);
}

/* Slide in */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-up {
  animation: slideInUp var(--duration-slow) var(--ease-out);
}

/* Stagger children */
.stagger-children > * {
  animation: slideInUp var(--duration-slow) var(--ease-out);
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 50ms; }
.stagger-children > *:nth-child(3) { animation-delay: 100ms; }
.stagger-children > *:nth-child(4) { animation-delay: 150ms; }
.stagger-children > *:nth-child(5) { animation-delay: 200ms; }
```

---

## ♿ ACESSIBILIDADE

### Contraste de Cores (WCAG 2.1 AA)

```javascript
// Função para calcular contraste
function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getLuminance(color) {
  const rgb = hexToRgb(color);
  const [r, g, b] = rgb.map(val => {
    val = val / 255;
    return val <= 0.03928
      ? val / 12.92
      : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Validação obrigatória
const contrastTests = {
  normalText: 4.5,  // Mínimo para texto normal
  largeText: 3.0,   // Mínimo para texto grande (18px+ ou 14px+ bold)
  uiElements: 3.0,  // Mínimo para componentes UI
  ideal: 7.0        // Ideal (AAA)
};
```

### Focus Management

```css
/* Focus visível em todos os elementos interativos */
*:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Remove outline padrão apenas quando focus-visible suportado */
*:focus:not(:focus-visible) {
  outline: none;
}

/* Focus within (para containers) */
.form-field:focus-within {
  .form-label {
    color: var(--border-focus);
  }
}
```

### ARIA Best Practices

```html
<!-- Botão com loading state -->
<button
  aria-busy="true"
  aria-label="Salvando..."
  disabled
>
  <span aria-hidden="true">Salvando...</span>
</button>

<!-- Input com erro -->
<input
  aria-invalid="true"
  aria-describedby="error-message"
/>
<span id="error-message" role="alert">
  Campo obrigatório
</span>

<!-- Modal -->
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Título</h2>
  <p id="modal-description">Descrição</p>
</div>

<!-- Live region para notificações -->
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  Alterações salvas
</div>
```

### Keyboard Navigation

```javascript
// Focus trap para modals
class FocusTrap {
  constructor(element) {
    this.element = element;
    this.focusableElements = this.getFocusableElements();
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
  }

  getFocusableElements() {
    return Array.from(
      this.element.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  activate() {
    this.firstFocusable?.focus();

    this.element.addEventListener('keydown', this.handleKeyDown);
  }

  deactivate() {
    this.element.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    // ESC para fechar
    if (e.key === 'Escape') {
      this.close();
      return;
    }

    // Tab navigation
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable?.focus();
        }
      }
    }
  };
}
```

### Screen Reader Support

```css
/* Visually hidden mas acessível para screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Skip to main content */
.skip-to-main {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--brand-primary);
  color: var(--text-inverse);
  padding: var(--spacing-3) var(--spacing-4);
  z-index: 10001;
  transition: top var(--duration-fast) var(--ease-out);

  &:focus {
    top: 0;
  }
}
```

---

## 📱 RESPONSIVIDADE

### Breakpoints

```css
/* Mobile-first breakpoints */
--breakpoint-sm: 640px;   /* Mobile large / Small tablet */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop small */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Large desktop */
```

### Media Query Utilities

```css
/* Mobile first approach */
.element {
  /* Mobile styles (base) */
  font-size: var(--text-sm);
  padding: var(--spacing-3);
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: var(--text-base);
    padding: var(--spacing-4);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    font-size: var(--text-lg);
    padding: var(--spacing-6);
  }
}

/* Utility classes */
@media (max-width: 639px) {
  .sm\:hidden { display: none; }
}

@media (min-width: 640px) {
  .sm\:block { display: block; }
  .sm\:flex { display: flex; }
  .sm\:grid { display: grid; }
}

@media (min-width: 768px) {
  .md\:block { display: block; }
  .md\:flex { display: flex; }
  .md\:grid { display: grid; }
}

@media (min-width: 1024px) {
  .lg\:block { display: block; }
  .lg\:flex { display: flex; }
  .lg\:grid { display: grid; }
}
```

### Touch-Friendly Design

```css
/* Minimum touch target: 44x44px (iOS HIG / Material Design) */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Mobile adjustments */
@media (max-width: 640px) {
  /* Previne zoom no iOS em inputs */
  input,
  select,
  textarea {
    font-size: 16px;
  }

  /* Maior área de toque em mobile */
  .btn {
    min-height: 48px;
    padding: var(--spacing-3) var(--spacing-5);
  }

  /* Spacing maior entre elementos tocáveis */
  .nav-links > * + * {
    margin-left: var(--spacing-4);
  }
}

/* Hover apenas em dispositivos com mouse */
@media (hover: hover) and (pointer: fine) {
  .hover\:bg-gray:hover {
    background-color: var(--bg-tertiary);
  }
}
```

---

## 🚀 PERFORMANCE

### CSS Performance

```css
/* GPU-accelerated properties (use transform e opacity para animações) */
.animated-element {
  /* ✅ BOM - GPU accelerated */
  transform: translateX(100px);
  opacity: 0.5;

  /* ❌ RUIM - Causa reflow/repaint */
  /* left: 100px; */
  /* background-color: red; */
}

/* Will-change hint (use com moderação) */
.will-animate {
  will-change: transform, opacity;
}

/* Remove will-change após animação */
.element:hover {
  will-change: transform;
}

.element:not(:hover) {
  will-change: auto;
}

/* Contenção de layout */
.card {
  contain: layout style paint;
}

/* Content-visibility para long lists */
.list-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 200px;
}
```

### Image Optimization

```html
<!-- Responsive images -->
<picture>
  <source
    srcset="image-sm.webp 640w, image-md.webp 1024w, image-lg.webp 1920w"
    type="image/webp"
  />
  <img
    src="image.jpg"
    srcset="image-sm.jpg 640w, image-md.jpg 1024w, image-lg.jpg 1920w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    alt="Descrição"
    loading="lazy"
    decoding="async"
  />
</picture>

<!-- Avatar com fallback -->
<img
  src="avatar.webp"
  alt="Nome do usuário"
  width="48"
  height="48"
  loading="lazy"
  onerror="this.src='fallback-avatar.png'"
/>
```

### Font Loading

```css
/* Font display swap */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap; /* Mostra fallback font imediatamente */
  font-weight: 100 900;
  font-style: normal;
}

/* Preload critical fonts */
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

/* Variable fonts (menor file size) */
@font-face {
  font-family: 'Inter var';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
  font-display: swap;
}
```

### Critical CSS

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Inline critical CSS -->
  <style>
    /* Above-the-fold styles */
    body { margin: 0; font-family: sans-serif; }
    .header { height: 64px; background: #fff; }
    /* ... */
  </style>

  <!-- Preload non-critical CSS -->
  <link rel="preload" href="/styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/styles/main.css"></noscript>
</head>
</html>
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Design Tokens
- [ ] Variáveis CSS definidas para cores, espaçamento, tipografia
- [ ] Temas light/dark implementados
- [ ] Theme toggle funcional com persistência
- [ ] Auto-detect de preferência do sistema

### Componentes
- [ ] Todos os estados: normal, hover, active, focus, disabled
- [ ] Loading states (skeleton screens, não spinners)
- [ ] Empty states com ilustração e CTA
- [ ] Error states informativos com recovery actions
- [ ] Responsividade mobile/tablet/desktop

### Acessibilidade
- [ ] Contraste mínimo 4.5:1 para texto normal
- [ ] Contraste mínimo 3:1 para texto grande e UI
- [ ] Focus states visíveis em todos elementos interativos
- [ ] Keyboard navigation completa
- [ ] ARIA labels apropriados
- [ ] Screen reader testing
- [ ] Skip to main content link

### Performance
- [ ] Animações usando transform/opacity (GPU-accelerated)
- [ ] Images otimizadas (WebP com fallback)
- [ ] Lazy loading de images
- [ ] Font loading otimizado (font-display: swap)
- [ ] Critical CSS inline
- [ ] Code splitting implementado

### Responsividade
- [ ] Mobile-first approach
- [ ] Touch targets mínimo 44x44px
- [ ] Font-size mínimo 16px em inputs (previne zoom iOS)
- [ ] Tested em múltiplos dispositivos/browsers

### Qualidade de Código
- [ ] Naming conventions consistentes
- [ ] Comentários em código complexo
- [ ] Sem !important desnecessário
- [ ] CSS organizado (BEM ou similar)
- [ ] Prefixos vendor apenas quando necessário
- [ ] Validação HTML/CSS/a11y

---

## 🚨 REGRAS CRÍTICAS

### NUNCA faça:

❌ Usar cores hard-coded (ex: `color: #FFFFFF`)
❌ Assumir que um tema funcionará no outro sem testar
❌ Usar `opacity` para controlar visibility de texto
❌ Confiar apenas em cor para transmitir informação
❌ Esquecer de testar estados de foco em dark mode
❌ Usar spinners genéricos (use skeleton screens)
❌ Animar propriedades que causam reflow (left, top, width, height, etc.)
❌ Adicionar animações sem propósito claro
❌ Usar `!important` como solução rápida
❌ Esquecer de testar com keyboard navigation
❌ Ignorar estados de erro e empty states
❌ Usar divs e spans para tudo (semântica HTML)
❌ Esquecer alt text em imagens
❌ Touch targets menores que 44x44px em mobile

### SEMPRE faça:

✅ Usar variáveis CSS semânticas
✅ Testar CADA componente em AMBOS os temas
✅ Validar contraste com ferramenta automatizada
✅ Fornecer feedback visual além da cor
✅ Implementar todos os 5 estados (normal, hover, active, focus, disabled)
✅ Usar skeleton screens para loading
✅ Animar apenas transform e opacity
✅ Testar com keyboard navigation
✅ Adicionar ARIA labels apropriados
✅ Usar HTML semântico
✅ Otimizar images (WebP + lazy loading)
✅ Mobile-first CSS
✅ Documentar decisões de design complexas

---

## 🛠️ FERRAMENTAS RECOMENDADAS

### Validação de Acessibilidade
- **axe DevTools**: Browser extension para testes a11y
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Chrome DevTools audit
- **Pa11y**: Automated accessibility testing

### Contraste de Cores
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Contrast Ratio**: https://contrast-ratio.com/
- **Color Review**: https://color.review/

### Design Tools
- **Figma**: Design e prototipação
- **Storybook**: Component library documentation
- **Chromatic**: Visual regression testing

### Performance
- **Lighthouse**: Performance audit
- **WebPageTest**: Detailed performance analysis
- **Bundle Analyzer**: Analyze bundle size

---

## 🎓 REFERÊNCIAS DE EXCELÊNCIA

Inspire-se nestes design systems premiados:

### Produtos
- **Stripe Dashboard**: Clareza e eficiência em dados complexos
- **Linear**: Velocidade, elegância e atenção aos detalhes
- **Vercel**: Minimalismo sofisticado e performance
- **Notion**: Flexibilidade e interface clean
- **Figma**: Interface fluida e microinterações perfeitas
- **Arc Browser**: Microinterações deliciosas
- **Raycast**: Performance e polish extremo

### Design Systems Públicos
- **Material Design 3** (Google): https://m3.material.io/
- **Apple Human Interface Guidelines**: https://developer.apple.com/design/
- **Shopify Polaris**: https://polaris.shopify.com/
- **Atlassian Design System**: https://atlassian.design/
- **GitHub Primer**: https://primer.style/
- **IBM Carbon**: https://carbondesignsystem.com/

---

## 💡 COMO USAR ESTE GUIA

### Para Developers

1. **Início de projeto**: Configure variáveis CSS primeiro
2. **Componente novo**: Sempre implemente os 5 estados + responsividade
3. **Antes de commit**: Rode checklist de acessibilidade
4. **Review de código**: Valide contraste e performance

### Para Designers

1. **Design tokens**: Use as variáveis definidas, não valores hard-coded
2. **Handoff**: Especifique todos os estados interativos
3. **Acessibilidade**: Valide contraste durante o design
4. **Documentação**: Anote decisões de design complexas

### Para QA

1. **Teste manual**: Todos os temas (light/dark)
2. **Keyboard nav**: Tab através de toda interface
3. **Screen reader**: Teste com NVDA/JAWS/VoiceOver
4. **Devices**: Múltiplos tamanhos de tela e navegadores

---

## 📝 TEMPLATE DE COMPONENTE

Ao criar um novo componente, use este template:

```css
/* ==============================================
   NOME DO COMPONENTE
   ============================================== */

.component-name {
  /* === Layout === */
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4);

  /* === Typography === */
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--text-primary);

  /* === Appearance === */
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);

  /* === Effects === */
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-out);

  /* === States === */

  /* Hover */
  &:hover:not(:disabled) {
    background: var(--bg-tertiary);
    border-color: var(--border-secondary);
    box-shadow: var(--shadow-md);
  }

  /* Active */
  &:active:not(:disabled) {
    background: var(--bg-secondary);
    transform: scale(0.98);
  }

  /* Focus */
  &:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  /* Disabled */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Error */
  &[aria-invalid="true"] {
    border-color: var(--border-error);
  }

  /* === Responsive === */
  @media (max-width: 640px) {
    font-size: var(--text-sm);
    padding: var(--spacing-3);
  }
}

/* === Variants === */
.component-name--large {
  padding: var(--spacing-6);
  font-size: var(--text-lg);
}

.component-name--compact {
  padding: var(--spacing-2);
  font-size: var(--text-sm);
}

/* === Child elements === */
.component-name__icon {
  width: 20px;
  height: 20px;
  color: var(--text-secondary);
}

.component-name__label {
  flex: 1;
  font-weight: var(--font-medium);
}
```

---

## 🎯 MÉTRICAS DE SUCESSO

Seu design system é bem-sucedido quando:

- ✅ Velocidade de desenvolvimento de novas features aumenta
- ✅ Consistência visual em todas as telas
- ✅ Bugs de UI diminuem significativamente
- ✅ Score de acessibilidade (Lighthouse) > 95
- ✅ Score de performance (Lighthouse) > 90
- ✅ Zero texto invisível em qualquer tema
- ✅ Feedback positivo de usuários sobre UX
- ✅ Onboarding de novos devs é mais rápido
- ✅ Design handoff é mais eficiente
- ✅ Maintenance é mais fácil

---

**IMPORTANTE FINAL**:

Este design system é um documento vivo. Atualize-o conforme:
- Novos padrões emergem na indústria
- Feedback de usuários indica melhorias
- Novas necessidades de negócio surgem
- Tecnologias evoluem (CSS features, frameworks, etc.)

Cada componente DEVE ser testado em:
1. ✅ Ambos os temas (light/dark)
2. ✅ Todos os 5 estados (normal, hover, active, focus, disabled)
3. ✅ Mobile, tablet e desktop
4. ✅ Com keyboard navigation
5. ✅ Com screen reader

**Zero tolerância para texto invisível ou ilegível.**

---

_Última atualização: 2025-12-14_
_Versão: 1.0_
