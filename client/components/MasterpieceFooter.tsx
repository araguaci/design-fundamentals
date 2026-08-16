import { Sparkles, ArrowUp, Github, Heart, Shield, Terminal } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function MasterpieceFooter() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] text-slate-400 mt-20 overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#00d9ff]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b35] to-[#00d9ff] p-0.5">
                <div className="w-full h-full bg-[#050505] rounded-[6px] flex items-center justify-center font-display font-bold text-white text-xs">
                  DF
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Design Fundamentals
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyber-orange/15 text-cyber-orange border border-cyber-orange/30">
                Masterpiece
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-sans">
              Transformando teoria em arquitetura de sucesso. Os 5 princípios vitais de UI/UX codificados para desenvolvedores que constroem o futuro da web.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyber-cyan" /> React 18 + Vite
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-cyber-green" /> PWA Ready
              </span>
              <span>•</span>
              <span className="text-cyber-orange font-bold">Standalone</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">
              Fundamentos
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a href="#fund-color" className="hover:text-cyber-orange transition-colors">
                  1. Teoria & Paleta de Cores
                </a>
              </li>
              <li>
                <a href="#fund-typography" className="hover:text-cyber-cyan transition-colors">
                  2. Tipografia & Escala
                </a>
              </li>
              <li>
                <a href="#fund-hierarchy" className="hover:text-cyber-green transition-colors">
                  3. Hierarquia Visual
                </a>
              </li>
              <li>
                <a href="#fund-contrast" className="hover:text-cyber-orange transition-colors">
                  4. Contraste & Acessibilidade
                </a>
              </li>
              <li>
                <a href="#fund-alignment" className="hover:text-cyber-cyan transition-colors">
                  5. Alinhamento & Grid
                </a>
              </li>
            </ul>
          </div>

          {/* Masterpiece Signature & Action */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-3">
                Assinatura Oficial
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                "Conteúdo sem execução é apenas ruído. Transforme informação em arquitetura de sucesso."
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all group"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-4 h-4 text-cyber-cyan group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Signature */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span>Uma criação</span>
            <a
              href="https://artesdosul.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-cyber-orange transition-colors px-2 py-1 rounded bg-white/5 border border-white/10 hover:border-cyber-orange/40 hover:shadow-cyber-orange/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyber-orange animate-pulse" />
              <span>@artesdosul</span>
            </a>
          </div>

          <div className="text-slate-500 text-center sm:text-right">
            <span>Desenvolvido por </span>
            <a
              href="https://artesdosul.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyber-cyan transition-colors underline decoration-dotted underline-offset-4"
            >
              artesdosul.com
            </a>
            <span className="ml-2">© {new Date().getFullYear()} • Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
