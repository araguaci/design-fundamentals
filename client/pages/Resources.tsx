import Navigation from "@/components/Navigation";
import {
  ExternalLink,
  Download,
  BookOpen,
  Palette,
  Type,
  Eye,
  Zap,
  Github,
} from "lucide-react";

export default function Resources() {
  const resources = {
    tools: [
      {
        title: "Coolors.co",
        description: "Gerador de paletas de cores e explorador de harmonia de cores",
        url: "https://coolors.co",
        icon: Palette,
        category: "Cores",
      },
      {
        title: "Contrast Checker",
        description: "Verificador de contraste WCAG para acessibilidade",
        url: "https://webaim.org/resources/contrastchecker/",
        icon: Eye,
        category: "Acessibilidade",
      },
      {
        title: "FontPair",
        description: "Descubra combinações perfeitas de fontes para seu projeto",
        url: "https://www.fontpair.co",
        icon: Type,
        category: "Tipografia",
      },
      {
        title: "Figma",
        description: "Ferramenta colaborativa de design de UI/UX",
        url: "https://www.figma.com",
        icon: Palette,
        category: "Design",
      },
      {
        title: "Penpot",
        description: "Alternativa open-source ao Figma para design web",
        url: "https://penpot.app",
        icon: Palette,
        category: "Design",
      },
      {
        title: "Google Fonts",
        description: "Biblioteca de fontes web gratuitas e de código aberto",
        url: "https://fonts.google.com",
        icon: Type,
        category: "Tipografia",
      },
    ],
    documentation: [
      {
        title: "Web Content Accessibility Guidelines (WCAG)",
        description: "Padrões internacionais para acessibilidade na web",
        url: "https://www.w3.org/WAI/WCAG21/quickref/",
        icon: BookOpen,
      },
      {
        title: "Material Design",
        description: "Sistema de design completo do Google",
        url: "https://material.io/design",
        icon: BookOpen,
      },
      {
        title: "Atomic Design",
        description: "Metodologia para criar sistemas de componentes",
        url: "https://atomicdesign.bradfrost.com/",
        icon: BookOpen,
      },
      {
        title: "Interaction Design Foundation",
        description: "Educação em design de interação e UX",
        url: "https://www.interaction-design.org",
        icon: BookOpen,
      },
    ],
    libraries: [
      {
        title: "React",
        description: "Biblioteca JavaScript para construir interfaces",
        url: "https://react.dev",
        icon: Github,
      },
      {
        title: "TailwindCSS",
        description: "Framework CSS utility-first para styling rápido",
        url: "https://tailwindcss.com",
        icon: Github,
      },
      {
        title: "Radix UI",
        description: "Componentes unstyled e acessíveis para React",
        url: "https://www.radix-ui.com",
        icon: Github,
      },
      {
        title: "TypeScript",
        description: "JavaScript com type safety para melhor código",
        url: "https://www.typescriptlang.org",
        icon: Github,
      },
      {
        title: "Vite",
        description: "Build tool moderno e rápido para web",
        url: "https://vitejs.dev",
        icon: Github,
      },
      {
        title: "Vitest",
        description: "Framework de testes unitários para JavaScript",
        url: "https://vitest.dev",
        icon: Github,
      },
    ],
  };

  const checklists = [
    {
      title: "Checklist de Cores",
      description: "Guia rápido para aplicar a teoria de cores em seus designs",
      items: [
        "Escolher paleta (60% primária, 30% secundária, 10% destaque)",
        "Verificar contraste (mínimo 4.5:1)",
        "Testar modo colorblind",
        "Ser consistente na aplicação",
      ],
    },
    {
      title: "Checklist de Tipografia",
      description: "Passos para melhorar a legibilidade de seus textos",
      items: [
        "Escolher 2-3 fontes máximo",
        "Usar line-height 1.5-1.8",
        "Limitar a 45-75 caracteres por linha",
        "Left-align para corpo de texto",
        "Usar hierarchy de font-weights",
      ],
    },
    {
      title: "Checklist de Visual Hierarchy",
      description: "Garantir que a importância está clara aos usuários",
      items: [
        "Elemento principal é maior e em negrito",
        "Usar cor para destacar",
        "Espaçamento adequado entre grupos",
        "Testar a leitura rápida (scan)",
      ],
    },
    {
      title: "Checklist de Contrast",
      description: "Validar acessibilidade e legibilidade",
      items: [
        "Teste com Contrast Checker",
        "Evitar amarelo/cinza claro em textos",
        "Mínimo 4.5:1 para texto normal",
        "Mínimo 3:1 para texto grande",
        "Testar com simulador de daltonismo",
      ],
    },
    {
      title: "Checklist de Alignment",
      description: "Garantir ordem visual em seu layout",
      items: [
        "Usar grid consistente",
        "Left-align texto em inglês/português",
        "Center-align apenas títulos curtos",
        "Right-align números em tabelas",
        "Verificar alinhamento visual geral",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <Navigation />

      {/* Page Header */}
      <header className="bg-gradient-to-br from-secondary/10 to-accent/10 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recursos & Downloads
          </h1>
          <p className="text-lg text-muted-foreground">
            Ferramentas, documentação e checklists para aplicar os 5 fundamentos
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Ferramentas Recomendadas */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            🛠️ Ferramentas Recomendadas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {resources.tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <a
                  key={tool.title}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/10 text-primary">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Acessar <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Documentação */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            📚 Documentação & Guidelines
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {resources.documentation.map((doc) => {
              const Icon = doc.icon;
              return (
                <a
                  key={doc.title}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border rounded-lg p-6 hover:border-secondary hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {doc.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary text-sm font-medium">
                    Saiba mais <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Bibliotecas Técnicas */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            💻 Bibliotecas & Frameworks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {resources.libraries.map((lib) => {
              const Icon = lib.icon;
              return (
                <a
                  key={lib.title}
                  href={lib.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {lib.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {lib.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    Documentação <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Checklists */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            ✅ Checklists Práticos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Guias rápidos para aplicar cada fundamental em seus projetos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {checklists.map((checklist) => (
              <div
                key={checklist.title}
                className="border border-border rounded-lg p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {checklist.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {checklist.description}
                </p>
                <ul className="space-y-3">
                  {checklist.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              📥 Downloads
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Baixe checklists, guias de referência e templates para usar offline
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() =>
                  alert(
                    "Em breve! Checklist PDF com todos os 5 fundamentos para impressão"
                  )
                }
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                <Download className="w-5 h-5" />
                Checklist Completo (PDF)
              </button>
              <button
                onClick={() =>
                  alert("Em breve! Guia de referência rápida em formato Markdown")
                }
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                <Download className="w-5 h-5" />
                Guia de Referência (MD)
              </button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            🔗 Links Úteis
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Repositório do Projeto
              </h3>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-2 font-medium"
              >
                <Github className="w-4 h-4" /> Ver no GitHub
              </a>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Relatar Problema
              </h3>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-2 font-medium"
              >
                <Zap className="w-4 h-4" /> Abrir Issue
              </a>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Artigo Original
              </h3>
              <p className="text-sm text-muted-foreground">
                "The 5 UI Fundamentals a Developer Must Know" por Jeferson Brito
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Comunidade
              </h3>
              <p className="text-sm text-muted-foreground">
                Participe das discussões e compartilhe seus designs
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Design Fundamentals. Recursos para designers e desenvolvedores.
          </p>
        </div>
      </footer>
    </div>
  );
}
