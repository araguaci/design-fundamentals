import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Design Fundamentals
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/examples"
              className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
            >
              Exemplos
            </Link>
            <Link
              to="/resources"
              className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
            >
              Recursos
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="sm:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden pb-4 border-t border-border">
            <Link
              to="/"
              className="block px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/examples"
              className="block px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Exemplos
            </Link>
            <Link
              to="/resources"
              className="block px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Recursos
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
