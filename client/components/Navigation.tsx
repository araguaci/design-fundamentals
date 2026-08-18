import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Trophy, CheckCircle2 } from "lucide-react";
import { DFLogoIcon } from "./icons/FundamentalIcons";
import ThemeToggle from "./ThemeToggle";
import LocaleSelector from "./LocaleSelector";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const { t } = useTranslation();

  const updateProgress = () => {
    try {
      const saved = localStorage.getItem("df_mastery_progress");
      if (saved) {
        const items: string[] = JSON.parse(saved);
        // Total of 15 checkable master items across the app
        const total = 15;
        const pct = Math.min(100, Math.round((items.length / total) * 100));
        setProgress(pct);
      }
    } catch {
      // fallback
    }
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener("storage", updateProgress);
    window.addEventListener("df_progress_updated", updateProgress);
    return () => {
      window.removeEventListener("storage", updateProgress);
      window.removeEventListener("df_progress_updated", updateProgress);
    };
  }, []);

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/examples", label: t("nav.examples") },
    { to: "/resources", label: t("nav.resources") },
    { to: "/best-practices", label: t("nav.bestPractices") },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-white/10 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform active:scale-95"
          >
            <div className="relative shadow-cyber-orange transition-transform duration-300 group-hover:scale-105">
              <DFLogoIcon className="w-10 h-10 drop-shadow-[0_0_12px_rgba(255,107,53,0.35)]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyber-orange transition-colors">
                  Design Fundamentals
                </span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyber-orange/15 text-cyber-orange border border-cyber-orange/30 font-semibold">
                  PRO
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-mono hidden sm:inline">
                Cyber-Growth Masterpiece
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-cyber-cyan font-semibold border border-cyber-cyan/30 shadow-cyber-cyan/20 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Growth Mastery Badge */}
            <div className="ml-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono">
              <Trophy className="w-3.5 h-3.5 text-cyber-orange animate-pulse" />
              <span className="text-muted-foreground">Maestria:</span>
              <span className="text-cyber-cyan font-bold">{progress}%</span>
              <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyber-orange to-cyber-cyan transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 ml-2 border-l border-white/10 pl-2">
              <LocaleSelector />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mini Progress */}
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-black/50 border border-white/10 text-xs font-mono">
              <span className="text-cyber-cyan font-bold">{progress}%</span>
            </div>
            <LocaleSelector />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-lg text-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-white/10 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-cyber-cyan/15 text-cyber-cyan border-l-2 border-cyber-cyan"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
