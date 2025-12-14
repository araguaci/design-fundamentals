# 🚀 Guia de Deployment - Design Fundamentals

Instruções passo-a-passo para fazer deploy da aplicação no Vercel.

## ✅ Pré-requisitos

- ✅ Conta no Vercel ([https://vercel.com](https://vercel.com))
- ✅ Repositório Git (GitHub, GitLab ou Bitbucket)
- ✅ `vercel.json` configurado (já está no projeto ✓)

## 🎯 Passo 1: Conectar Repositório ao Vercel

### 1.1 Acesse o Vercel

1. Vá para [https://vercel.com](https://vercel.com)
2. Faça login com sua conta
3. Clique em **"New Project"**

### 1.2 Selecione o Repositório

1. Escolha a plataforma (GitHub/GitLab/Bitbucket)
2. Localize seu repositório `design-fundamentals`
3. Clique em **"Import"**

### 1.3 Configuração do Projeto

**Framework**: Vite (Vercel detectará automaticamente)

**Build Settings** (já pré-configurados):
```
Build Command: pnpm build
Output Directory: dist/spa
Install Command: pnpm install --frozen-lockfile
```

💡 Se tudo estiver igual ao `vercel.json`, pode clicar em **"Deploy"** direto!

## 🔄 Passo 2: Deploy Inicial

Após clicar em Deploy:

1. ⏳ Vercel iniciará o build automaticamente
2. 🔨 Compilará o projeto (`pnpm build`)
3. 🚀 Fará deploy na CDN global
4. ✅ Fornecerá uma URL de produção

**Tempo estimado**: 2-3 minutos

## 📊 Passo 3: Verificar o Deploy

### URL de Produção
```
https://<seu-projeto>.vercel.app
```

### Acessar Dashboard
- Vá para [https://vercel.com/dashboard](https://vercel.com/dashboard)
- Clique no seu projeto
- Verifique logs, domínio e settings

## 🔄 Passo 4: Deploy Automático (CI/CD)

**A partir de agora, cada push fará deploy automático!**

### Como funciona:

1. **Push para `main`** → Deploy de produção
2. **Push para outra branch** → Deploy preview
3. **Pull Request** → Deploy preview automático

### Exemplo:

```bash
git add .
git commit -m "Novo recurso"
git push origin main
```

✅ Vercel detectará e fará deploy automaticamente!

## 🌐 Passo 5: Configurar Domínio Customizado (Opcional)

Se você tiver um domínio próprio:

1. Vá para projeto → **Settings** → **Domains**
2. Clique em **"Add"**
3. Digite seu domínio (ex: `design-fundamentals.com`)
4. Configure DNS conforme instruções do Vercel

## 🔐 Variáveis de Ambiente

Se precisar adicionar variáveis (caso use APIs no futuro):

1. Vá para **Settings** → **Environment Variables**
2. Adicione as variáveis:
   - Nome: `VITE_API_KEY`
   - Valor: `seu-valor-aqui`
3. Clique em **Save**

## 🔍 Monitoramento & Logs

### Acessar Logs de Build
```
Projeto → Deployments → Clique no deployment → Logs
```

### Analytics
- Performance metrics
- Error tracking
- Uptime monitoring

## 📋 Checklist de Deploy

- [ ] Conta no Vercel criada
- [ ] Repositório conectado ao Vercel
- [ ] Primeiro deploy realizado
- [ ] URL de produção acessível
- [ ] CI/CD funcionando (testar com novo push)
- [ ] Domínio customizado (opcional)
- [ ] Variáveis de ambiente (se aplicável)

## 🆘 Troubleshooting

### Build falha com erro

**Solução**: Verifique os logs em `Deployments → Logs`
- Procure por mensagens de erro específicas
- Geralmente relacionadas a dependências ou scripts

### Site mostra erro 404

**Solução**: Verifique se o `vercel.json` está correto:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Deve redirecionar todas as rotas para `index.html` (SPA).

### Performance lenta

**Solução**:
1. Verifique **Analytics** → Performance
2. Use **Vercel Web Analytics** para mais detalhes
3. Otimize imagens/assets (se houver)

## 🎯 Próximos Passos

Após deploy bem-sucedido:

1. ✅ Testar todas as páginas:
   - `/` → Homepage
   - `/examples` → Exemplos Práticos
   - `/resources` → Recursos & Downloads

2. ✅ Compartilhar URL com equipe/usuários:
   ```
   https://<seu-projeto>.vercel.app
   ```

3. ✅ Configurar monitoramento (opcional):
   - Google Analytics
   - Sentry para errors
   - Vercel Analytics

4. ✅ Manter repositório sincronizado:
   - Cada push faz novo deploy
   - Branch preview para PRs

## 📞 Suporte

- **Documentação Vercel**: https://vercel.com/docs
- **Guia de SPA (React Router)**: https://vercel.com/docs/frameworks/react#spa-fallback
- **Contato Vercel Support**: https://vercel.com/support

---

**Status**: ✅ Pronto para Deploy  
**Data**: 14 de Dezembro de 2024  
**Próximo Passo**: Conectar repositório ao Vercel!
