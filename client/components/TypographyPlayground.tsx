import { useState } from "react";
import { Type, Sliders, Copy, Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function TypographyPlayground() {
  const [lineHeight, setLineHeight] = useState(1.6);
  const [letterSpacing, setLetterSpacing] = useState(-0.02);
  const [maxWidthCh, setMaxWidthCh] = useState(65);
  const [fontFamily, setFontFamily] = useState<"bricolage" | "inter" | "mono">("bricolage");
  const [copied, setCopied] = useState(false);

  const getFontFamilyCss = () => {
    if (fontFamily === "bricolage") return "'Bricolage Grotesque', system-ui, sans-serif";
    if (fontFamily === "mono") return "'JetBrains Mono', monospace";
    return "'Inter', system-ui, sans-serif";
  };

  const getSnippet = () => {
    return `h1, h2, h3 {\n  font-family: ${getFontFamilyCss()};\n  letter-spacing: ${letterSpacing}em;\n}\n\np {\n  line-height: ${lineHeight};\n  max-width: ${maxWidthCh}ch;\n}`;
  };

  const copyCss = () => {
    navigator.clipboard.writeText(getSnippet());
    setCopied(true);
    toast.success("Regra CSS Tipográfica copiada!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Type className="w-5 h-5 text-cyber-green" />
            <span className="text-xs font-mono uppercase font-bold text-cyber-green tracking-wider">
              Micro-Tipografia & Ritmo
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Simulador de Escala e Legibilidade
          </h3>
          <p className="text-xs text-slate-300 font-sans mt-0.5">
            Ajuste letter-spacing, line-height e comprimento de linha (45-75ch) em tempo real.
          </p>
        </div>

        <button
          onClick={copyCss}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-white transition-all self-start sm:self-auto"
        >
          {copied ? <Check className="w-4 h-4 text-cyber-green" /> : <Copy className="w-4 h-4 text-cyber-cyan" />}
          <span>{copied ? "Copiado!" : "Copiar Regras CSS"}</span>
        </button>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {/* Font Selection */}
        <div className="space-y-2">
          <label className="block text-xs font-mono text-slate-300">
            Fonte de Destaque / Título
          </label>
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => setFontFamily("bricolage")}
              className={`px-3 py-2 rounded-lg text-left text-xs font-mono border transition-all ${
                fontFamily === "bricolage"
                  ? "bg-white/15 text-cyber-cyan font-bold border-cyber-cyan/40"
                  : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
              }`}
            >
              Bricolage Grotesque (Display)
            </button>
            <button
              onClick={() => setFontFamily("inter")}
              className={`px-3 py-2 rounded-lg text-left text-xs font-mono border transition-all ${
                fontFamily === "inter"
                  ? "bg-white/15 text-cyber-cyan font-bold border-cyber-cyan/40"
                  : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
              }`}
            >
              Inter (Modern Sans)
            </button>
            <button
              onClick={() => setFontFamily("mono")}
              className={`px-3 py-2 rounded-lg text-left text-xs font-mono border transition-all ${
                fontFamily === "mono"
                  ? "bg-white/15 text-cyber-cyan font-bold border-cyber-cyan/40"
                  : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
              }`}
            >
              JetBrains Mono (Technical)
            </button>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-4 md:col-span-2">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-slate-300">Altura de Linha (Line-Height)</span>
              <span className="text-cyber-green font-bold">{lineHeight}</span>
            </div>
            <input
              type="range"
              min="1.2"
              max="2.0"
              step="0.05"
              value={lineHeight}
              onChange={(e) => setLineHeight(parseFloat(e.target.value))}
              className="w-full accent-cyber-green bg-white/10 rounded-lg cursor-pointer h-2"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-slate-300">Letter Spacing (Tracking)</span>
              <span className="text-cyber-cyan font-bold">{letterSpacing}em</span>
            </div>
            <input
              type="range"
              min="-0.06"
              max="0.1"
              step="0.005"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
              className="w-full accent-cyber-cyan bg-white/10 rounded-lg cursor-pointer h-2"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-slate-300">Largura Máxima de Linha ({maxWidthCh}ch)</span>
              <span className="text-cyber-orange font-bold">Ótimo: 45-75ch</span>
            </div>
            <input
              type="range"
              min="35"
              max="90"
              step="1"
              value={maxWidthCh}
              onChange={(e) => setMaxWidthCh(parseInt(e.target.value))}
              className="w-full accent-cyber-orange bg-white/10 rounded-lg cursor-pointer h-2"
            />
          </div>
        </div>
      </div>

      {/* Live Preview Card */}
      <div className="mt-6 pt-6 border-t border-white/10 bg-black/40 rounded-xl p-6 border border-white/10">
        <span className="text-[10px] font-mono uppercase text-slate-400 block mb-3">
          Prévia em Tempo Real:
        </span>
        <h4
          className="text-2xl sm:text-3xl font-bold text-white mb-3"
          style={{
            fontFamily: getFontFamilyCss(),
            letterSpacing: `${letterSpacing}em`
          }}
        >
          A Tipografia Molda a Percepção de Valor
        </h4>
        <p
          className="text-sm sm:text-base text-slate-300 font-sans"
          style={{
            lineHeight: lineHeight,
            maxWidth: `${maxWidthCh}ch`
          }}
        >
          Passamos a maior parte do tempo na web consumindo texto escrito. Quando a altura da linha é confortável e o comprimento da linha não ultrapassa o limite óptico de 75 caracteres, o cérebro humano escaneia e retém a mensagem com facilidade e sem fadiga visual.
        </p>
      </div>
    </div>
  );
}
