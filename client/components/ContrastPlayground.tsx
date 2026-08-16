import { useState } from "react";
import { Eye, Check, X, Copy, Sparkles } from "lucide-react";
import { toast } from "sonner";

// Relative Luminance calculation based on WCAG 2.1 specs
function getLuminance(hex: string): number {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const a = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(fg: string, bg: string): number {
  try {
    const l1 = getLuminance(fg);
    const l2 = getLuminance(bg);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  } catch {
    return 1;
  }
}

export default function ContrastPlayground() {
  const [fgColor, setFgColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#050505");
  const [copied, setCopied] = useState(false);

  const ratio = getContrastRatio(fgColor, bgColor);
  const formattedRatio = ratio.toFixed(2);

  const passAALarge = ratio >= 3.0;
  const passAANormal = ratio >= 4.5;
  const passAAA = ratio >= 7.0;

  const copyCss = () => {
    const css = `/* WCAG Contrast Ratio: ${formattedRatio}:1 */\ncolor: ${fgColor};\nbackground-color: ${bgColor};`;
    navigator.clipboard.writeText(css);
    setCopied(true);
    toast.success("Regra CSS de Contraste copiada!");
    setTimeout(() => setCopied(false), 2000);
  };

  const setPreset = (fg: string, bg: string) => {
    setFgColor(fg);
    setBgColor(bg);
  };

  return (
    <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Eye className="w-5 h-5 text-cyber-cyan" />
            <span className="text-xs font-mono uppercase font-bold text-cyber-cyan tracking-wider">
              Acessibilidade em Tempo Real
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Calculadora de Contraste WCAG 2.1
          </h3>
          <p className="text-xs text-slate-300 font-sans mt-0.5">
            Teste se a combinação de texto e fundo atende aos padrões internacionais de legibilidade.
          </p>
        </div>

        <button
          onClick={copyCss}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-white transition-all self-start sm:self-auto"
        >
          {copied ? <Check className="w-4 h-4 text-cyber-green" /> : <Copy className="w-4 h-4 text-cyber-cyan" />}
          <span>{copied ? "Copiado!" : "Copiar Estilo CSS"}</span>
        </button>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-6">
        <span className="text-xs font-mono text-slate-400">Presets:</span>
        <button
          onClick={() => setPreset("#ffffff", "#050505")}
          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
        >
          Branco / Cyber Dark
        </button>
        <button
          onClick={() => setPreset("#ff6b35", "#050505")}
          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
        >
          Laranja Cyber / Dark
        </button>
        <button
          onClick={() => setPreset("#00d9ff", "#050505")}
          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
        >
          Ciano Neon / Dark
        </button>
        <button
          onClick={() => setPreset("#71717a", "#050505")}
          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
        >
          Cinza Fraco (Alerta!)
        </button>
      </div>

      {/* Inputs & Ratio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-center">
        {/* Color pickers */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Cor do Texto (Foreground)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border border-white/20"
              />
              <input
                type="text"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="bg-black/50 border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white uppercase focus:outline-none focus:border-cyber-cyan w-28"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Cor do Fundo (Background)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border border-white/20"
              />
              <input
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="bg-black/50 border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white uppercase focus:outline-none focus:border-cyber-cyan w-28"
              />
            </div>
          </div>
        </div>

        {/* Big Ratio Display */}
        <div className="text-center bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
          <span className="text-xs font-mono text-slate-400">Relação de Contraste</span>
          <div className="text-4xl sm:text-5xl font-display font-extrabold text-white my-2">
            {formattedRatio}<span className="text-cyber-cyan text-2xl">:1</span>
          </div>
          <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
            passAAA
              ? "bg-cyber-green/20 text-cyber-green border border-cyber-green/40"
              : passAANormal
              ? "bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40"
              : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
          }`}>
            {passAAA ? "Excelente (AAA)" : passAANormal ? "Aprovado (AA)" : "Reprovado para Texto Normal"}
          </span>
        </div>

        {/* Compliance Badges */}
        <div className="space-y-3 bg-black/30 border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">WCAG AA Texto Normal (4.5:1)</span>
            {passAANormal ? (
              <span className="flex items-center gap-1 text-cyber-green font-bold">
                <Check className="w-3.5 h-3.5" /> Passou
              </span>
            ) : (
              <span className="flex items-center gap-1 text-rose-400 font-bold">
                <X className="w-3.5 h-3.5" /> Falhou
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">WCAG AA Texto Grande (3.0:1)</span>
            {passAALarge ? (
              <span className="flex items-center gap-1 text-cyber-green font-bold">
                <Check className="w-3.5 h-3.5" /> Passou
              </span>
            ) : (
              <span className="flex items-center gap-1 text-rose-400 font-bold">
                <X className="w-3.5 h-3.5" /> Falhou
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">WCAG AAA Rigoroso (7.0:1)</span>
            {passAAA ? (
              <span className="flex items-center gap-1 text-cyber-green font-bold">
                <Check className="w-3.5 h-3.5" /> Passou
              </span>
            ) : (
              <span className="flex items-center gap-1 text-slate-500">
                <X className="w-3.5 h-3.5" /> Falhou
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Live Visual Sample */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <span className="text-xs font-mono text-slate-400 block mb-2">
          Prévia em Tempo Real (Aparência no Navegador):
        </span>
        <div
          className="p-6 rounded-xl border border-white/20 transition-colors space-y-2"
          style={{ backgroundColor: bgColor, color: fgColor }}
        >
          <h4 className="text-xl font-display font-bold">
            Tipografia com Contraste Real ({formattedRatio}:1)
          </h4>
          <p className="text-sm font-sans max-w-xl">
            Este texto demonstra exatamente como o usuário enxerga a combinação selecionada em telas com diferentes níveis de brilho e calibração.
          </p>
        </div>
      </div>
    </div>
  );
}
