# 📐 DESIGN SYSTEM - GUIA DE USO

## 📚 Visão Geral

Este Design System consolidado combina as melhores práticas de sistemas premiados internacionalmente (Stripe, Linear, Notion, Vercel, Figma, Material Design 3, Apple HIG, Shopify Polaris) em um guia completo e prático.

**CRÍTICO**: Garante contraste adequado e acessibilidade em TODOS os temas (light/dark).

---

## 📖 Estrutura dos Arquivos

O Design System está dividido em 2 arquivos principais:

### 1. DESIGN_SYSTEM_MASTER.md (Parte 1)
**Conteúdo:**
- ✅ Princípios Fundamentais
- ✅ Sistema de Cores e Temas Completo (Light/Dark)
- ✅ Tipografia (Font Scale, Weights, Line Heights)
- ✅ Espaçamento e Layout (8pt Grid, Container System)
- ✅ Componentes Principais:
  - Botões (todos os tamanhos e variantes)
  - Inputs & Forms (contrast-safe)
  - Cards
  - Modals/Dialogs
  - Loading States (Skeleton Screens)
  - Toast Notifications

### 2. DESIGN_SYSTEM_MASTER_PARTE2.md (Parte 2)
**Conteúdo:**
- ✅ Microinterações e Animações
- ✅ Acessibilidade Completa (WCAG 2.1 AA)
- ✅ Responsividade (Mobile-first)
- ✅ Performance (Otimizações CSS, Images, Fonts)
- ✅ Checklist de Implementação
- ✅ Regras Críticas (NUNCA/SEMPRE)
- ✅ Ferramentas Recomendadas
- ✅ Referências de Excelência
- ✅ Template de Componente
- ✅ Métricas de Sucesso

---

## 🚀 Como Usar

### Para Desenvolvedores

#### 1. Início de Projeto
```css
/* Primeiro, copie todas as variáveis CSS do arquivo PARTE 1 */
@import 'design-system-tokens.css';
```

#### 2. Implementar Tema Toggle
```javascript
// Copie o ThemeManager do arquivo PARTE 1
// E implemente no seu projeto
ThemeManager.init();
```

#### 3. Criar Componente Novo
1. Leia o **Template de Componente** (PARTE 2)
2. Implemente **TODOS os 5 estados**:
   - Normal
   - Hover
   - Active
   - Focus
   - Disabled
3. Teste em **AMBOS os temas**
4. Valide **responsividade**

#### 4. Antes do Commit
```bash
# Rode checklist de acessibilidade (PARTE 2)
- [ ] Contraste validado
- [ ] Keyboard navigation funcional
- [ ] ARIA labels corretos
- [ ] Tested em ambos os temas
```

### Para Designers

#### 1. Design Tokens
- Use **SEMPRE** as variáveis do sistema, nunca valores hard-coded
- Consulte **Sistema de Cores** (PARTE 1)
- Consulte **Tipografia** (PARTE 1)
- Consulte **Espaçamento** (PARTE 1)

#### 2. Componentes
- Especifique **TODOS os estados interativos**
- Inclua **dark mode** em todos os designs
- Valide **contraste** durante o design (não depois!)
- Use as **referências de excelência** (PARTE 2) como inspiração

#### 3. Handoff
- Anote **estados de loading**
- Especifique **empty states**
- Documente **error states**
- Inclua **responsividade** mobile/tablet/desktop

### Para QA

#### Checklist de Teste
```
TEMAS:
- [ ] Testado em Light Mode
- [ ] Testado em Dark Mode
- [ ] Transição entre temas funciona
- [ ] Sem texto invisível em nenhum tema

ACESSIBILIDADE:
- [ ] Keyboard navigation completa
- [ ] Focus states visíveis
- [ ] Screen reader testado
- [ ] Contraste validado (Lighthouse > 95)

RESPONSIVIDADE:
- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)
- [ ] Touch targets > 44px

PERFORMANCE:
- [ ] Lighthouse Performance > 90
- [ ] Images otimizadas (WebP)
- [ ] Lazy loading funcionando
- [ ] Animações suaves (60fps)
```

---

## 📊 Índice Completo

### PARTE 1 - Fundamentos e Componentes

1. **Princípios Fundamentais**
   - Filosofia de Design
   - Hierarquia Visual
   - Densidade de Informação
   - Feedback Imediato
   - Microinterações
   - Consistência

2. **Sistema de Cores e Temas**
   - Variáveis CSS Semânticas
   - Light Mode (completo)
   - Dark Mode (completo)
   - Theme Toggle JavaScript

3. **Tipografia**
   - Font Families
   - Type Scale (Perfect Fourth)
   - Font Weights
   - Line Heights
   - Letter Spacing
   - Utility Classes

4. **Espaçamento e Layout**
   - Spacing Scale (8pt Grid)
   - Border Radius
   - Container System
   - Grid System
   - Flexbox Utilities

5. **Componentes**
   - Botões (6 variantes, 5 tamanhos)
   - Inputs & Forms (contrast-safe)
   - Cards (múltiplas variações)
   - Modals/Dialogs (com focus trap)
   - Loading States (skeleton screens)
   - Toast Notifications (4 tipos)

### PARTE 2 - Avançado e Boas Práticas

6. **Microinterações**
   - Princípios de Animação
   - Durações e Easing
   - Hover Effects
   - Loading Animations
   - Page Transitions

7. **Acessibilidade**
   - Contraste de Cores (WCAG 2.1 AA)
   - Focus Management
   - ARIA Best Practices
   - Keyboard Navigation
   - Screen Reader Support

8. **Responsividade**
   - Breakpoints
   - Media Query Utilities
   - Touch-Friendly Design
   - Mobile-First Approach

9. **Performance**
   - CSS Performance
   - Image Optimization
   - Font Loading
   - Critical CSS

10. **Implementação**
    - Checklist Completo
    - Regras Críticas (NUNCA/SEMPRE)
    - Ferramentas Recomendadas
    - Referências de Excelência
    - Template de Componente
    - Métricas de Sucesso

---

## 🎯 Quick Reference

### Cores Principais
```css
--brand-primary: #0066FF;
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

### Espaçamento Base
```css
--spacing-2: 0.5rem;   /* 8px */
--spacing-4: 1rem;     /* 16px - base */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
```

### Tipografia Comum
```css
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
```

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

---

## 🔍 Busca Rápida

### Precisa de...

**Cores?** → PARTE 1, Seção 2
**Fontes?** → PARTE 1, Seção 3
**Espaçamento?** → PARTE 1, Seção 4
**Botão?** → PARTE 1, Seção 5.1
**Form/Input?** → PARTE 1, Seção 5.2
**Card?** → PARTE 1, Seção 5.3
**Modal?** → PARTE 1, Seção 5.4
**Loading?** → PARTE 1, Seção 5.5
**Toast?** → PARTE 1, Seção 5.6
**Animação?** → PARTE 2, Seção 1
**Acessibilidade?** → PARTE 2, Seção 2
**Responsivo?** → PARTE 2, Seção 3
**Performance?** → PARTE 2, Seção 4
**Checklist?** → PARTE 2, Seção 5

---

## ⚠️ Regras Críticas (Resumo)

### NUNCA:
- ❌ Hard-code cores (`color: #FFF`)
- ❌ Esqueça de testar dark mode
- ❌ Use spinners (use skeleton screens)
- ❌ Anime left/top/width/height
- ❌ Touch targets < 44x44px

### SEMPRE:
- ✅ Use variáveis CSS (`var(--color-primary)`)
- ✅ Teste AMBOS os temas
- ✅ Implemente os 5 estados
- ✅ Valide contraste (mín 4.5:1)
- ✅ Keyboard navigation

---

## 🛠️ Ferramentas Essenciais

### Validação
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **axe DevTools**: Browser extension
- **Lighthouse**: Chrome DevTools

### Design
- **Figma**: Design e prototipação
- **Storybook**: Component documentation

### Performance
- **Lighthouse**: Performance audit
- **WebPageTest**: Análise detalhada

---

## 📞 Suporte

### Dúvidas Comuns

**Q: Como implemento dark mode?**
A: Copie as variáveis CSS e o ThemeManager da PARTE 1, Seção 2.

**Q: Como garanto contraste adequado?**
A: Use as variáveis semânticas (`--text-primary`, `--label-text`, etc.) e valide com WebAIM.

**Q: Posso modificar as cores?**
A: Sim, mas mantenha os ratios de contraste (mínimo 4.5:1 para texto).

**Q: Como testo acessibilidade?**
A: Use o checklist da PARTE 2, Seção 7 + ferramentas automatizadas (Lighthouse, axe).

**Q: Skeleton ou spinner?**
A: **SEMPRE** skeleton screens. Veja PARTE 1, Seção 5.5.

---

## 📈 Evolução do Design System

Este é um documento **vivo**. Atualize quando:

- ✨ Novos padrões emergem na indústria
- 💬 Feedback de usuários indica melhorias
- 🎯 Novas necessidades de negócio surgem
- 🚀 Tecnologias evoluem

### Versionamento

**Versão Atual**: 1.0
**Última Atualização**: 2025-12-14

### Mudanças

#### v1.0 (2025-12-14)
- ✅ Consolidação de 2 arquivos em guia único
- ✅ Sistema de cores completo (light/dark)
- ✅ 6 componentes principais documentados
- ✅ Acessibilidade WCAG 2.1 AA completa
- ✅ Performance guidelines
- ✅ Templates e checklists

---

## 🎓 Próximos Passos

1. ⬜ Leia PARTE 1 completa
2. ⬜ Leia PARTE 2 completa
3. ⬜ Implemente Theme Toggle no projeto
4. ⬜ Configure variáveis CSS
5. ⬜ Crie primeiro componente usando template
6. ⬜ Teste em ambos os temas
7. ⬜ Valide acessibilidade
8. ⬜ Compartilhe com equipe

---

**Lembre-se**: Zero tolerância para texto invisível ou ilegível.

Cada componente DEVE passar em:
- ✅ Contraste (4.5:1 mínimo)
- ✅ Ambos os temas (light/dark)
- ✅ 5 estados (normal/hover/active/focus/disabled)
- ✅ Keyboard navigation
- ✅ Screen reader

---

_Criado com ❤️ baseado nas melhores práticas da indústria_
