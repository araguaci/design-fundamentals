# Design Fundamentals - UI Design Education Platform

## 🛡️ Sentinel Status
- **Status:** 🟢 Produção
- **Tier:** S
- **Health:** 100% / **ROI Potencial:** Educacional / Portfólio de Alta Conversão
- **Stack:** React 18, TypeScript, Vite, TailwindCSS 3, Radix UI, PWA 2026, Sharp

---

Um aplicativo moderno e responsivo que ensina os 5 fundamentos essenciais de UI Design que todo desenvolvedor deve conhecer. Baseado no artigo de Jeferson Brito sobre design para desenvolvedores e estendido com a arquitetura **Cyber-Growth Masterpiece** por **@artesdosul**.

## 🎯 Visão Geral

Este projeto é uma plataforma educacional interativa que apresenta conceitos fundamentais e avançados de UI/UX:

- **Color (Cor)** - Teoria cromática, harmonias (monocromático, análogo, complementar, triádico) e regra 60-30-10
- **Typography (Tipografia)** - Métricas de tipos (*cap-height*, *x-height*, *baseline*), escalas modulares e tipografia fluida com `clamp()`
- **Visual Hierarchy (Hierarquia Visual)** - Padrões de escaneamento F/Z, peso visual e profundidade em camadas
- **Contrast (Contraste)** - Relações de luminescência WCAG 2.1 (AA 4.5:1 e AAA 7:1) com calculadora interativa em tempo real
- **Alignment (Alinhamento)** - Grid de 8 pontos, ritmo vertical e layout suíço colunar
- **Responsive Architecture** - Container Queries (`@container`) e componentes que se adaptam ao espaço do pai
- **Motion & Micro-interactions** - Curvas de aceleração `cubic-bezier` (Cyber Spring, Snappy Pop) e feedback tátil
- **Design Tokens Exporter** - Gerador e exportador de tokens para Tailwind, CSS Variables e JSON

## 📦 Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite
- **Styling**: TailwindCSS 3 + CSS personalizado (Cyber-Growth Design System)
- **UI Components**: Radix UI + Lucide React + Ícones Vetoriais Proprietários (`FundamentalIcons.tsx`)
- **PWA**: Manifest PWA 2026, Service Worker com cache offline e suíte de ícones multi-resolução
- **Internationalization**: Sistema i18n customizado (pt_BR/en)
- **Theme**: Dark/Light mode com ThemeManager
- **Testing**: Vitest
- **Backend**: Express (quando necessário)
- **Package Manager**: PNPM
- **Deployment**: Vercel

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- PNPM 10.14.0+

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd design-fundamentals

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev

# Acesse em http://localhost:5173
```

### Comandos Disponíveis

```bash
pnpm dev          # Inicia o servidor de desenvolvimento (frontend + backend)
pnpm build        # Compila para produção
pnpm build:client # Compila apenas o frontend
pnpm build:server # Compila apenas o backend
pnpm start        # Inicia o servidor de produção
pnpm test         # Executa os testes com Vitest
pnpm typecheck    # Verifica tipos TypeScript
pnpm format.fix   # Formata o código com Prettier
node scripts/generate-icons.js # Gera todos os ícones PWA e favicons em alta definição
```

## 📁 Estrutura do Projeto

```text
design-fundamentals/
├── client/                    # Frontend React SPA
│   ├── pages/                # Componentes de página (rotas)
│   │   ├── Index.tsx        # Homepage - artigo completo + simuladores
│   │   ├── Examples.tsx     # Exemplos práticos, Container Queries & Motion
│   │   ├── Resources.tsx    # Recursos, downloads e exportador de tokens
│   │   ├── BestPractices.tsx # Boas práticas de UI/UX
│   │   └── NotFound.tsx     # Página 404
│   ├── components/
│   │   ├── icons/
│   │   │   └── FundamentalIcons.tsx # Ícones SVG proprietários dos 5 pilares e DF Logo
│   │   ├── ui/              # Componentes Radix UI + customizados
│   │   ├── ColorPlayground.tsx      # Simulador de cores e regra 60-30-10
│   │   ├── ContrastPlayground.tsx   # Calculadora de contraste WCAG
│   │   ├── TypographyPlayground.tsx # Testador tipográfico
│   │   ├── ResponsiveLab.tsx        # Lab de Container Queries e clamp()
│   │   ├── MotionPlayground.tsx     # Lab de curvas cubic-bezier e física
│   │   ├── DesignTokensExporter.tsx # Exportador de tokens de design
│   │   ├── GrowthTracker.tsx        # Rastreador de maestria gamificado
│   │   ├── HeroSection.tsx          # Hero cinematográfico Cyber-Growth
│   │   ├── MasterpieceFooter.tsx    # Rodapé institucional branded
│   │   ├── Navigation.tsx           # Barra de navegação com DFLogoIcon
│   │   ├── ThemeToggle.tsx          # Toggle de tema (dark/light)
│   │   └── LocaleSelector.tsx       # Seletor de idioma
│   ├── contexts/
│   │   └── LocaleContext.tsx # Context para gerenciar idioma
│   ├── hooks/
│   │   └── useTranslation.ts # Hook para traduções
│   ├── lib/
│   │   ├── i18n.ts          # Sistema de traduções
│   │   └── theme-manager.ts  # Gerenciador de tema
│   ├── App.tsx              # Configuração de rotas
│   ├── global.css           # Estilos globais e tema Cyber-Growth
│   └── vite-env.d.ts
├── public/                  # Ativos estáticos e PWA
│   ├── favicon.svg          # Favicon vetorial ultra-nítido
│   ├── favicon.ico          # Ícone multi-resolução (16/32/48/64px)
│   ├── apple-touch-icon.png # Ícone iOS 180x180
│   ├── icon-192.png / icon-512.png # Ícones PWA padrão
│   ├── icon-maskable-192.png / icon-maskable-512.png # Ícones maskable Android
│   ├── manifest.json        # Manifesto PWA completo com shortcuts
│   └── sw.js                # Service Worker offline
├── scripts/
│   └── generate-icons.js    # Gerador de ativos de imagem com Sharp
├── server/                  # Backend Express
│   ├── index.ts             # Configuração do servidor
│   ├── routes/              # Handlers de API
│   └── node-build.ts        # Build para produção
├── shared/                  # Tipos compartilhados
│   └── api.ts
├── tailwind.config.ts       # Configuração do Tailwind
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
├── vite.config.server.ts    # Configuração Vite para servidor
├── package.json
├── CHANGELOG.md             # Histórico de versões
├── ROADMAP.md               # Plano de ação com timeline
└── README.md               # Este arquivo
```

## 🎨 Palette de Cores

O projeto utiliza uma paleta de cores moderna e acessível:

- **Primary**: `hsl(260, 80%, 56%)` - Roxo profundo
- **Secondary**: `hsl(200, 70%, 50%)` - Azul brilhante
- **Accent**: `hsl(40, 84%, 55%)` - Amarelo quente
- **Background**: Branco em light mode, cinza escuro em dark mode
- **Text**: Cinza escuro/claro com bom contraste WCAG

## 🌐 Rotas Disponíveis

| Rota              | Página                     | Status      |
| ----------------- | -------------------------- | ----------- |
| `/`                | Homepage (Artigo completo) | ✅ Completa |
| `/examples`        | Exemplos Práticos          | ✅ Completa |
| `/resources`       | Recursos & Downloads       | ✅ Completa |
| `/best-practices`  | Boas Práticas de UI/UX     | ✅ Completa |
| `*`                | Página não encontrada      | ✅ Completa |

## 📚 Recursos Úteis

### Ferramentas Mencionadas no Projeto

- **[Coolors.co](https://coolors.co/)** - Gerador de paletas de cores
- **[Contrast Checker](https://webaim.org/resources/contrastchecker/)** - Verificador de contraste WCAG
- **[FontPair](https://www.fontpair.co/)** - Descoberta de combinações de fontes
- **[Figma](https://www.figma.com/)** - Ferramenta de design UI/UX
- **[Penpot](https://penpot.app/)** - Alternativa open-source ao Figma

### Documentação Técnica

- **[React Router 6](https://reactrouter.com/)** - Roteamento SPA
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[TailwindCSS 3](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool moderno
- **[Vitest](https://vitest.dev/)** - Framework de testes

### Padrões & Guidelines

- **[Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)** - Acessibilidade na web
- **[Material Design](https://material.io/design)** - Guidelines de design
- **[Atomic Design](https://atomicdesign.bradfrost.com/)** - Metodologia de componentes

## ✨ Funcionalidades Implementadas

### 🌍 Sistema Multi-idioma

- ✅ Suporte completo para **Português (pt_BR)** e **Inglês (en)**
- ✅ Idioma padrão: pt_BR
- ✅ Persistência de preferência no localStorage
- ✅ Auto-detect do idioma do navegador
- ✅ Seletor de idioma na navegação

### 🌓 Theme Toggle (Dark/Light Mode)

- ✅ Alternância entre temas claro e escuro
- ✅ Persistência de preferência
- ✅ Auto-detect da preferência do sistema
- ✅ Suporte completo em todas as páginas

### 📚 Páginas Disponíveis

- ✅ **Homepage** (`/`) - Artigo completo sobre os 5 fundamentos (100% traduzido)
- ✅ **Exemplos** (`/examples`) - Demonstrações práticas interativas
- ✅ **Recursos** (`/resources`) - Ferramentas, documentação e downloads
- ✅ **Boas Práticas** (`/best-practices`) - Guia avançado de UI/UX baseado no Design System Master

## 📋 Plano de Ação & Próximos Passos

Veja o arquivo [ROADMAP.md](./ROADMAP.md) para detalhes completos do plano de ação, timeline, prioridades e próximos passos.

### Resumo Executivo

| Prioridade | Tarefa                       | Timeline   | Status      |
| ---------- | ---------------------------- | ---------- | ----------- |
| 🔴 CRÍTICO | Página de Exemplos Práticos  | 2-3 horas  | ✅ Completo |
| 🟠 ALTO    | Página de Recursos/Downloads | 1-2 horas  | ✅ Completo |
| 🟠 ALTO    | Navegação atualizada         | 30 minutos | ✅ Completo |
| 🟠 ALTO    | Deploy para Vercel           | 1 hora     | ✅ Completo |
| 🟠 ALTO    | Sistema Multi-idioma (pt_BR/en) | 2-3 horas | ✅ Completo |
| 🟠 ALTO    | Página de Boas Práticas      | 2-3 horas  | ✅ Completo |
| 🟠 ALTO    | Theme Toggle (Dark/Light)    | 1 hora     | ✅ Completo |
| 🟡 MÉDIO   | Testes automatizados         | 4-5 horas  | ⏳ Pendente |
| 🟡 MÉDIO   | Análise de performance       | 2-3 horas  | ⏳ Pendente |

## 🚀 Deployment

### Deploy para Vercel

Este projeto está configurado para deploy automático no Vercel com CI/CD integrado.

#### Configuração (vercel.json)

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/spa",
  "framework": "vite",
  "installCommand": "pnpm install --frozen-lockfile",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Passo a Passo para Deploy

1. **Conectar repositório** (primeira vez):
   - Acesse [Vercel](https://vercel.com) e faça login com sua conta
   - Clique em "New Project"
   - Selecione seu repositório (GitHub/GitLab/Bitbucket)
   - Vercel detectará automaticamente Vite como framework

2. **Build & Deploy automático**:
   - Configurações já estão no `vercel.json`
   - Cada `git push` para `main` faz deploy automático
   - Branch preview para pull requests

3. **Variáveis de ambiente** (se necessário):
   - Configure em `Settings > Environment Variables`
   - Exemplo: `NODE_ENV=production`

4. **Acessar a aplicação**:
   - URL padrão: `https://<seu-projeto>.vercel.app`
   - Domínio customizado: Configure em `Settings > Domains`

#### Features de Segurança Habilitadas

- ✅ Cache Control headers (3600s)
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Cache immutable para `/assets/*` (31536000s)

#### Monitoramento & Analytics

- Dashboard automático no Vercel
- Logs de build e deployment
- Performance metrics
- Error tracking

**Status**: ✅ Configurado e Pronto para Deploy

## 🧪 Testes

```bash
# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test -- --watch

# Cobertura de testes
pnpm test -- --coverage
```

## 🔍 Type Checking

```bash
# Verificar tipos TypeScript
pnpm typecheck
```

## 📝 Estilo de Código

O projeto usa:

- **Prettier** para formatação consistente
- **ESLint** para linting (via TypeScript)
- **TailwindCSS** para estilos

```bash
# Formatar código automaticamente
pnpm format.fix
```

## 🤝 Como Contribuir

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Guidelines para Contribuição

- Siga o estilo de código existente
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário
- Use tipos TypeScript explícitos
- Mantenha commits pequenos e descritivos

## 📖 Arquitetura

### Frontend (SPA com React Router 6)

O frontend é uma Single Page Application (SPA) usando React Router v6:

```typescript
<LocaleProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/examples" element={<Examples />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/best-practices" element={<BestPractices />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
</LocaleProvider>
```

### Styling com Tailwind + CSS Variables

As cores são definidas como CSS variables em `client/global.css` e usadas via `hsl(var(--nome))`:

```css
:root {
  --primary: 260 80% 56%;
  --secondary: 200 70% 50%;
  --accent: 40 84% 55%;
}
```

### Componentes Reusáveis

Componentes UI baseados em Radix UI com customizações Tailwind em `client/components/ui/`.

## 🐛 Troubleshooting

### A aplicação não inicia

```bash
# Limpe node_modules e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Cores parecem estranhas (amarelo/muito brilhante)

Verifique se o `tailwind.config.ts` está usando `hsl(var(--nome))` e que `client/global.css` define as variáveis em formato HSL.

### Type errors

```bash
# Verifique os tipos
pnpm typecheck

# Regenere tipos do servidor
pnpm build:server
```

## 📄 Licença

Este projeto é open source. Veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

Desenvolvido baseado no artigo original de **Jeferson Brito** - "The 5 UI Fundamentals a Developer Must Know"

## 📞 Suporte

Para dúvidas ou sugestões:

- Abra uma [Issue](https://github.com/seu-usuario/design-fundamentals/issues)
- Crie uma [Discussion](https://github.com/seu-usuario/design-fundamentals/discussions)
- Entre em contato via email: seu-email@exemplo.com

---

**Last Updated**: 18 de Agosto de 2026  
**Version**: 2.1.0 (Masterpiece Edition)  
**Status**: ✅ Fases 1, 2, 3, 3.5 e 5 Concluídas | 🚧 Fase 4 (Testes Unitários Vitest) em Expansão  

