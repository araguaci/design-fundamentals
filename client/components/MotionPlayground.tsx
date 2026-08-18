import { useState } from "react";
import { Play, RotateCcw, Copy, Check, Sparkles, Activity, Layers, Zap } from "lucide-react";
import { toast } from "sonner";

export default function MotionPlayground() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedEasing, setSelectedEasing] = useState<string>("cubic-bezier(0.16, 1, 0.3, 1)");
  const [duration, setDuration] = useState<number>(400);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const easings = [
    { name: "Cyber Spring (Exponencial)", value: "cubic-bezier(0.16, 1, 0.3, 1)", desc: "Entrada ultra-rápida com pouso suave (padrão Linear & Stripe)" },
    { name: "Smooth Ease-Out", value: "cubic-bezier(0, 0, 0.2, 1)", desc: "Ideal para modais, dropdowns e aberturas" },
    { name: "Snappy Pop", value: "cubic-bezier(0.34, 1.56, 0.64, 1)", desc: "Micro-interações de botões com rebote sutil" },
    { name: "Ease-In-Out Padrão", value: "cubic-bezier(0.4, 0, 0.2, 1)", desc: "Para transições contínuas e loops" },
  ];

  const triggerAnimation = () => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 50);
  };

  const copyRule = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    toast.success(`${label} copiado!`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/15 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Laboratório de Motion & Micro-Interações</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Curvas de Easing & Física de Interação
          </h3>
          <p className="text-sm text-slate-300 font-sans mt-1">
            Transições refinadas distinguem produtos amadores de interfaces de alto calibre.
          </p>
        </div>

        <button
          onClick={triggerAnimation}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-display font-bold text-sm shadow-lg shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all self-start"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Executar Animação</span>
        </button>
      </div>

      {/* 1. Interactive Motion Stage */}
      <div className="p-6 rounded-xl bg-black/80 border border-white/15 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Palco de Movimento em Tempo Real</span>
          <span className="text-xs font-mono text-cyber-cyan font-bold">{duration}ms</span>
        </div>

        {/* Moving Track */}
        <div className="relative h-20 bg-black/60 rounded-xl border border-white/10 p-2 flex items-center overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div
            style={{
              transform: isPlaying ? "translateX(calc(100% - 100px))" : "translateX(0px)",
              transition: `transform ${duration}ms ${selectedEasing}`,
            }}
            className="w-24 h-14 rounded-lg bg-gradient-to-r from-cyber-orange to-purple-500 flex items-center justify-center text-black font-bold text-xs shadow-lg shadow-cyber-orange/30 z-10 select-none cursor-pointer"
            onClick={triggerAnimation}
          >
            DF Easing
          </div>
        </div>

        {/* Duration Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-slate-400">
            <span>Duração da Transição</span>
            <span>{duration}ms</span>
          </div>
          <input
            type="range"
            min={150}
            max={1200}
            step={25}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-purple-500 border border-white/10"
          />
        </div>
      </div>

      {/* 2. Easing Presets Picker */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase text-slate-300 font-bold block">
          Selecione a Curva de Aceleração (Cubic-Bezier)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {easings.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setSelectedEasing(item.value);
                triggerAnimation();
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedEasing === item.value
                  ? "bg-purple-500/15 border-purple-500/50 shadow-lg shadow-purple-500/10"
                  : "bg-black/40 border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-white text-sm">{item.name}</span>
                {selectedEasing === item.value && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/30 text-purple-300">
                    Ativo
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-sans mb-2">{item.desc}</p>
              <code className="text-[11px] font-mono text-cyber-cyan block bg-black/60 px-2 py-1 rounded">
                {item.value}
              </code>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Micro-Interaction Tactile Demos */}
      <div className="border-t border-white/10 pt-6 space-y-4">
        <h4 className="text-base font-display font-bold text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyber-orange" />
          Micro-Interações Táteis Recomendadas
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Button 1: Tactile Spring */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col items-center justify-center gap-3">
            <span className="text-[11px] font-mono text-slate-400">1. Feedback Tátil (Scale 96%)</span>
            <button className="px-5 py-2.5 rounded-xl bg-cyber-orange text-black font-bold text-xs transition-transform duration-150 active:scale-95 shadow-cyber-orange hover:shadow-lg">
              Pressione Aqui
            </button>
          </div>

          {/* Button 2: Subtle Border Glow */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col items-center justify-center gap-3">
            <span className="text-[11px] font-mono text-slate-400">2. Hover Magnético & Glow</span>
            <button className="px-5 py-2.5 rounded-xl bg-black border border-white/20 text-white font-bold text-xs transition-all duration-200 hover:border-cyber-cyan hover:shadow-[0_0_16px_rgba(0,245,212,0.4)] hover:-translate-y-0.5">
              Passe o Cursor
            </button>
          </div>

          {/* Button 3: Pill Status Indicator */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col items-center justify-center gap-3">
            <span className="text-[11px] font-mono text-slate-400">3. Pulse de Liveness</span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-green/15 border border-cyber-green/30 text-cyber-green text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
              <span>Conexão Ativa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
