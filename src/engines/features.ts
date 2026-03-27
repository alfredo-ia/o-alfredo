import type { Feature, FeatureCategory } from '@domain_models/index'

/**
 * Features reais do Alfredo — extraídas do código-fonte do monorepo.
 */
export const features: readonly Feature[] = [
	{
		id: 'multi-agent',
		title: 'Orquestração Multi-Agente',
		description: '8 agentes especializados com papéis distintos, delegação estruturada e fluxo auditável de ponta a ponta.',
		icon: 'Users',
		category: 'orchestration',
	},
	{
		id: 'dual-mode',
		title: 'Modos Odin & Hera',
		description: 'Modo Odin para iteração rápida com bypass de gates. Modo Hera para trilha formal com PRD, review e aprovação humana.',
		icon: 'ToggleRight',
		category: 'orchestration',
	},
	{
		id: 'observational-memory',
		title: 'Memória Observacional',
		description: 'Persistência de observações e reflexões por thread com recall auditável, freshness policy e continuidade determinística.',
		icon: 'Brain',
		category: 'memory',
	},
	{
		id: 'learn-cards',
		title: 'Learn Cards Institucionais',
		description: 'Memória curada do projeto: regras, decisões, padrões e pitfalls que sobrevivem entre sessões e agentes.',
		icon: 'GraduationCap',
		category: 'memory',
	},
	{
		id: 'guardrails',
		title: 'Guardrails Automáticos',
		description: '3 camadas de proteção (Core > Project > Pack) com regras de segurança que não podem ser desabilitadas. Bypass auditado.',
		icon: 'ShieldCheck',
		category: 'guardrails',
	},
	{
		id: 'nemesis-gate',
		title: 'Gate NEMESIS-GO',
		description: 'Revisão adversarial obrigatória antes da execução no modo formal. Tolerância zero: APPROVED ou BLOCKED, sem meio-termo.',
		icon: 'Lock',
		category: 'guardrails',
	},
	{
		id: 'cli-complete',
		title: 'CLI Completa',
		description: 'De `alfredo init` a `alfredo doctor`: bootstrap multi-projeto, CI local, dashboard, QA E2E, memória e banco de dados.',
		icon: 'Terminal',
		category: 'cli',
	},
	{
		id: 'local-ci',
		title: 'CI Local',
		description: '`alfredo ci` executa pipelines via act sem consumir minutos do GitHub Actions. Validação antes do push.',
		icon: 'PlayCircle',
		category: 'cli',
	},
	{
		id: 'mcp-integrations',
		title: '11 MCPs Integrados',
		description: 'Vision, websearch, Figma, Chrome DevTools, Jira, Amplitude, Superset e mais — tudo conectado via protocolo MCP.',
		icon: 'Puzzle',
		category: 'integrations',
	},
	{
		id: 'chrome-extension',
		title: 'Chrome Extension MV3',
		description: 'Extensão que conecta seu browser autenticado ao Alfredo via relay HTTP local com heartbeat contínuo.',
		icon: 'Globe',
		category: 'integrations',
	},
	{
		id: 'data-bridge',
		title: 'Data Bridge',
		description: 'Natural query sobre banco de dados com discovery automático, telemetria anônima e modo read-only por padrão.',
		icon: 'DatabaseZap',
		category: 'integrations',
	},
	{
		id: 'parallel-scheduler',
		title: 'Scheduler de Paralelização',
		description: '4 estratégias de scheduling (FIFO, LPT, critical path, balanced roles) para execução paralela de tasks independentes.',
		icon: 'Layers',
		category: 'developer-experience',
	},
	{
		id: 'task-classification',
		title: 'Classificação de Tarefas',
		description: 'Classificação operacional automática: mecânica, implementação segura, mudança estrutural, protocolo externo, segurança.',
		icon: 'Tags',
		category: 'developer-experience',
	},
	{
		id: 'dashboard',
		title: 'Dashboard Local',
		description: 'Interface local com Incident Center, Audit Center, Audit Log e Assistant. Tudo rodando na sua máquina.',
		icon: 'LayoutDashboard',
		category: 'developer-experience',
	},
] as const

/** Filtra features por categoria */
export function getFeaturesByCategory(category: FeatureCategory): readonly Feature[] {
	return features.filter((f) => f.category === category)
}
