import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import MasterpieceFooter from "@/components/MasterpieceFooter";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 flex flex-col justify-between selection:bg-[#ff6b35] selection:text-black">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-cyber-orange/10 border border-cyber-orange/30 mx-auto flex items-center justify-center text-cyber-orange shadow-cyber-orange">
          <AlertTriangle className="w-8 h-8" />
        </div>
        
        <h1 className="text-6xl font-display font-extrabold text-white tracking-tight">
          404
        </h1>
        
        <h2 className="text-xl font-display font-bold text-slate-200">
          Coordenada Não Encontrada
        </h2>
        
        <p className="text-sm font-sans text-slate-400 max-w-md mx-auto">
          A rota <code className="text-cyber-cyan font-mono bg-white/5 px-2 py-1 rounded">{location.pathname}</code> não existe no mapa da aplicação.
        </p>
        
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-orange to-[#ff8c5a] text-black font-display font-bold text-sm tracking-wide shadow-cyber-orange hover:opacity-90 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar à Base</span>
          </Link>
        </div>
      </div>

      <MasterpieceFooter />
    </div>
  );
};

export default NotFound;
