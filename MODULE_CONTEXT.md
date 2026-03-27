# MODULE_CONTEXT — o-alfredo (Landing Page)

## O que este módulo faz

Landing page institucional do Alfredo para o domínio `o-alfredo.ia.br`. Apresenta o sistema Alfredo com conteúdo extraído do monorepo `alfredo-ia/alfredo`: agentes especializados, fluxo de orquestração, features, CLI, integrações MCP, métricas e depoimentos.

## Stack

- **Next.js 16** (App Router, SSG estático)
- **React 19**
- **TypeScript strict**
- **Tailwind CSS 4** + **shadcn/ui** (style new-york, zinc, CSS variables oklch)
- **Framer Motion 12** (animações avançadas com springs, stagger, parallax)
- **Lucide React** (ícones)
- **Bun** (package manager e build)

## Arquitetura

MASA Framework com 5 camadas:

| Camada | Path | Responsabilidade |
|--------|------|-----------------|
| L0 — Domain Models | `src/domain_models/` | Tipos puros. Zero imports externos. |
| L1 — Engines | `src/engines/` | Dados estáticos e pure functions. |
| L2 — Services | `src/services/` | Orquestração (placeholder). |
| L3 — Integrations | `src/integrations/` | I/O externo (placeholder). |
| L4 — Delivery | `src/delivery/components/` + `src/app/` | UI, componentes React, App Router. |

**Regra:** cada camada só importa de camadas abaixo.

## Fronteiras e uso esperado

- `src/app/` é L4 (localização obrigatória do Next.js App Router).
- Componentes shadcn vivem em `src/delivery/components/ui/`.
- Todo conteúdo visível na landing vem de `src/engines/` (dados estáticos).
- Conteúdo é derivado exclusivamente do monorepo Alfredo — nunca inventar features.

## Por que foi feito assim

- MASA Framework escolhido para separação clara de responsabilidades e testabilidade [fonte: decisão de design na sessão de scaffold inicial].
- `src/app/` mantido no local padrão do Next.js para evitar conflito com App Router [fonte: documentação Next.js App Router].
- Framer Motion com springs e variants por recomendação das skills `framer-motion-animator` e `animation-designer` [fonte: `.agents/skills/*/SKILL.md`].
- `useReducedMotion` obrigatório em todo componente animado para acessibilidade [fonte: skill `framer-motion-animator`].

## Trade-offs aceitos

- **Sem SSR dinâmico:** site é 100% estático (SSG). Não há dados dinâmicos no MVP [fonte: decisão de design].
- **Sem i18n:** conteúdo apenas em pt-BR. Internacionalização adiada [fonte: escopo do MVP].
- **Testimonials placeholder:** depoimentos são fictícios no momento. Precisam de conteúdo real antes do lançamento [fonte: `engines/testimonials.ts`].
- **Sem analytics:** nenhum tracking implementado no MVP [fonte: escopo do MVP].

## Debugging

- Build: `bun run build`
- Dev server: `bun run dev`
- TypeScript check: incluído no build

## Limites conhecidos

- Ícone do Figma usa `PenTool` (lucide-react não tem ícone Figma por trademark).
- Serviços (L2) e integrações (L3) são placeholders — não há lógica de negócio ainda.
- Não há testes automatizados no MVP.
