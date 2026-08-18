import { useState } from "react";
import { Maximize2, Minimize2, Smartphone, Tablet, Monitor, Copy, Check, Sparkles, Layers, Sliders } from "lucide-react";
import { toast } from "sonner";

export default function ResponsiveLab() {
  const [containerWidth, setContainerWidth] = useState<number>(540);
  const [minFont, setMinFont] = useState<number>(16);
  const [maxFont, setMaxFont] = useState<number>(32);
  const [minVw, setMinVw] = useState<number>(360);
  const [maxVw, setMaxVw] = useState<number>(1280);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Fluid typography clamp calculation
  const slope = ((maxFont - minFont) / (maxVw - minVw)) * 100;
  const intercept = minFont - (slope / 100) * minVw;
  const clampCss = `font-size: clamp(${minFont}px, ${intercept.toFixed(2)}px + ${slope.toFixed(2)}vw, ${maxFont}px);`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    toast.success(`${label} copiado!`);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getContainerState = (width: number) => {
    if (width < 380) return { label: "Mobile Compact (@container < 380px)", badge: "bg-rose-500/20 text-rose-300 border-rose-500/30" };
    if (width < 600) return { label: "Card Horizontal (@container 380px - 600px)", badge: "bg-amber-500/20 text-amber-300 border-amber-500/30" };
    return { label: "Full Dashboard Widget (@container > 600px)", badge: "bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30" };
  };

  const state = getContainerState(containerWidth);

  return (
    <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/15 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Laboratório de Design Responsivo & Container Queries</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Simulador de Container Queries & Tipografia Fluida
          </h3>
          <p className="text-sm text-slate-300 font-sans mt-1">
            Veja como componentes adaptativos se transformam pelo espaço do contêiner-pai, não apenas pela tela inteira.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10 self-start">
          <button
            onClick={() => setContainerWidth(320)}
            className={`p-2 rounded-lg transition-colors ${containerWidth === 320 ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"}`}
            title="320px (Mobile)"
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <button
            onClick={() => setContainerWidth(520)}
            className={`p-2 rounded-lg transition-colors ${containerWidth === 520 ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"}`}
            title="520px (Tablet/Sidebar)"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setContainerWidth(740)}
            className={`p-2 rounded-lg transition-colors ${containerWidth === 740 ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"}`}
            title="740px (Desktop)"
          >
            <Monitor className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 1. Container Query Live Inspector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono uppercase text-slate-300 font-bold flex items-center gap-2">
            <span>Largura do Contêiner:</span>
            <span className="text-cyber-orange font-mono font-bold text-sm">{containerWidth}px</span>
          </label>
          <span className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${state.badge}`}>
            {state.label}
          </span>
        </div>

        <input
          type="range"
          min={280}
          max={780}
          value={containerWidth}
          onChange={(e) => setContainerWidth(Number(e.target.value))}
          className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#ff6b35] border border-white/10"
        />

        {/* Resizable Preview Arena */}
        <div className="p-6 rounded-xl bg-black/80 border border-dashed border-white/20 overflow-hidden flex justify-center items-center min-h-[220px]">
          <div
            style={{ width: `${containerWidth}px` }}
            className="transition-all duration-200 ease-out bg-[#0c0e17] border border-cyber-cyan/40 rounded-xl p-4 sm:p-5 shadow-2xl relative"
          >
            <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-black border border-cyber-cyan/50 text-[10px] font-mono text-cyber-cyan">
              @container (min-width: {containerWidth}px)
            </div>

            {containerWidth < 380 ? (
              // Compact Mobile Card
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyber-orange/20 border border-cyber-orange/40 flex items-center justify-center text-cyber-orange font-bold text-sm">
                  DF
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Card Adaptativo Compacto</h4>
                  <p className="text-xs text-slate-400 mt-1">Modo coluna única para sidebars e telas estreitas.</p>
                </div>
                <div className="h-8 bg-cyber-orange text-black font-bold text-xs rounded flex items-center justify-center">
                  Ação Rápida
                </div>
              </div>
            ) : containerWidth < 600 ? (
              // Medium Horizontal Banner
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyber-cyan/20 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan font-bold text-base flex-shrink-0">
                    DF
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Layout Horizontal Fluido</h4>
                    <p className="text-xs text-slate-400">Expandiu automaticamente ao ultrapassar 380px.</p>
                  </div>
                </div>
                <div className="h-9 px-4 bg-cyber-cyan text-black font-bold text-xs rounded-lg flex items-center justify-center flex-shrink-0">
                  Explorar
                </div>
              </div>
            ) : (
              // Full Dashboard Data Widget
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="flex items-center gap-3 col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-orange to-cyber-cyan p-0.5 flex-shrink-0">
                    <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                      DF
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-base">Widget de Análise Completo</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-green/20 text-cyber-green border border-cyber-green/40">
                        Container &gt; 600px
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Distribuição em 3 colunas com telemetria e botões integrados.</p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-xs font-mono text-slate-300">Score: 98%</span>
                  <div className="h-9 px-4 bg-gradient-to-r from-cyber-orange to-[#ff8c5a] text-black font-bold text-xs rounded-lg flex items-center">
                    Gerenciar
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Fluid Typography Clamp() Generator */}
      <div className="border-t border-white/10 pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-display font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyber-orange" />
            Gerador de Tipografia Fluida (CSS clamp)
          </h4>
          <button
            onClick={() => copyToClipboard(clampCss, "CSS clamp()")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono text-slate-200 border border-white/10 transition-colors"
          >
            {copiedType === "CSS clamp()" ? <Check className="w-3.5 h-3.5 text-cyber-green" /> : <Copy className="w-3.5 h-3.5" />}
            <span>Copiar Regra</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="text-[11px] font-mono text-slate-400 block mb-1">Tamanho Mínimo (px)</label>
            <input
              type="number"
              value={minFont}
              onChange={(e) => setMinFont(Number(e.target.value))}
              className="w-full bg-black/50 border border-white/15 rounded-lg px-3 py-1.5 text-xs font-mono text-white"
            />
          </div>
          <div>
            <label className="text-[11px] font-mono text-slate-400 block mb-1">Tamanho Máximo (px)</label>
            <input
              type="number"
              value={maxFont}
              onChange={(e) => setMaxFont(Number(e.target.value))}
              className="w-full bg-black/50 border border-white/15 rounded-lg px-3 py-1.5 text-xs font-mono text-white"
            />
          </div>
          <div>
            <label className="text-[11px] font-mono text-slate-400 block mb-1">Viewport Mínimo (px)</label>
            <input
              type="number"
              value={minVw}
              onChange={(e) => setMinVw(Number(e.target.value))}
              className="w-full bg-black/50 border border-white/15 rounded-lg px-3 py-1.5 text-xs font-mono text-white"
            />
          </div>
          <div>
            <label className="text-[11px] font-mono text-slate-400 block mb-1">Viewport Máximo (px)</label>
            <input
              type="number"
              value={maxVw}
              onChange={(e) => setMaxVw(Number(e.target.value))}
              className="w-full bg-black/50 border border-white/15 rounded-lg px-3 py-1.5 text-xs font-mono text-white"
            />
          </div>
        </div>

        {/* Code Output */}
        <pre className="p-3.5 rounded-xl bg-black/80 border border-white/10 text-xs font-mono text-cyber-cyan overflow-x-auto">
          <code>{clampCss}</code>
        </pre>
      </div>
    </div>
  );
}
