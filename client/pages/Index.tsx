import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GrowthTracker from "@/components/GrowthTracker";
import ColorPlayground from "@/components/ColorPlayground";
import ContrastPlayground from "@/components/ContrastPlayground";
import TypographyPlayground from "@/components/TypographyPlayground";
import MasterpieceFooter from "@/components/MasterpieceFooter";
import { useTranslation } from "@/hooks/useTranslation";
import {
  ColorPillarIcon,
  TypographyPillarIcon,
  HierarchyPillarIcon,
  ContrastPillarIcon,
  AlignmentPillarIcon,
} from "@/components/icons/FundamentalIcons";
import {
  Search,
  Sparkles,
  CheckCircle2,
  Copy,
  ChevronRight,
  Shield,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { toast } from "sonner";

export default function Index() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const copyRule = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Regra copiada com sucesso!");
  };

  const fundamentals = [
    {
      id: "fund-color",
      tag: "color",
      number: "01",
      title: t("home.color.title"),
      subtitle: t("home.color.subtitle"),
      accentColor: "from-[#ff6b35] to-[#ff8f5e]",
      accentBorder: "border-[#ff6b35]/30",
      accentText: "text-cyber-orange",
      icon: ColorPillarIcon,
      description: t("home.color.description"),
      theoryTitle: t("home.color.theory.title"),
      theoryP1: t("home.color.theory.p1"),
      theoryP2: t("home.color.theory.p2"),
      schemes: [
        { name: "Monocromático", text: t("home.color.schemes.monochromatic") },
        { name: "Complementar", text: t("home.color.schemes.complementary") },
        { name: "Triádico", text: t("home.color.schemes.triadic") },
        { name: "Análogo", text: t("home.color.schemes.analogous") },
      ],
      applyingTitle: t("home.color.applying.title"),
      applyingP1: t("home.color.applying.p1"),
      applyingP2: t("home.color.applying.p2"),
      tipsTitle: t("home.color.tips.title"),
      tips: [
        t("home.color.tips.lessIsMore"),
        t("home.color.tips.saturation"),
        t("home.color.tips.consistent"),
        t("home.color.tips.contrast"),
      ],
      playground: <ColorPlayground />,
    },
    {
      id: "fund-typography",
      tag: "typography",
      number: "02",
      title: t("home.typography.title"),
      subtitle: t("home.typography.subtitle"),
      accentColor: "from-[#00d9ff] to-[#38bdf8]",
      accentBorder: "border-[#00d9ff]/30",
      accentText: "text-cyber-cyan",
      icon: TypographyPillarIcon,
      description: t("home.typography.description"),
      theoryTitle: t("home.typography.choosing.title"),
      theoryP1: t("home.typography.choosing.p1"),
      theoryP2: t("home.typography.p2"),
      schemes: [
        { name: "Serif", text: t("home.typography.types.serif") },
        { name: "Sans-serif", text: t("home.typography.types.sansSerif") },
        { name: "Monospace", text: t("home.typography.types.monospace") },
      ],
      applyingTitle: t("home.typography.spacing.title"),
      applyingP1: t("home.typography.spacing.p1"),
      applyingP2: t("home.typography.spacing.p2"),
      tipsTitle: t("home.typography.tips.title"),
      tips: [
        t("home.typography.tips.opposites"),
        t("home.typography.tips.weights"),
        t("home.typography.tips.limit"),
        t("home.typography.tips.scale"),
        t("home.typography.tips.lineHeight"),
        t("home.typography.tips.alignment"),
      ],
      playground: <TypographyPlayground />,
    },
    {
      id: "fund-hierarchy",
      tag: "hierarchy",
      number: "03",
      title: t("home.hierarchy.title"),
      subtitle: t("home.hierarchy.subtitle"),
      accentColor: "from-[#a855f7] to-[#c084fc]",
      accentBorder: "border-[#a855f7]/30",
      accentText: "text-purple-400",
      icon: HierarchyPillarIcon,
      description: t("home.hierarchy.description"),
      theoryTitle: t("home.hierarchy.how.title"),
      theoryP1: t("home.hierarchy.how.p1"),
      theoryP2: t("home.hierarchy.size.p1"),
      schemes: [
        { name: "Tamanho & Peso", text: t("home.hierarchy.size.p1") },
        { name: "Contraste de Cor", text: t("home.hierarchy.color.p1") },
        { name: "Espaçamento em Escala", text: t("home.hierarchy.spacing.p1") },
      ],
      applyingTitle: t("home.hierarchy.spacing.title"),
      applyingP1: t("home.hierarchy.spacing.p1"),
      applyingP2: t("home.hierarchy.spacing.p2"),
      tipsTitle: "Princípios de Escaneamento",
      tips: [
        "Padrão F: Usuários escaneiam o topo e a borda esquerda",
        "Padrão Z: Ideal para landing pages com call to actions claros",
        "Ritmo Visual: Dê respiro aos elementos de maior relevância",
      ],
      playground: (
        <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15">
          <div className="flex items-center gap-2 mb-2">
            <HierarchyPillarIcon className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-mono uppercase font-bold text-purple-400 tracking-wider">
              Simulador Visual
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
            Padrão de Escaneamento & Hierarquia F/Z
          </h3>
          <p className="text-xs text-slate-300 font-sans mb-6">
            Compare como o olhar do usuário se desloca numa interface estruturada versus confusa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Good Hierarchy */}
            <div className="p-5 rounded-xl bg-black/50 border border-cyber-green/40 relative overflow-hidden">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-cyber-green font-bold uppercase mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" /> Hierarquia Clara (Z-Pattern)
              </span>
              <div className="space-y-3">
                <div className="h-6 w-3/4 bg-white/20 rounded font-bold text-xs flex items-center px-2 text-white">
                  1. Título Impactante (Eye Catcher)
                </div>
                <div className="h-4 w-full bg-white/10 rounded text-[10px] flex items-center px-2 text-slate-400">
                  2. Texto de apoio com contraste equilibrado
                </div>
                <div className="flex justify-end pt-2">
                  <div className="h-7 px-4 bg-cyber-orange text-black font-bold text-xs rounded flex items-center shadow-cyber-orange">
                    3. Ação Principal (CTA)
                  </div>
                </div>
              </div>
            </div>

            {/* Bad Hierarchy */}
            <div className="p-5 rounded-xl bg-black/50 border border-rose-500/30 opacity-70">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-rose-400 font-bold uppercase mb-3">
                ⚠️ Sem Hierarquia (Ruído Visual)
              </span>
              <div className="space-y-3">
                <div className="h-4 w-full bg-white/15 rounded text-[10px] flex items-center px-2 text-slate-300">
                  Texto todo no mesmo peso e tamanho
                </div>
                <div className="h-4 w-full bg-white/15 rounded text-[10px] flex items-center px-2 text-slate-300">
                  Nenhum ponto focal claro
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-7 w-1/2 bg-white/15 rounded flex items-center justify-center text-[10px] text-slate-300">
                    Botão 1
                  </div>
                  <div className="h-7 w-1/2 bg-white/15 rounded flex items-center justify-center text-[10px] text-slate-300">
                    Botão 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "fund-contrast",
      tag: "contrast",
      number: "04",
      title: t("home.contrast.title"),
      subtitle: t("home.contrast.subtitle"),
      accentColor: "from-[#eab308] to-[#facc15]",
      accentBorder: "border-[#eab308]/30",
      accentText: "text-amber-400",
      icon: ContrastPillarIcon,
      description: t("home.contrast.description"),
      theoryTitle: t("home.contrast.accessibility.title"),
      theoryP1: t("home.contrast.accessibility.p1"),
      theoryP2: t("home.contrast.accessibility.p2"),
      schemes: [
        { name: "Contraste de Matiz", text: "Uso de cores quentes contra frias para destacar elementos." },
        { name: "Contraste de Valor", text: "Diferença de brilho entre texto e plano de fundo (WCAG)." },
        { name: "Contraste de Tamanho", text: "Grandes títulos contra pequenos rótulos contextuais." },
      ],
      applyingTitle: "Diretrizes WCAG 2.1",
      applyingP1: "Texto normal requer relação mínima de 4.5:1. Texto grande (18pt+ ou 14pt negrito) requer no mínimo 3:1.",
      applyingP2: "Use a calculadora abaixo para verificar em tempo real as combinações do seu projeto.",
      tipsTitle: "Boas Práticas de Contraste",
      tips: [
        "Nunca dependa apenas de cor para indicar erro ou sucesso (adicione ícones)",
        "Evite cinza claro (#999) sobre branco (#FFF)",
        "Teste interfaces no modo escuro e com luz solar direta",
      ],
      playground: <ContrastPlayground />,
    },
    {
      id: "fund-alignment",
      tag: "alignment",
      number: "05",
      title: t("home.alignment.title"),
      subtitle: t("home.alignment.subtitle"),
      accentColor: "from-[#10b981] to-[#34d399]",
      accentBorder: "border-[#10b981]/30",
      accentText: "text-cyber-green",
      icon: AlignmentPillarIcon,
      description: t("home.alignment.description"),
      theoryTitle: "Alinhamento & Ritmo Vertical",
      theoryP1: t("home.alignment.p2"),
      theoryP2: t("home.alignment.p3"),
      schemes: [
        { name: "Alinhamento à Esquerda", text: "O padrão natural de leitura no ocidente. Evite centralizar parágrafos longos." },
        { name: "Alinhamento Óptico", text: "Alinhe ícones geométricos pelo centro de massa, não apenas pelo bounding box." },
        { name: "Grade de 8 Pontos", text: "Mantenha margens e espaçamentos múltiplos de 8px (8, 16, 24, 32, 48, 64px)." },
      ],
      applyingTitle: "Sistema de Espaçamento 8pt Grid",
      applyingP1: t("home.alignment.p4"),
      applyingP2: "Ao adotar uma grade matemática previsível, a interface transmite ordem, solidez e precisão profissional.",
      tipsTitle: "Dicas de Alinhamento",
      tips: [
        "Alinhe todos os campos de formulário e labels na mesma linha vertical",
        "Mantenha raios de borda consistentes (ex: 8px ou 12px em todo o app)",
        "Use contêineres com max-width centralizados para leitura confortável",
      ],
      playground: (
        <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15">
          <div className="flex items-center gap-2 mb-2">
            <AlignmentPillarIcon className="w-5 h-5 text-cyber-green" />
            <span className="text-xs font-mono uppercase font-bold text-cyber-green tracking-wider">
              Grade & Ritmo
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
            Visualizador de Grade 8pt & Alinhamento Óptico
          </h3>
          <p className="text-xs text-slate-300 font-sans mb-6">
            Estrutura modular calculada com precisão militar.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-cyber-green text-lg font-bold block">8px</span>
              <span className="text-slate-400 text-[10px]">Padding Compacto</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-cyber-cyan text-lg font-bold block">16px</span>
              <span className="text-slate-400 text-[10px]">Espaçamento Padrão</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-cyber-orange text-lg font-bold block">24px</span>
              <span className="text-slate-400 text-[10px]">Gap entre Cartões</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-purple-400 text-lg font-bold block">32px+</span>
              <span className="text-slate-400 text-[10px]">Separação de Seções</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredFundamentals = useMemo(() => {
    return fundamentals.filter((item) => {
      const matchesTag = selectedTag === "all" || item.tag === selectedTag;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tips.some((tip) => tip.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTag && matchesQuery;
    });
  }, [searchQuery, selectedTag, fundamentals]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 selection:bg-[#ff6b35] selection:text-black">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Growth Tracker Section */}
        <section>
          <GrowthTracker />
        </section>

        {/* Search & Real-Time Filter Bar */}
        <section id="interactive-tools" className="scroll-mt-24 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar princípios, dicas ou regras..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/60 border border-white/15 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors"
              />
            </div>

            {/* Quick Filter Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar">
              {[
                { key: "all", label: "Todos" },
                { key: "color", label: "🎨 Cores" },
                { key: "typography", label: "✍️ Tipografia" },
                { key: "hierarchy", label: "📐 Hierarquia" },
                { key: "contrast", label: "👁️ Contraste" },
                { key: "alignment", label: "📏 Alinhamento" },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedTag(filter.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    selectedTag === filter.key
                      ? "bg-white/15 text-cyber-cyan font-bold border border-cyber-cyan/40"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* The 5 Fundamentals Masterpiece Modules */}
        <section className="space-y-16">
          {filteredFundamentals.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-24 rounded-3xl glass-panel border border-white/10 p-6 sm:p-10 relative overflow-hidden transition-all hover:border-white/20"
              >
                {/* Background decorative glow */}
                <div
                  className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br ${item.accentColor} opacity-10 rounded-full blur-3xl pointer-events-none`}
                />

                {/* Header Badge & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accentColor} p-0.5 shadow-lg flex-shrink-0`}
                    >
                      <div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center font-display font-extrabold text-white text-base">
                        {item.number}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono font-bold uppercase ${item.accentText}`}>
                          Fundamento {item.number}
                        </span>
                        <span className="text-slate-600 font-mono">•</span>
                        <span className="text-xs font-mono text-slate-400 uppercase">
                          UI/UX Core
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-0.5">
                        {item.title}
                      </h2>
                      <p className="text-sm text-slate-300 font-sans mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => copyRule(`Fundamento UI #${item.number}: ${item.title} - ${item.subtitle}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all self-start sm:self-auto"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Regra</span>
                  </button>
                </div>

                {/* Main Content Body */}
                <div className="py-6 space-y-6">
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Theory & Concepts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                      <h4 className="font-display font-bold text-white text-base flex items-center gap-2">
                        <Sparkles className={`w-4 h-4 ${item.accentText}`} />
                        {item.theoryTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {item.theoryP1}
                      </p>
                      {item.theoryP2 && (
                        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                          {item.theoryP2}
                        </p>
                      )}
                    </div>

                    <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                      <h4 className="font-display font-bold text-white text-base flex items-center gap-2">
                        <Zap className={`w-4 h-4 ${item.accentText}`} />
                        {item.applyingTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {item.applyingP1}
                      </p>
                      {item.applyingP2 && (
                        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                          {item.applyingP2}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Schemes or Rules Sub-list */}
                  {item.schemes && item.schemes.length > 0 && (
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                      <h5 className="font-display font-bold text-xs font-mono uppercase tracking-wider text-slate-400">
                        Variações & Modelos de Aplicação
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.schemes.map((scheme, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5"
                          >
                            <span className={`font-mono text-xs font-bold ${item.accentText} mt-0.5`}>
                              0{idx + 1}.
                            </span>
                            <div className="text-xs font-sans text-slate-300 leading-relaxed">
                              {scheme.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actionable Tips */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10">
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-orange mb-3 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      {item.tipsTitle}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.tips.map((tip, tipIdx) => (
                        <div key={tipIdx} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Embedded Live Interactive Playground */}
                <div className="pt-4 border-t border-white/10">
                  {item.playground}
                </div>
              </div>
            );
          })}
        </section>

        {/* Final Masterpiece Conclusion Banner */}
        <section className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-cyber-orange/40 bg-gradient-to-br from-[#140b08] via-[#090a0f] to-[#050505] shadow-cyber-orange/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-orange/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyber-orange px-3 py-1 rounded-full bg-cyber-orange/10 border border-cyber-orange/30 inline-block">
              {t("home.conclusion.title")}
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Pronto para construir interfaces memoráveis?
            </h3>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              {t("home.conclusion.p1")}
            </p>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              {t("home.conclusion.p2")}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#growth-tracker"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyber-orange text-black font-display font-bold text-sm tracking-wide shadow-cyber-orange hover:opacity-95 transition-all"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>Checar Meu Score de Maestria</span>
              </a>
              <a
                href="https://artesdosul.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel text-white font-display font-semibold text-sm hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-all"
              >
                <span>Conhecer o Ecossistema @artesdosul</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MasterpieceFooter />
    </div>
  );
}
