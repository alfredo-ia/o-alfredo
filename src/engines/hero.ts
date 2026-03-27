import type { HeroContent } from '@domain_models/index'

/**
 * Conteúdo do Hero — narrativa principal da landing page.
 */
export const heroContent: HeroContent = {
	headline: 'Seu time de IA.\nUm orquestrador.',
	subheadline: 'Alfredo',
	description:
		'8 agentes especializados, fluxo auditável e memória institucional. O orquestrador de desenvolvimento que pensa antes de agir.',
	primaryCta: {
		label: 'Comece agora',
		href: '#getting-started',
	},
	secondaryCta: {
		label: 'Ver no GitHub',
		href: 'https://github.com/alfredo-ia/alfredo',
	},
}
