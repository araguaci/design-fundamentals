# 🌐 Resolução de Erro de DNS no Vercel (`DNS_PROBE_POSSIBLE`)

Documento técnico com diagnóstico e solução passo a passo para o subdomínio `design.artesdosul.com` hospedado no Vercel.

---

## 🔍 1. Causa Raiz do Problema

O erro **`DNS_PROBE_POSSIBLE`** (ou `DNS_PROBE_FINISHED_NXDOMAIN` / `ERR_NAME_NOT_RESOLVED`) no navegador ocorre devido a um dos seguintes cenários:

1. **Domínio não registrado no projeto Vercel**: O registro CNAME aponta para a infraestrutura da Vercel, mas o projeto específico no painel da Vercel ainda não foi associado ao subdomínio `design.artesdosul.com`.
2. **Registro CNAME incorreto ou obsoleto**: Apontamento para um hostname temporário/antigo (ex: `76d3cdab393c0c31.vercel-dns-017.com`) em vez do CNAME canônico oficial `cname.vercel-dns.com`.
3. **Proxy do Cloudflare bloqueando emissão SSL**: Quando o subdomínio está com a **Nuvem Laranja (Proxied)** ativada antes da validação do certificado Let's Encrypt pela Vercel.
4. **Cache de DNS local/ISP**: Tempo de propagação e cache de registros TTL antigos.

---

## 🛠️ 2. Guia de Correção Passo a Passo

### Passo 1: Vincular o Domínio no Projeto Vercel
1. Acesse o [Vercel Dashboard](https://vercel.com/dashboard).
2. Selecione o projeto **`design-fundamentals`**.
3. Navegue até **Settings** ➔ **Domains**.
4. No campo de texto, insira:
   ```text
   design.artesdosul.com
   ```
5. Clique em **Add**.

---

### Passo 2: Configurar o Registro no Provedor DNS (Cloudflare / Registro.br / cPanel)
Edite a zona de DNS do domínio `artesdosul.com` com as configurações abaixo:

| Campo | Valor Recomendado | Observação |
| :--- | :--- | :--- |
| **Tipo** | `CNAME` | Registro de alias de subdomínio |
| **Nome / Host** | `design` (ou `design.artesdosul.com`) | Prefixo do subdomínio |
| **Destino / Valor** | `cname.vercel-dns.com` | Endereço oficial canônico Vercel |
| **Status do Proxy** | **DNS Only / Nuvem Cinza** | Desative o proxy da Cloudflare durante a validação |
| **TTL** | `Auto` ou `300s (5 min)` | Para rápida propagação |

---

### Passo 3: Limpeza de Cache de DNS Local

#### No Windows (PowerShell):
```powershell
ipconfig /flushdns
```

#### No Google Chrome:
1. Abra a URL interna: `chrome://net-internals/#dns`
2. Clique no botão **Clear host cache**.
3. Abra a URL interna: `chrome://net-internals/#sockets`
4. Clique no botão **Flush socket pools**.

---

## 📊 3. Validação de Conectividade via Terminal

Para confirmar se o DNS propagou corretamente, execute no PowerShell:

```powershell
# 1. Checar se o CNAME resolve para cname.vercel-dns.com
Resolve-DnsName design.artesdosul.com

# 2. Testar resposta HTTP do servidor Vercel
curl -I https://design.artesdosul.com
```

**Resultado esperado:**
- HTTP Status: `200 OK` (ou `308 Permanent Redirect` para HTTPS)
- Header `server`: `Vercel`
- Header `x-vercel-id`: Presente com ID de roteamento da edge network.

---

## 📑 4. Histórico de Versão e Suporte
- **Domínio**: `https://design.artesdosul.com/`
- **Projeto**: `design-fundamentals` (Masterpiece Edition por `@artesdosul`)
- **Status**: Documentado e pronto para apontamento.
