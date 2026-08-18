import { useState } from "react";
import Navigation from "@/components/Navigation";
import MasterpieceFooter from "@/components/MasterpieceFooter";
import { Sparkles, Terminal } from "lucide-react";
import {
  ColorPillarIcon,
  TypographyPillarIcon,
  HierarchyPillarIcon,
  ContrastPillarIcon,
  AlignmentPillarIcon,
  DFLogoIcon,
} from "@/components/icons/FundamentalIcons";

export default function Examples() {
  const [activeTab, setActiveTab] = useState<
    "color" | "typography" | "hierarchy" | "contrast" | "alignment" | "design-system"
  >("color");

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 selection:bg-[#ff6b35] selection:text-black">
      <Navigation />

      {/* Page Header */}
      <header className="relative border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#121218] to-[#050505]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Laboratório de Código & UI Interativa</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-3">
            Exemplos Práticos de Design
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-sans">
            Veja na prática como cada um dos 5 fundamentos é aplicado em
            componentes e layouts reais de alta conversão.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 pb-4 border-b border-white/10">
          <button
            onClick={() => setActiveTab("color")}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "color"
                ? "bg-gradient-to-r from-cyber-orange to-[#ff8c5a] text-black font-bold shadow-cyber-orange"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <ColorPillarIcon className="w-4 h-4" />
            <span>Cor</span>
          </button>
          <button
            onClick={() => setActiveTab("typography")}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "typography"
                ? "bg-gradient-to-r from-cyber-cyan to-[#00b4d8] text-black font-bold shadow-cyber-cyan"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <TypographyPillarIcon className="w-4 h-4" />
            <span>Tipografia</span>
          </button>
          <button
            onClick={() => setActiveTab("hierarchy")}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "hierarchy"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-purple-500/25"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <HierarchyPillarIcon className="w-4 h-4" />
            <span>Hierarquia</span>
          </button>
          <button
            onClick={() => setActiveTab("contrast")}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "contrast"
                ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold shadow-lg shadow-amber-500/25"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <ContrastPillarIcon className="w-4 h-4" />
            <span>Contraste</span>
          </button>
          <button
            onClick={() => setActiveTab("alignment")}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "alignment"
                ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold shadow-lg shadow-emerald-500/25"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <AlignmentPillarIcon className="w-4 h-4" />
            <span>Alinhamento</span>
          </button>
          <button
            onClick={() => setActiveTab("design-system")}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "design-system"
                ? "bg-white text-black font-bold shadow-lg shadow-white/20"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <DFLogoIcon className="w-4 h-4" />
            <span>Design System</span>
          </button>
        </div>

        {/* Color Example */}
        {activeTab === "color" && (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                🎨 Cor: Paletas e Harmonia
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Explore diferentes esquemas de cores usando a roda de cores
              </p>

              {/* Monochromatic */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Monocromático
                </h3>
                <p className="text-foreground/70 mb-4">
                  Usa uma cor em diferentes tonalidades
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-red-900 mb-2"></div>
                    <span className="text-sm text-muted-foreground">
                      #740001
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-red-600 mb-2"></div>
                    <span className="text-sm text-muted-foreground">
                      #DC2626
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-red-300 mb-2"></div>
                    <span className="text-sm text-muted-foreground">
                      #FCA5A5
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-red-100 mb-2"></div>
                    <span className="text-sm text-muted-foreground">
                      #FEE2E2
                    </span>
                  </div>
                </div>
              </div>

              {/* Complementary */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Complementar
                </h3>
                <p className="text-foreground/70 mb-4">
                  Cores opostas na roda de cores criam contraste vibrante
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-blue-500 mb-2"></div>
                    <span className="text-sm text-muted-foreground">Azul</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-yellow-500 mb-2"></div>
                    <span className="text-sm text-muted-foreground">
                      Amarelo
                    </span>
                  </div>
                </div>
              </div>

              {/* Triadic */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Triádico
                </h3>
                <p className="text-foreground/70 mb-4">
                  Três cores igualmente espaçadas na roda de cores
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-red-500 mb-2"></div>
                    <span className="text-sm text-muted-foreground">
                      Vermelho
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-blue-500 mb-2"></div>
                    <span className="text-sm text-muted-foreground">Azul</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-yellow-500 mb-2"></div>
                    <span className="text-sm text-muted-foreground">
                      Amarelo
                    </span>
                  </div>
                </div>
              </div>

              {/* Regra 60-30-10 */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Regra 60-30-10
                </h3>
                <p className="text-foreground/80 mb-6">
                  Distribuição recomendada de cores em um design
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded bg-slate-300 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">60%</p>
                      <p className="text-sm text-foreground/70">
                        Cor Primária - Cor dominante do design (fundo, áreas
                        grandes)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded bg-blue-400 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">30%</p>
                      <p className="text-sm text-foreground/70">
                        Cor Secundária - Cor de suporte (elementos, seções)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded bg-yellow-400 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">10%</p>
                      <p className="text-sm text-foreground/70">
                        Cor de Destaque - Cor de ênfase (buttons, CTAs)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Typography Example */}
        {activeTab === "typography" && (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                ✏️ Tipografia: Fontes e Espaçamento
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Entenda a importância de escolher as tipografias corretas
              </p>

              {/* Serif vs Sans-serif */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Serif
                  </h3>
                  <p
                    className="text-lg mb-4"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Este é um exemplo de fonte Serif. Está geralmente associada
                    com tradição e formalidade.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💡 Melhor para: Livros, jornais, documentos formais
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Sans-Serif
                  </h3>
                  <p
                    className="text-lg mb-4"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Este é um exemplo de fonte Sans-Serif. Parece moderno e
                    limpo.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💡 Melhor para: Web, aplicativos, design moderno
                  </p>
                </div>
              </div>

              {/* Line Height */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Altura da Linha (Line-Height)
                </h3>
                <p className="text-foreground/70 mb-6">
                  A altura entre linhas afeta muito a legibilidade
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="border border-border rounded-lg p-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Line-height: 1.2 (Baixo)
                    </p>
                    <p
                      className="text-sm text-foreground/70"
                      style={{ lineHeight: "1.2" }}
                    >
                      Este parágrafo possui uma altura de linha baixa. Pode ser
                      mais difícil de ler especialmente em textos longos. Textos
                      comprimidos verticalmente tendem a parecer pesados.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Line-height: 1.5 (Recomendado)
                    </p>
                    <p
                      className="text-sm text-foreground/70"
                      style={{ lineHeight: "1.5" }}
                    >
                      Este parágrafo tem uma altura de linha recomendada. É
                      confortável de ler e oferece bom espaçamento entre as
                      linhas. Ideal para corpo de texto.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Line-height: 1.8 (Alto)
                    </p>
                    <p
                      className="text-sm text-foreground/70"
                      style={{ lineHeight: "1.8" }}
                    >
                      Este parágrafo tem uma altura de linha alta. Oferece muito
                      espaçamento entre as linhas. Bom para textos pequenos ou
                      acessibilidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Font Weights */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Peso da Fonte (Font-Weight)
                </h3>
                <p className="text-foreground/70 mb-6">
                  Diferentes pesos criam hierarquia visual
                </p>
                <div className="space-y-4">
                  <div>
                    <p style={{ fontWeight: "300" }} className="text-lg mb-1">
                      Font-Weight 300 - Light (leve)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Melhor para textos secundários ou decorativos
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "400" }} className="text-lg mb-1">
                      Font-Weight 400 - Regular (normal)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Padrão para corpo de texto. Melhor legibilidade
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }} className="text-lg mb-1">
                      Font-Weight 600 - Semibold (semi-negrito)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bom para destaques e ênfase moderada
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "700" }} className="text-lg mb-1">
                      Font-Weight 700 - Bold (negrito)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Para títulos, headings e elementos de forte ênfase
                    </p>
                  </div>
                </div>
              </div>

              {/* Dica: Comprimento da linha */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  💡 Dica: Comprimento Ideal da Linha
                </h3>
                <p className="text-foreground/80 mb-4">
                  O comprimento ideal de uma linha está entre{" "}
                  <strong>45 e 75 caracteres</strong>. Linhas muito longas
                  cansam os olhos.
                </p>
                <div className="bg-white dark:bg-card rounded p-4 mt-4">
                  <p
                    className="text-foreground/70"
                    style={{ maxWidth: "50ch" }}
                  >
                    Este parágrafo tem exatamente 50 caracteres por linha
                    (50ch). É confortável para leitura contínua.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Visual Hierarchy Example */}
        {activeTab === "hierarchy" && (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                📊 Hierarquia Visual: Guiando o Usuário
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Veja como tamanho, peso, cor e espaçamento guiam a atenção
              </p>

              {/* Tamanho e Peso */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Tamanho e Peso
                </h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-4xl font-bold text-foreground">
                      Headline Principal
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Primeiro elemento que atrai atenção
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="text-2xl font-semibold text-foreground">
                      Subheading
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Segundo nível de importância
                    </p>
                  </div>
                  <div className="bg-muted/10 p-6 rounded-lg">
                    <p className="text-base font-normal text-foreground">
                      Corpo do texto
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Conteúdo principal com tamanho menor
                    </p>
                  </div>
                </div>
              </div>

              {/* Cor e Contraste */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Cor e Contraste
                </h3>
                <p className="text-foreground/70 mb-6">
                  Cores vibrantes atraem atenção
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-8 rounded-lg bg-muted text-foreground">
                    <p className="text-lg font-semibold">Elemento Neutro</p>
                  </div>
                  <div className="p-8 rounded-lg bg-primary text-primary-foreground">
                    <p className="text-lg font-semibold">Elemento Destacado</p>
                  </div>
                  <div className="p-8 rounded-lg bg-accent text-accent-foreground">
                    <p className="text-lg font-semibold">
                      CTA (Call-to-Action)
                    </p>
                  </div>
                </div>
              </div>

              {/* Espaçamento */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Espaçamento (White Space)
                </h3>
                <p className="text-foreground/70 mb-6">
                  Espaço cria respiração visual e agrupa elementos relacionados
                </p>

                {/* Pouco espaçamento */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">
                    ❌ Pouco espaçamento (caótico)
                  </p>
                  <div className="border border-red-300 bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                    <div className="flex gap-1 flex-wrap">
                      <button className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded">
                        Botão 1
                      </button>
                      <button className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded">
                        Botão 2
                      </button>
                      <button className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded">
                        Botão 3
                      </button>
                      <p className="text-xs w-full">
                        Texto muito próximo dos botões
                      </p>
                      <p className="text-xs">Mais texto aqui</p>
                    </div>
                  </div>
                </div>

                {/* Espaçamento adequado */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-3">
                    ✅ Espaçamento adequado (organizado)
                  </p>
                  <div className="border border-green-300 bg-green-50 dark:bg-green-950/20 rounded-lg p-6">
                    <div className="flex gap-4 flex-wrap mb-6">
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded font-medium">
                        Botão 1
                      </button>
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded font-medium">
                        Botão 2
                      </button>
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded font-medium">
                        Botão 3
                      </button>
                    </div>
                    <p className="text-sm text-foreground/70 mb-3">
                      Conteúdo bem separado dos botões com espaço adequado
                    </p>
                    <p className="text-sm text-foreground/70">
                      Cada elemento respira, criando uma composição clara e
                      hierárquica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contrast Example */}
        {activeTab === "contrast" && (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                ⚡ Contraste: Acessibilidade e Destaque
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Contraste adequado garante legibilidade e acessibilidade
              </p>

              {/* WCAG Ratios */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Proporções de Contraste WCAG
                </h3>
                <p className="text-foreground/70 mb-6">
                  As diretrizes de acessibilidade recomendam proporções mínimas
                </p>
                <div className="space-y-4">
                  {/* 3:1 Large Text */}
                  <div className="border border-border rounded-lg p-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      3:1 (Texto Grande - Mínimo)
                    </p>
                    <p className="text-lg font-bold bg-yellow-400 text-black p-3 rounded">
                      Este é um texto grande (≥18pt) com contraste 3:1
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      ✅ Aceito para textos grandes, headings
                    </p>
                  </div>

                  {/* 4.5:1 Normal Text */}
                  <div className="border border-border rounded-lg p-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      4.5:1 (Texto Normal - Recomendado)
                    </p>
                    <p className="text-base bg-blue-600 text-white p-3 rounded">
                      Este é texto normal com excelente contraste 4.5:1
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      ✅ Recomendado para corpo de texto, parágrafos
                    </p>
                  </div>

                  {/* 7:1 Enhanced */}
                  <div className="border border-border rounded-lg p-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      7:1+ (Contraste Aprimorado)
                    </p>
                    <p className="text-base bg-slate-900 dark:bg-slate-100 text-white dark:text-black p-3 rounded">
                      Texto com contraste máximo para melhor acessibilidade
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      ✅ Ideal para acessibilidade máxima
                    </p>
                  </div>
                </div>
              </div>

              {/* O que evitar */}
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-300 rounded-lg p-6 sm:p-8 mb-12">
                <h3 className="text-xl font-semibold text-red-700 dark:text-red-400 mb-4">
                  ❌ O Que Evitar
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Amarelo/Cinza Claro em Textos
                      </p>
                      <p className="text-sm text-yellow-600 dark:text-yellow-400">
                        Este texto em amarelo claro é muito difícil de ler!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pouco Contraste
                      </p>
                      <p
                        className="text-sm"
                        style={{
                          color: "rgb(200, 200, 200)",
                          background: "white",
                        }}
                      >
                        Cinza claro em branco não tem contraste suficiente
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dica */}
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-300 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
                  💡 Dica: Use o Contrast Checker
                </h3>
                <p className="text-foreground/80 mb-4">
                  Verifique o contraste de suas cores em{" "}
                  <a
                    href="https://webaim.org/resources/contrastchecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    WebAIM Contrast Checker
                  </a>
                </p>
                <p className="text-sm text-foreground/70">
                  Cole seus códigos de cor (hex, rgb) e ele dirá se atendem aos
                  padrões WCAG AA ou AAA
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Alignment Example */}
        {activeTab === "alignment" && (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                📐 Alinhamento: Ordem e Equilíbrio
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Alinhamento correto cria ordem visual e melhora legibilidade
              </p>

              {/* Left Align */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ✅ Left-Align (Recomendado para Texto)
                </h3>
                <div className="border border-green-300 bg-green-50 dark:bg-green-950/20 rounded-lg p-6">
                  <p className="text-left text-foreground/80">
                    Este parágrafo está alinhado à esquerda, que é a forma
                    recomendada para texto em inglês e português. O olho segue
                    naturalmente da esquerda para a direita, e o alinhamento à
                    esquerda facilita a leitura.
                  </p>
                </div>
              </div>

              {/* Center Align */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ⚠️ Center-Align (Use com Cuidado)
                </h3>
                <div className="border border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-6">
                  <p className="text-center font-semibold text-foreground">
                    Use center-align apenas para títulos ou blocos curtos
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Nunca para parágrafos longos!
                  </p>
                </div>
              </div>

              {/* Right Align */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  📊 Right-Align (Números em Tabelas)
                </h3>
                <p className="text-foreground/70 mb-4">
                  Números devem estar alinhados à direita para fácil comparação
                </p>
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-4">Descrição</th>
                        <th className="text-right p-4">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="text-left p-4">Produto A</td>
                        <td className="text-right p-4 font-mono">
                          R$ 1.234,56
                        </td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="text-left p-4">Produto B</td>
                        <td className="text-right p-4 font-mono">R$ 89,00</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="text-left p-4">Produto C</td>
                        <td className="text-right p-4 font-mono">
                          R$ 12.345,67
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  💡 Note como os números estão alinhados pela casa decimal,
                  facilitando comparação!
                </p>
              </div>

              {/* Grid and Guides */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  🔲 Usando Grade (Grid) e Guias
                </h3>
                <p className="text-foreground/70 mb-6">
                  Use grids para manter alinhamento consistente
                </p>
                <div className="border border-border rounded-lg p-6 bg-gradient-to-br from-muted/30 to-muted/50">
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-primary/10 border border-primary/30 rounded flex items-center justify-center font-semibold text-foreground"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Grade 4 colunas mantém elementos alinhados perfeitamente
                </p>
              </div>

              {/* Dica de Design Tools */}
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-300 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                  💡 Dica: Ferramentas de Design
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li>
                    <strong>Figma:</strong> Use alignment tools (Ctrl+Alt+A)
                    para alinhar múltiplos elementos
                  </li>
                  <li>
                    <strong>Grids:</strong> Configure grids personalizadas na
                    tela para manter consistência
                  </li>
                  <li>
                    <strong>Guides:</strong> Use guias visuais para referência
                    rápida
                  </li>
                  <li>
                    <strong>CSS Grid:</strong> Na web, use CSS Grid para layouts
                    perfeitos
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Design System Example */}
        {activeTab === "design-system" && (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                🎨 Design System: Componentes Profissionais
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Exemplos práticos de componentes seguindo o Design System Master
                com contraste garantido e acessibilidade WCAG 2.1 AA
              </p>

              {/* Buttons Section */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Botões - Todos os Estados
                </h3>
                <p className="text-foreground/70 mb-6">
                  Botões seguindo o Design System com 5 estados: normal, hover,
                  active, focus, disabled
                </p>

                <div className="space-y-6">
                  {/* Primary Buttons */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      Primary Buttons
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base transition-all duration-150 hover:opacity-90 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        Primary
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base transition-all duration-150 hover:opacity-90 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                        Disabled
                      </button>
                    </div>
                  </div>

                  {/* Secondary Buttons */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      Secondary Buttons
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-background border-2 border-border text-foreground rounded-lg font-semibold text-base transition-all duration-150 hover:bg-muted hover:border-primary/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        Secondary
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-foreground rounded-lg font-semibold text-base transition-all duration-150 hover:bg-muted active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        Ghost
                      </button>
                    </div>
                  </div>

                  {/* Semantic Buttons */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      Semantic Buttons
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-green-600 text-white rounded-lg font-semibold text-base transition-all duration-150 hover:bg-green-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                        Success
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-destructive text-destructive-foreground rounded-lg font-semibold text-base transition-all duration-150 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2">
                        Danger
                      </button>
                    </div>
                  </div>

                  {/* Button Sizes */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      Tamanhos
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <button className="inline-flex items-center justify-center gap-2 h-7 px-2 text-xs bg-primary text-primary-foreground rounded font-semibold transition-all duration-150 hover:opacity-90">
                        XS
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-8 px-3 text-sm bg-primary text-primary-foreground rounded-md font-semibold transition-all duration-150 hover:opacity-90">
                        SM
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 text-base bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-150 hover:opacity-90">
                        MD
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 h-12 px-6 text-lg bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-150 hover:opacity-90">
                        LG
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inputs Section */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Inputs & Forms - Contrast-Safe
                </h3>
                <p className="text-foreground/70 mb-6">
                  Inputs com contraste garantido em ambos os temas (light/dark)
                </p>

                <div className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Nome do Campo
                      <span className="text-destructive ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Digite aqui..."
                      className="w-full h-11 px-3 text-base text-foreground bg-background border-2 border-border rounded-lg transition-all duration-180 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground disabled:bg-muted disabled:opacity-70 disabled:cursor-not-allowed"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Texto de ajuda opcional
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full h-11 px-3 text-base text-foreground bg-background border-2 border-destructive rounded-lg transition-all duration-180 focus:outline-none focus:border-destructive focus:ring-2 focus:ring-destructive/20 placeholder:text-muted-foreground"
                      aria-invalid="true"
                    />
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <span>⚠</span>
                      Campo obrigatório
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      disabled
                      className="w-full h-11 px-3 text-base text-foreground bg-muted border-2 border-border rounded-lg opacity-70 cursor-not-allowed"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Campo desabilitado
                    </p>
                  </div>
                </div>
              </div>

              {/* Cards Section */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Cards - Variações
                </h3>
                <p className="text-foreground/70 mb-6">
                  Cards com diferentes níveis de elevação e interatividade
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Standard Card */}
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/50">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      Card Padrão
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Card com hover suave e borda que muda de cor
                    </p>
                  </div>

                  {/* Elevated Card */}
                  <div className="bg-card border-0 rounded-lg p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      Card Elevado
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Card com sombra mais pronunciada, sem borda
                    </p>
                  </div>

                  {/* Interactive Card */}
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer active:translate-y-0">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      Card Interativo
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Card que se eleva ao passar o mouse
                    </p>
                  </div>

                  {/* Card with Footer */}
                  <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                    <div className="p-6 pb-4 border-b border-border">
                      <h4 className="text-xl font-semibold text-card-foreground mb-2">
                        Card com Footer
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Card com header e footer separados
                      </p>
                    </div>
                    <div className="px-6 py-4 flex items-center justify-between bg-muted/30">
                      <span className="text-sm text-muted-foreground">
                        Footer content
                      </span>
                      <button className="text-sm font-semibold text-primary hover:underline">
                        Ação
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skeleton Loading */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Loading States - Skeleton Screens
                </h3>
                <p className="text-foreground/70 mb-6">
                  <strong>NUNCA use spinners genéricos.</strong> SEMPRE use
                  skeleton screens conforme o Design System.
                </p>

                <div className="space-y-4 max-w-md">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="h-6 bg-muted rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Skeleton screen simulando carregamento de conteúdo
                  </p>
                </div>
              </div>

              {/* Design System Principles */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  💡 Princípios do Design System
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      <strong>Contraste Garantido:</strong> Todos os componentes
                      têm contraste mínimo 4.5:1 (WCAG AA)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      <strong>5 Estados:</strong> Normal, Hover, Active, Focus,
                      Disabled em todos os componentes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      <strong>Dark Mode:</strong> Funciona perfeitamente em
                      ambos os temas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      <strong>Acessibilidade:</strong> ARIA labels, keyboard
                      navigation, screen reader support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>
                      <strong>Performance:</strong> Animações GPU-accelerated
                      (transform/opacity)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <MasterpieceFooter />
    </div>
  );
}
