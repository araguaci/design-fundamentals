import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Trophy, Flame, Sparkles, RefreshCw, Check, Copy } from "lucide-react";
import { toast } from "sonner";

interface ChecklistItem {
  id: string;
  category: "color" | "typography" | "hierarchy" | "contrast" | "alignment";
  title: string;
  desc: string;
  actionSnippet?: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // Color
  {
    id: "c1",
    category: "color",
    title: "Dominar a regra 60-30-10",
    desc: "60% cor neutra/fundo, 30% secundária/estrutural, 10% cor de destaque em CTAs cruciais.",
    actionSnippet: ":root { --p-60: #050505; --s-30: #121216; --a-10: #ff6b35; }"
  },
  {
    id: "c2",
    category: "color",
    title: "Evitar cores puras (preto #000 e cinza sem matiz)",
    desc: "Use tons sutis com matiz azulado ou quente para criar profundidade e naturalidade.",
    actionSnippet: "background: #090a0f; /* Em vez de #000000 estéril */"
  },
  {
    id: "c3",
    category: "color",
    title: "Harmonia Cromática Intencional",
    desc: "Utilize esquemas análogos para fluidez ou complementares para máximo impacto visual.",
    actionSnippet: "/* Complementares: Laranja (#ff6b35) + Ciano (#00d9ff) */"
  },

  // Typography
  {
    id: "t1",
    category: "typography",
    title: "Limitar a 2 famílias tipográficas",
    desc: "Uma fonte para Display/Headings (ex: Bricolage Grotesque) e outra para Body/Leitura (Inter).",
    actionSnippet: "font-family: 'Bricolage Grotesque', sans-serif;"
  },
  {
    id: "t2",
    category: "typography",
    title: "Ajustar Line-Height e Escala Modular",
    desc: "Line-height 1.5 a 1.6 em parágrafos e 1.1 a 1.25 em títulos grandes.",
    actionSnippet: "p { line-height: 1.6; max-width: 65ch; }"
  },
  {
    id: "t3",
    category: "typography",
    title: "Letter-Spacing proporcional",
    desc: "Tracking negativo em títulos grandes (-0.02em) e normal ou sutilmente aberto em textos mono.",
    actionSnippet: "letter-spacing: -0.025em;"
  },

  // Hierarchy
  {
    id: "h1",
    category: "hierarchy",
    title: "Padrão de Escaneamento F & Z",
    desc: "Posicione elementos mais importantes no fluxo natural de escaneamento visual do olho humano.",
    actionSnippet: "/* Top-Left: Logo/Context -> Top-Right: Action CTA */"
  },
  {
    id: "h2",
    category: "hierarchy",
    title: "Escala de Peso e Escaneabilidade",
    desc: "Diferencie níveis de títulos por tamanho, peso de fonte e opacidade de cor.",
    actionSnippet: "h1: text-4xl font-extrabold | p: text-base text-slate-300"
  },
  {
    id: "h3",
    category: "hierarchy",
    title: "Espaçamento em Escala 8pt Grid",
    desc: "Use múltiplos de 4px / 8px para margens e paddings, criando ritmo visual consistente.",
    actionSnippet: "gap: 1.5rem (24px) | p-4 (16px) | p-8 (32px)"
  },

  // Contrast
  {
    id: "k1",
    category: "contrast",
    title: "Validar Relação de Contraste WCAG AA (4.5:1)",
    desc: "Todo texto regular deve ter contraste mínimo de 4.5:1 contra o fundo para acessibilidade.",
    actionSnippet: "/* #ffffff sobre #050505 = 20.4:1 (Passa WCAG AAA) */"
  },
  {
    id: "k2",
    category: "contrast",
    title: "Contraste de Elementos Interativos (3:1)",
    desc: "Bordas de input, ícones e botões devem ser claramente distinguíveis do fundo.",
    actionSnippet: "border: 1px solid rgba(255, 255, 255, 0.15);"
  },
  {
    id: "k3",
    category: "contrast",
    title: "Estados de Foco e Hover Visíveis",
    desc: "Sempre inclua `:focus-visible` com ring contrastante para navegação por teclado.",
    actionSnippet: "focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
  },

  // Alignment
  {
    id: "a1",
    category: "alignment",
    title: "Alinhamento Óptico e Grade Consistente",
    desc: "Alinhe textos à esquerda (evite centralizar parágrafos longos) e alinhe ícones ao centro óptico.",
    actionSnippet: "text-align: left; items-center justify-center;"
  },
  {
    id: "a2",
    category: "alignment",
    title: "Largura de Linha Ótima (45-75 caracteres)",
    desc: "Limite `max-w-prose` ou `max-w-3xl` para evitar fadiga ocular na leitura.",
    actionSnippet: "max-width: 65ch; margin-inline: auto;"
  },
  {
    id: "a3",
    category: "alignment",
    title: "Consistência de Raios de Borda (Radius Token)",
    desc: "Mantenha o mesmo raio de borda em cartões, botões e modais para coesão estrutural.",
    actionSnippet: "--radius: 0.75rem; rounded-xl;"
  }
];

export default function GrowthTracker() {
  const [completed, setCompleted] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("df_mastery_progress");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    try {
      localStorage.setItem("df_mastery_progress", JSON.stringify(completed));
      window.dispatchEvent(new Event("df_progress_updated"));
    } catch (e) {
      console.error(e);
    }
  }, [completed]);

  const toggleItem = (id: string) => {
    setCompleted((prev) => {
      const isCompleted = prev.includes(id);
      const next = isCompleted ? prev.filter((i) => i !== id) : [...prev, id];
      if (!isCompleted) {
        toast.success("Fundamento concluído!", {
          description: "Progresso computado no Growth Tracker local."
        });
      }
      return next;
    });
  };

  const markAll = () => {
    const allIds = CHECKLIST_ITEMS.map((i) => i.id);
    setCompleted(allIds);
    toast.success("Parabéns! Nível Mestre Desbloqueado 🏆");
  };

  const resetAll = () => {
    setCompleted([]);
    toast.info("Growth Tracker reiniciado.");
  };

  const copySnippet = (snippet: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(snippet);
    toast.success("Código copiado para a área de transferência!");
  };

  const total = CHECKLIST_ITEMS.length;
  const count = completed.length;
  const percentage = Math.round((count / total) * 100);

  // Growth Level title calculation
  let levelTitle = "Cadete de UI";
  let levelColor = "text-slate-300";
  if (percentage >= 100) {
    levelTitle = "Arquiteto Masterpiece Cyber-Growth ⚡";
    levelColor = "text-gradient-cyber font-extrabold";
  } else if (percentage >= 70) {
    levelTitle = "Design Engineer Sênior 🛡️";
    levelColor = "text-cyber-green font-bold";
  } else if (percentage >= 35) {
    levelTitle = "Frontend UI Builder 🚀";
    levelColor = "text-cyber-cyan font-bold";
  }

  const filteredItems = activeTab === "all"
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter((i) => i.category === activeTab);

  return (
    <div id="growth-tracker" className="relative scroll-mt-24 w-full">
      <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/15">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-orange/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Flame className="w-5 h-5 text-cyber-orange animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-orange">
                Growth Mastery Engine
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Rastreador de Maestria em UI
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-xl font-sans">
              Marque os princípios aplicados no seu projeto. O progresso é salvo no seu navegador e sincroniza em tempo real.
            </p>
          </div>

          {/* Level Card */}
          <div className="bg-black/50 border border-white/10 rounded-xl p-4 min-w-[280px] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Nível Atual:</span>
              <span className={`text-xs font-mono ${levelColor}`}>{levelTitle}</span>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-slate-300">Progresso</span>
                <span className="text-cyber-cyan font-bold">{count}/{total} ({percentage}%)</span>
              </div>
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyber-orange via-[#ff9055] to-cyber-cyan transition-all duration-500 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={markAll}
                className="text-xs font-mono text-cyber-cyan hover:underline inline-flex items-center gap-1"
              >
                <Check className="w-3 h-3" /> Concluir Tudo
              </button>
              <button
                onClick={resetAll}
                className="text-xs font-mono text-slate-400 hover:text-rose-400 inline-flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Reiniciar
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
          {[
            { key: "all", label: "Todos os 15 Itens" },
            { key: "color", label: "🎨 Cores" },
            { key: "typography", label: "✍️ Tipografia" },
            { key: "hierarchy", label: "📐 Hierarquia" },
            { key: "contrast", label: "👁️ Contraste" },
            { key: "alignment", label: "📏 Alinhamento" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                activeTab === tab.key
                  ? "bg-white/15 text-cyber-cyan font-bold border border-cyber-cyan/40 shadow-sm"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {filteredItems.map((item) => {
            const isDone = completed.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 select-none flex flex-col justify-between ${
                  isDone
                    ? "bg-cyber-green/10 border-cyber-green/40 shadow-cyber-green/10 shadow-sm"
                    : "bg-white/[0.03] hover:bg-white/[0.07] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className={`font-display font-bold text-sm leading-snug ${isDone ? "text-white line-through opacity-80" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <div className="flex-shrink-0 mt-0.5">
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-cyber-green fill-cyber-green/20" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-500 hover:text-slate-300" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.actionSnippet && (
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[190px]">
                      {item.actionSnippet}
                    </span>
                    <button
                      onClick={(e) => copySnippet(item.actionSnippet!, e)}
                      title="Copiar snippet CSS"
                      className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-cyber-orange transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
