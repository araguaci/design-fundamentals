import { useState } from "react";
import { Copy, Check, Sparkles, Download, Code, Palette, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function DesignTokensExporter() {
  const [primaryColor, setPrimaryColor] = useState("#ff6b35");
  const [secondaryColor, setSecondaryColor] = useState("#00f5d4");
  const [backgroundColor, setBackgroundColor] = useState("#050508");
  const [borderRadius, setBorderRadius] = useState("12px");
  const [exportFormat, setExportFormat] = useState<"tailwind" | "css" | "json">("tailwind");
  const [copied, setCopied] = useState(false);

  const presets = [
    { name: "Cyber-Growth (Default)", primary: "#ff6b35", secondary: "#00f5d4", bg: "#050508" },
    { name: "Linear Obsidian", primary: "#5e6ad2", secondary: "#4ade80", bg: "#0a0a0c" },
    { name: "Stripe Indigo", primary: "#635bff", secondary: "#00d4b6", bg: "#0c0d14" },
    { name: "Vercel Neon", primary: "#ffffff", secondary: "#0070f3", bg: "#000000" },
  ];

  const generateTailwindConfig = () => {
    return `// tailwind.config.ts - Exportado de Design Fundamentals
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '${primaryColor}',
          secondary: '${secondaryColor}',
          background: '${backgroundColor}',
        }
      },
      borderRadius: {
        'brand': '${borderRadius}',
      }
    }
  }
};`;
  };

  const generateCssVariables = () => {
    return `/* Design Tokens CSS Variables */
:root {
  --color-primary: ${primaryColor};
  --color-secondary: ${secondaryColor};
  --color-background: ${backgroundColor};
  --radius-brand: ${borderRadius};
}

body {
  background-color: var(--color-background);
  color: #f8fafc;
}`;
  };

  const generateJsonTokens = () => {
    return JSON.stringify(
      {
        name: "Design Fundamentals Custom Tokens",
        version: "1.0.0",
        tokens: {
          color: {
            primary: { value: primaryColor, type: "color" },
            secondary: { value: secondaryColor, type: "color" },
            background: { value: backgroundColor, type: "color" },
          },
          border: {
            radius: { value: borderRadius, type: "borderRadius" },
          },
        },
      },
      null,
      2
    );
  };

  const getExportCode = () => {
    if (exportFormat === "tailwind") return generateTailwindConfig();
    if (exportFormat === "css") return generateCssVariables();
    return generateJsonTokens();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getExportCode());
    setCopied(true);
    toast.success(`Tokens em formato ${exportFormat.toUpperCase()} copiados!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-orange/15 border border-cyber-orange/30 text-cyber-orange text-xs font-mono mb-2">
            <Palette className="w-3.5 h-3.5" />
            <span>Gerador & Exportador de Design Tokens</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Exportador de Tokens de Design System
          </h3>
          <p className="text-sm text-slate-300 font-sans mt-1">
            Configure suas cores fundamentais e exporte instantaneamente para Tailwind, CSS Variables ou JSON.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-orange to-[#ff8c5a] text-black font-display font-bold text-sm shadow-cyber-orange hover:scale-[1.02] active:scale-[0.98] transition-all self-start"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>Copiar Configuração</span>
        </button>
      </div>

      {/* 1. Presets */}
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
          Presets Rápidos de Estética
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                setPrimaryColor(preset.primary);
                setSecondaryColor(preset.secondary);
                setBackgroundColor(preset.bg);
              }}
              className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-white/25 text-left transition-all"
            >
              <span className="text-xs font-bold text-white block mb-2">{preset.name}</span>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: preset.primary }} />
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: preset.secondary }} />
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: preset.bg }} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Color Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">Cor Primária (Accent)</label>
          <div className="flex items-center gap-2 bg-black/60 p-2 rounded-xl border border-white/15">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-8 h-8 rounded border-none bg-transparent cursor-pointer"
            />
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-full bg-transparent text-xs font-mono text-white outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">Cor Secundária (Highlight)</label>
          <div className="flex items-center gap-2 bg-black/60 p-2 rounded-xl border border-white/15">
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              className="w-8 h-8 rounded border-none bg-transparent cursor-pointer"
            />
            <input
              type="text"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              className="w-full bg-transparent text-xs font-mono text-white outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">Plano de Fundo (Canvas)</label>
          <div className="flex items-center gap-2 bg-black/60 p-2 rounded-xl border border-white/15">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-8 h-8 rounded border-none bg-transparent cursor-pointer"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-full bg-transparent text-xs font-mono text-white outline-none"
            />
          </div>
        </div>
      </div>

      {/* 3. Export Formats & Code Preview */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExportFormat("tailwind")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                exportFormat === "tailwind" ? "bg-cyber-cyan text-black" : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              Tailwind Config
            </button>
            <button
              onClick={() => setExportFormat("css")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                exportFormat === "css" ? "bg-cyber-cyan text-black" : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              CSS Variables
            </button>
            <button
              onClick={() => setExportFormat("json")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                exportFormat === "json" ? "bg-cyber-cyan text-black" : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              JSON Tokens
            </button>
          </div>
        </div>

        <pre className="p-4 rounded-xl bg-black/90 border border-white/10 text-xs font-mono text-slate-200 overflow-x-auto">
          <code>{getExportCode()}</code>
        </pre>
      </div>
    </div>
  );
}
