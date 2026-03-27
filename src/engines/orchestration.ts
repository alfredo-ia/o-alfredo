import type { OrchestrationMode, OrchestratorStep } from '@domain_models/index'

/**
 * Fluxo formal completo do modo Hera — 14 passos auditáveis.
 * Extraído de packages/grimoire/architecture/orchestration-flow.md
 */
export const heraFlowSteps: readonly OrchestratorStep[] = [
	{ id: 'understand', label: 'UNDERSTAND', description: 'Extrai intenção real do pedido', agent: 'hera' },
	{ id: 'research', label: 'RESEARCH', description: 'Explora contexto e código-fonte', agent: 'iris' },
	{
		id: 'backlog-refinement',
		label: 'BACKLOG_REFINEMENT',
		description: 'Refina requisitos para backlog formal',
		agent: 'iris',
	},
	{
		id: 'refinement-go',
		label: 'REFINEMENT_GO',
		description: 'Gate de aprovação do refinamento',
		isGate: true,
	},
	{ id: 'prd', label: 'PRD', description: 'Cria PRD executável com contratos', agent: 'hecate' },
	{ id: 'review-prd', label: 'REVIEW_PRD', description: 'Revisão adversarial do PRD', agent: 'nemesis' },
	{
		id: 'nemesis-go',
		label: 'NEMESIS_GO',
		description: 'Gate crítico: APPROVED ou BLOCKED',
		isGate: true,
	},
	{
		id: 'human-go',
		label: 'HUMAN_GO',
		description: 'Aprovação humana explícita',
		isGate: true,
	},
	{ id: 'execute', label: 'EXECUTE', description: 'Implementação do PRD aprovado', agent: 'hephaestus' },
	{ id: 'review-code', label: 'REVIEW_CODE', description: 'Code review adversarial', agent: 'nemesis' },
	{
		id: 'review-security',
		label: 'REVIEW_SECURITY',
		description: 'Revisão de segurança dedicada',
		agent: 'nemesis',
	},
	{ id: 'verify', label: 'VERIFY', description: 'Validação E2E com evidências', agent: 'themis' },
	{ id: 'commit', label: 'COMMIT', description: 'Git commit, push e PR', agent: 'hermes' },
	{ id: 'monitor', label: 'MONITOR', description: 'Monitoramento pós-deploy', agent: 'hera' },
] as const

/**
 * Modos de orquestração disponíveis.
 */
export const orchestrationModes: readonly OrchestrationMode[] = [
	{
		id: 'odin',
		name: 'Modo Odin',
		description:
			'Iteração rápida com autonomia total. Bypass de gates formais. Investiga, corrige, verifica e responde. Ideal para bugfixes e tarefas pontuais.',
		steps: [
			{ id: 'understand', label: 'ENTENDER', description: 'Pedido e contexto real' },
			{ id: 'delegate', label: 'DELEGAR', description: 'Para especialistas' },
			{ id: 'verify', label: 'VERIFICAR', description: 'Evidências de execução' },
			{ id: 'respond', label: 'RESPONDER', description: 'Estado final determinístico' },
		],
	},
	{
		id: 'hera',
		name: 'Modo Hera',
		description:
			'Trilha formal auditável com 14 passos, gates de aprovação e revisão adversarial. Para features complexas e mudanças estruturais.',
		steps: heraFlowSteps,
	},
] as const
