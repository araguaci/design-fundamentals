import Navigation from "@/components/Navigation";
import MasterpieceFooter from "@/components/MasterpieceFooter";
import { useTranslation } from "@/hooks/useTranslation";
import { CheckCircle2, XCircle, AlertCircle, Lightbulb, ExternalLink, Sparkles, ShieldCheck } from "lucide-react";

export default function BestPractices() {
  const { t, locale } = useTranslation();
  const isPT = locale === 'pt_BR';

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 selection:bg-[#ff6b35] selection:text-black">
      <Navigation />

      {/* Page Header */}
      <header className="relative border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#121218] to-[#050505]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engenharia de Frontend & Boas Práticas Pro</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-3">
            {isPT ? 'Boas Práticas de UI/UX' : 'UI/UX Best Practices'}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-sans">
            {isPT 
              ? 'Guia avançado de implementação técnica, microinterações, acessibilidade e performance.'
              : 'Advanced implementation guide for technical UX, microinteractions, accessibility, and performance.'}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Microinterações */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
              🎭
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {isPT ? 'Microinterações' : 'Microinteractions'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isPT 
                  ? 'Animações sutis e funcionais que melhoram a experiência'
                  : 'Subtle and functional animations that enhance experience'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Durações Recomendadas' : 'Recommended Durations'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100ms</div>
                  <div className="text-sm text-muted-foreground">Instant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">150ms</div>
                  <div className="text-sm text-muted-foreground">Fast</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">200ms</div>
                  <div className="text-sm text-muted-foreground">Normal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">300ms</div>
                  <div className="text-sm text-muted-foreground">Slow</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500ms</div>
                  <div className="text-sm text-muted-foreground">Slower</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Easing Functions' : 'Easing Functions'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-muted rounded text-sm font-mono">ease-out</code>
                  <span className="text-sm text-muted-foreground">
                    {isPT ? 'Para elementos que aparecem' : 'For elements that appear'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-muted rounded text-sm font-mono">ease-in</code>
                  <span className="text-sm text-muted-foreground">
                    {isPT ? 'Para elementos que desaparecem' : 'For elements that disappear'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-muted rounded text-sm font-mono">ease-in-out</code>
                  <span className="text-sm text-muted-foreground">
                    {isPT ? 'Para transições suaves' : 'For smooth transitions'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                {isPT ? 'Dica Importante' : 'Important Tip'}
              </h3>
              <p className="text-foreground/80">
                {isPT
                  ? 'Anime apenas propriedades GPU-accelerated (transform, opacity). Evite animar left, top, width, height pois causam reflow/repaint.'
                  : 'Animate only GPU-accelerated properties (transform, opacity). Avoid animating left, top, width, height as they cause reflow/repaint.'}
              </p>
            </div>
          </div>
        </section>

        {/* Acessibilidade */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl">
              ♿
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {isPT ? 'Acessibilidade' : 'Accessibility'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isPT 
                  ? 'WCAG 2.1 AA - Contraste e navegação por teclado'
                  : 'WCAG 2.1 AA - Contrast and keyboard navigation'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Contraste */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Contraste de Cores (WCAG 2.1 AA)' : 'Color Contrast (WCAG 2.1 AA)'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {isPT ? 'Texto Normal' : 'Normal Text'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isPT 
                        ? 'Mínimo 4.5:1 (parágrafos, links, etc)'
                        : 'Minimum 4.5:1 (paragraphs, links, etc)'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {isPT ? 'Texto Grande' : 'Large Text'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isPT 
                        ? 'Mínimo 3:1 (headings, textos ≥18px)'
                        : 'Minimum 3:1 (headings, text ≥18px)'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {isPT ? 'Componentes UI' : 'UI Components'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isPT 
                        ? 'Mínimo 3:1 (botões, ícones, etc)'
                        : 'Minimum 3:1 (buttons, icons, etc)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ARIA */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'ARIA Best Practices' : 'ARIA Best Practices'}
              </h3>
              <div className="space-y-3">
                <div className="bg-muted/50 rounded p-3">
                  <code className="text-xs font-mono text-foreground block mb-2">
                    {isPT ? 'Botão com loading' : 'Button with loading'}
                  </code>
                  <pre className="text-xs overflow-x-auto">
{`<button
  aria-busy="true"
  aria-label="${isPT ? 'Salvando...' : 'Saving...'}"
  disabled
>`}
                  </pre>
                </div>
                <div className="bg-muted/50 rounded p-3">
                  <code className="text-xs font-mono text-foreground block mb-2">
                    {isPT ? 'Input com erro' : 'Input with error'}
                  </code>
                  <pre className="text-xs overflow-x-auto">
{`<input
  aria-invalid="true"
  aria-describedby="error-message"
/>`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Keyboard Navigation */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Navegação por Teclado' : 'Keyboard Navigation'}
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    {isPT 
                      ? 'Tab: Navegar entre elementos focáveis'
                      : 'Tab: Navigate between focusable elements'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    {isPT 
                      ? 'Shift+Tab: Navegar para trás'
                      : 'Shift+Tab: Navigate backwards'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    {isPT 
                      ? 'ESC: Fechar modals e dropdowns'
                      : 'ESC: Close modals and dropdowns'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    {isPT 
                      ? 'Enter/Space: Ativar botões e links'
                      : 'Enter/Space: Activate buttons and links'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Regras Críticas */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold text-xl">
              🚨
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {isPT ? 'Regras Críticas' : 'Critical Rules'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isPT 
                  ? 'O que NUNCA e SEMPRE fazer'
                  : 'What to NEVER and ALWAYS do'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* NUNCA */}
            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-300 dark:border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                {isPT ? 'NUNCA faça' : 'NEVER do'}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Usar cores hard-coded (ex: color: #FFFFFF)'
                      : 'Use hard-coded colors (e.g., color: #FFFFFF)'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Esquecer de testar dark mode'
                      : 'Forget to test dark mode'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Usar spinners (use skeleton screens)'
                      : 'Use spinners (use skeleton screens)'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Animar left/top/width/height'
                      : 'Animate left/top/width/height'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Touch targets < 44x44px'
                      : 'Touch targets < 44x44px'}
                  </span>
                </li>
              </ul>
            </div>

            {/* SEMPRE */}
            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-300 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                {isPT ? 'SEMPRE faça' : 'ALWAYS do'}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Usar variáveis CSS (var(--color-primary))'
                      : 'Use CSS variables (var(--color-primary))'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Testar AMBOS os temas'
                      : 'Test BOTH themes'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Implementar os 5 estados'
                      : 'Implement all 5 states'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Validar contraste (mín 4.5:1)'
                      : 'Validate contrast (min 4.5:1)'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Keyboard navigation'
                      : 'Keyboard navigation'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ferramentas */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
              🛠️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {isPT ? 'Ferramentas Recomendadas' : 'Recommended Tools'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isPT 
                  ? 'Ferramentas essenciais para validação e desenvolvimento'
                  : 'Essential tools for validation and development'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Validação de Acessibilidade' : 'Accessibility Validation'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.deque.com/axe/devtools/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    axe DevTools
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wave.webaim.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    WAVE
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://developers.google.com/web/tools/lighthouse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    Lighthouse
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Contraste de Cores' : 'Color Contrast'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://webaim.org/resources/contrastchecker/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    WebAIM Contrast Checker
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://contrast-ratio.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    Contrast Ratio
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://color.review/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    Color Review
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Referências */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl">
              🎓
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {isPT ? 'Referências de Excelência' : 'Excellence References'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isPT 
                  ? 'Design Systems e produtos que servem de inspiração'
                  : 'Design Systems and products that serve as inspiration'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Produtos' : 'Products'}
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Stripe Dashboard</li>
                <li>• Linear</li>
                <li>• Vercel</li>
                <li>• Notion</li>
                <li>• Figma</li>
                <li>• Arc Browser</li>
                <li>• Raycast</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Design Systems Públicos' : 'Public Design Systems'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://m3.material.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2 text-sm"
                  >
                    Material Design 3
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://developer.apple.com/design/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2 text-sm"
                  >
                    Apple HIG
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://polaris.shopify.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2 text-sm"
                  >
                    Shopify Polaris
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://atlassian.design/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2 text-sm"
                  >
                    Atlassian Design System
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://primer.style/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2 text-sm"
                  >
                    GitHub Primer
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://carbondesignsystem.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2 text-sm"
                  >
                    IBM Carbon
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
              📋
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {isPT ? 'Checklist de Implementação' : 'Implementation Checklist'}
              </h2>
              <p className="text-muted-foreground mt-1">
                {isPT 
                  ? 'Use este checklist antes de cada deploy'
                  : 'Use this checklist before each deploy'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Acessibilidade' : 'Accessibility'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Contraste mínimo 4.5:1 validado'
                      : 'Minimum 4.5:1 contrast validated'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Keyboard navigation completa'
                      : 'Complete keyboard navigation'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'ARIA labels apropriados'
                      : 'Appropriate ARIA labels'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Testado em ambos os temas'
                      : 'Tested in both themes'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isPT ? 'Performance' : 'Performance'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Animações GPU-accelerated'
                      : 'GPU-accelerated animations'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Images otimizadas (WebP)'
                      : 'Optimized images (WebP)'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Lazy loading implementado'
                      : 'Lazy loading implemented'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-foreground/80">
                    {isPT 
                      ? 'Lighthouse score > 90'
                      : 'Lighthouse score > 90'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MasterpieceFooter />
    </div>
  );
}

