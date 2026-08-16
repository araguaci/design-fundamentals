import { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface HeroSectionProps {
  onExploreClick?: () => void;
  onTrackerClick?: () => void;
}

export default function HeroSection({ onExploreClick, onTrackerClick }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="relative w-full overflow-hidden bg-[#050505] border-b border-white/10">
      {/* Background Cinematic Visual with Dynamic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cyber_growth_hero.jpg"
          alt="Cyber-Growth Masterpiece Interface"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Dynamic Multi-Stage Gradients for seamless fusion */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/90" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-3xl space-y-6">
          {/* Floating Validation / Authority Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-glow border border-cyber-cyan/40 bg-black/60 shadow-cyber-cyan text-xs font-mono">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-orange"></span>
            </span>
            <span className="text-white font-semibold tracking-wide">
              ⚡ Masterpiece Edition • 5 Fundamentos UI/UX
            </span>
            <span className="hidden sm:inline text-cyber-cyan">
              | Validado para Devs
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
            Transforme código comum em{" "}
            <span className="text-gradient-cyber">
              Arquitetura de Sucesso
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed">
            {t("home.subtitle")} — cores calculadas, tipografia cirúrgica, contraste acessível e hierarquia visual que guia o usuário sem esforço.
          </p>

          {/* Interactive Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#growth-tracker"
              onClick={onTrackerClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-orange to-[#ff8c5a] text-black font-display font-bold text-sm tracking-wide shadow-cyber-orange hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>Abrir Growth Tracker</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#interactive-tools"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white font-display font-semibold text-sm border border-white/15 hover:border-cyber-cyan/50 hover:bg-white/10 hover:text-cyber-cyan transition-all"
            >
              <Cpu className="w-4 h-4 text-cyber-cyan" />
              <span>Ferramentas Interativas</span>
            </a>
          </div>

          {/* Micro Stat Badges */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-cyber-green flex-shrink-0" />
              <span>WCAG AAA Ready</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Layers className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
              <span>Regra 60-30-10</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 col-span-2 sm:col-span-1">
              <Sparkles className="w-4 h-4 text-cyber-orange flex-shrink-0" />
              <span>PWA Offline Local</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
