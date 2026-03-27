import type { AgentProfile } from '@domain_models/index'

/**
 * Agentes do Panteão Alfredo — dados reais extraídos do monorepo.
 * Cada agente é um papel especializado com capabilities definidas.
 */
export const agents: readonly AgentProfile[] = [
	{
		id: 'hera',
		name: 'Hera',
		title: 'Orquestradora',
		description:
			'Rainha do Olimpo. Decide o fluxo, delega com Context Pack estruturado e entrega a resposta final ao usuário. Coordena todos os agentes do panteão.',
		color: '#00a0df',
		capabilities: ['Decisão de fluxo', 'Delegação com Context Pack', 'Resposta final', 'Escalonamento'],
		icon: 'Crown',
	},
	{
		id: 'hecate',
		name: 'Hecate',
		title: 'Planejadora',
		description:
			'Deusa da magia e encruzilhadas. Cria PRDs executáveis a partir de requisitos refinados, com contratos, invariantes e leis do sistema.',
		color: '#a277ff',
		capabilities: ['PRDs executáveis', 'Contratos e invariantes', 'Arquitetura', 'Especificação'],
		icon: 'Sparkles',
	},
	{
		id: 'hephaestus',
		name: 'Hephaestus',
		title: 'Executor',
		description:
			'Deus ferreiro do Olimpo. Recebe delegação com 6 seções estruturadas e implementa com precisão. Nunca define escopo — apenas executa.',
		color: '#f97316',
		capabilities: ['Implementação de código', 'Execução de PRDs', 'Refatoração', 'Code changes'],
		icon: 'Hammer',
	},
	{
		id: 'nemesis',
		name: 'Nemesis',
		title: 'Revisora Crítica',
		description:
			'Deusa da retribuição justa. Revisa PRDs e código com criticidade máxima e tolerância zero. Decisões binárias: APPROVED ou BLOCKED.',
		color: '#ef4444',
		capabilities: ['Review de PRD', 'Code review', 'Security review', 'Gates NEMESIS-GO'],
		icon: 'Shield',
	},
	{
		id: 'themis',
		name: 'Themis',
		title: 'Validadora E2E',
		description:
			'Deusa da justiça e lei divina. Validadora com foco em evidência. Executa testes reais e gera relatórios de qualidade verificáveis.',
		color: '#61ffca',
		capabilities: ['Validação E2E', 'Testes com Playwright', 'Relatórios de qualidade', 'Evidência verificável'],
		icon: 'Scale',
	},
	{
		id: 'hermes',
		name: 'Hermes',
		title: 'Especialista Git',
		description:
			'Mensageiro dos deuses. ÚNICO agente autorizado a executar comandos Git mutantes. Commit, push, PR — tudo passa por Hermes.',
		color: '#22c55e',
		capabilities: ['Git operations', 'Pull requests', 'Branch management', 'Commit com convenção'],
		icon: 'GitBranch',
	},
	{
		id: 'iris',
		name: 'Iris',
		title: 'Descobridora',
		description:
			'Mensageira do arco-íris. Conduz entrevistas estruturadas, extrai requisitos verificáveis e produz pacotes de requisitos para planejamento.',
		color: '#ffca85',
		capabilities: ['Entrevistas estruturadas', 'Clarificação', 'Requisitos verificáveis', 'Discovery'],
		icon: 'Search',
	},
	{
		id: 'mnemosyne',
		name: 'Mnemosyne',
		title: 'Especialista em Banco',
		description:
			'Titã da memória. Agente terminal exclusivo para operações de banco de dados. Natural query, Data Bridge e telemetria. Nunca delega.',
		color: '#3b82f6',
		capabilities: ['Natural query', 'Data Bridge', 'Schema discovery', 'Read-only por padrão'],
		icon: 'Database',
	},
] as const

/** Busca agente por ID */
export function getAgentById(id: string): AgentProfile | undefined {
	return agents.find((a) => a.id === id)
}
