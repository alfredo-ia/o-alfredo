import type { ThemeColor } from '@domain_models/index'

/**
 * Paleta canônica do Alfredo — extraída de packages/grimoire/ux/alfredo-theme.md
 */
export const themeColors: readonly ThemeColor[] = [
	{ name: 'Primary', hex: '#00a0df', usage: 'Cor principal da marca, links e CTAs' },
	{ name: 'Secondary', hex: '#a277ff', usage: 'Destaques secundários e badges' },
	{ name: 'Accent', hex: '#f694ff', usage: 'Acentos visuais e hover states' },
	{ name: 'Success', hex: '#61ffca', usage: 'Confirmações e estados positivos' },
	{ name: 'Warning', hex: '#ffca85', usage: 'Alertas e atenção' },
] as const
