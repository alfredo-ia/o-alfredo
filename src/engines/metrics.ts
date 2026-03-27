import type { Metric } from '@domain_models/index'

/**
 * Métricas reais do Alfredo — números deriváveis do código-fonte.
 */
export const metrics: readonly Metric[] = [
	{
		value: '8',
		label: 'Agentes Especializados',
	},
	{
		value: '40',
		label: 'Hooks de Orquestração',
		suffix: '+',
	},
	{
		value: '11',
		label: 'MCPs Integrados',
	},
	{
		value: '14',
		label: 'Passos no Fluxo Formal',
	},
	{
		value: '3',
		label: 'Camadas de Guardrails',
	},
	{
		value: '4',
		label: 'Estratégias de Scheduling',
	},
] as const
