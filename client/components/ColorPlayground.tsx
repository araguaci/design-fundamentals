import { useState } from "react";
import { Palette, Copy, Check, Sparkles, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface PaletteScheme {
  name: string;
  type: string;
  c60: string; // 60% Dominant
  c30: string; // 30% Structural
  c10: string; // 10% Accent
  desc: string;
}

const PRESET_SCHEMES: PaletteScheme[] = [
  {
    name: "Cyber-Growth Oficial",
    type: "Complementar",
    c60: "#050505",
    c30: "#181820",
    c10: "#ff6b35",
    desc: "A paleta oficial da skill @artesdosul: fundo profundo, superfícies neutras e ação em laranja neon."
  },
  {
    name: "Neon Matrix Blue",
    type: "Análogo",
    c60: "#0a0e17",
    c30: "#122033",
    c10: "#00d9ff",
    desc: "Perfeito para consoles de dados, telemetria, IA e dashboards técnicos."
  },
  {
    name: "Growth Emerald",
    type: "Triádico",
    c60: "#06100d",
    c30: "#0e241c",
    c10: "#10b981",
    desc: "Foco em finanças, conversão, validação de transações e métricas de sucesso."
  },
  {
    name: "Ultra Violet Quantum",
    type: "Monocromático",
    c60: "#0b0716",
    c30: "#1e1438",
    c10: "#a855f7",
    desc: "Ideal para experiências Web3, SaaS premium e interfaces futuristas."
  }
];

export default function ColorPlayground() {
  const [selectedScheme, setSelectedScheme] = useState<PaletteScheme>(PRESET_SCHEMES[0]);
  const [customAccent, setCustomAccent] = useState(PRESET_SCHEMES[0].c10);
  const [copied, setCopied] = useState(false);

  const activeAccent = customAccent || selectedScheme.c10;

  const getCssVariables = () => {
    return `:root {\n  --bg-dominant-60: ${selectedScheme.c60};\n  --surface-structural-30: ${selectedScheme.c30};\n  --accent-action-10: ${activeAccent};\n}`;
  };

  const handleCopyCss = () => {
    navigator.clipboard.writeText(getCssVariables());
    setCopied(true);
    toast.success("Tokens CSS de Cor Copiados!", {
      description: "Cole no seu arquivo de variáveis ou Tailwind config."
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Palette className="w-5 h-5 text-cyber-orange" />
            <span className="text-xs font-mono uppercase font-bold text-cyber-orange tracking-wider">
              Laboratório Interativo
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Harmonizador & Regra 60-30-10
          </h3>
          <p className="text-xs text-slate-300 font-sans mt-0.5">
            Visualize a proporção perfeita de cores para UI e copie o código CSS instantaneamente.
          </p>
        </div>

        <button
          onClick={handleCopyCss}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-white transition-all self-start sm:self-auto"
        >
          {copied ? <Check className="w-4 h-4 text-cyber-green" /> : <Copy className="w-4 h-4 text-cyber-cyan" />}
          <span>{copied ? "Copiado!" : "Copiar Tokens CSS"}</span>
        </button>
      </div>

      {/* Preset Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6">
        {PRESET_SCHEMES.map((scheme) => {
          const isSelected = selectedScheme.name === scheme.name;
          return (
            <button
              key={scheme.name}
              onClick={() => {
                setSelectedScheme(scheme);
                setCustomAccent(scheme.c10);
              }}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                isSelected
                  ? "bg-white/10 border-cyber-cyan/60 shadow-cyber-cyan/20 shadow-sm"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  {scheme.type}
                </span>
                <span className="text-xs font-display font-bold text-white block truncate">
                  {scheme.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: scheme.c60 }} />
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: scheme.c30 }} />
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: scheme.c10 }} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Live 60-30-10 Visualizer */}
      <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300">Distribuição Visual da UI</span>
          <span className="text-cyber-cyan">60% Fundo • 30% Estrutura • 10% Destaque</span>
        </div>

        {/* Proportional Bar */}
        <div className="h-10 w-full rounded-xl overflow-hidden flex border border-white/20 shadow-inner">
          <div
            className="h-full flex items-center justify-center text-[10px] font-mono font-bold text-slate-400 transition-all duration-300"
            style={{ width: "60%", backgroundColor: selectedScheme.c60 }}
          >
            60% Neutro ({selectedScheme.c60})
          </div>
          <div
            className="h-full flex items-center justify-center text-[10px] font-mono font-bold text-slate-300 transition-all duration-300 border-l border-r border-white/10"
            style={{ width: "30%", backgroundColor: selectedScheme.c30 }}
          >
            30% Superfície ({selectedScheme.c30})
          </div>
          <div
            className="h-full flex items-center justify-center text-[10px] font-mono font-bold text-black transition-all duration-300 shadow-lg"
            style={{ width: "10%", backgroundColor: activeAccent }}
          >
            10% CTA
          </div>
        </div>

        {/* Mini Mockup Demo using the selected palette */}
        <div
          className="p-5 rounded-xl border border-white/10 transition-colors"
          style={{ backgroundColor: selectedScheme.c60 }}
        >
          <div
            className="p-4 rounded-lg border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ backgroundColor: selectedScheme.c30 }}
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Prévia de Componente Real
              </span>
              <h4 className="text-sm font-display font-bold text-white">
                Dashboard Cyber-Growth Masterpiece
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mt-0.5">
                {selectedScheme.desc}
              </p>
            </div>

            <button
              style={{ backgroundColor: activeAccent, color: "#000" }}
              className="px-4 py-2 rounded-lg text-xs font-display font-bold whitespace-nowrap shadow-md hover:opacity-90 active:scale-95 transition-all"
            >
              Ação Principal (10%)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
