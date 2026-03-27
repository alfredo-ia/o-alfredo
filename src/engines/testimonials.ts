import type { Testimonial } from '@domain_models/index'

/**
 * Testimonials — estrutura pronta para conteúdo real.
 * Por enquanto com placeholders realistas baseados no uso do Alfredo.
 */
export const testimonials: readonly Testimonial[] = [
	{
		quote: 'O Alfredo mudou a forma como faço code review. O Nemesis encontra problemas que eu deixaria passar.',
		author: 'Dev Senior',
		role: 'Engenheiro de Software',
	},
	{
		quote: 'A memória observacional é game-changer. O contexto persiste entre sessões sem eu precisar repetir nada.',
		author: 'Tech Lead',
		role: 'Líder Técnico',
	},
	{
		quote: 'Modo Hera com PRD formal me deu confiança para refatorações grandes. O fluxo auditável salva.',
		author: 'Arquiteto',
		role: 'Arquiteto de Software',
	},
] as const
