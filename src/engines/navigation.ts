import type { FooterSection, NavigationItem } from '@domain_models/index'

/**
 * Navegação principal — links do header.
 */
export const navigationItems: readonly NavigationItem[] = [
	{ label: 'Agentes', href: '#agents' },
	{ label: 'Features', href: '#features' },
	{ label: 'Fluxo', href: '#orchestration' },
	{ label: 'CLI', href: '#cli' },
	{ label: 'Integrações', href: '#integrations' },
] as const

/**
 * Footer organizado em colunas.
 */
export const footerSections: readonly FooterSection[] = [
	{
		title: 'Produto',
		links: [
			{ label: 'Agentes', href: '#agents' },
			{ label: 'Features', href: '#features' },
			{ label: 'Fluxo de Orquestração', href: '#orchestration' },
			{ label: 'CLI', href: '#cli' },
		],
	},
	{
		title: 'Desenvolvimento',
		links: [
			{ label: 'GitHub', href: 'https://github.com/alfredo-ia/alfredo', external: true },
			{ label: 'Documentação', href: 'https://github.com/alfredo-ia/alfredo#readme', external: true },
			{ label: 'Issues', href: 'https://github.com/alfredo-ia/alfredo/issues', external: true },
		],
	},
	{
		title: 'Comunidade',
		links: [
			{ label: 'Contribuir', href: 'https://github.com/alfredo-ia/alfredo/blob/main/CONTRIBUTING.md', external: true },
			{ label: 'Licença', href: 'https://github.com/alfredo-ia/alfredo/blob/main/LICENSE', external: true },
		],
	},
] as const
