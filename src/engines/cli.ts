import type { CliCommand } from '@domain_models/index'

/**
 * Comandos CLI reais do Alfredo — extraídos de packages/grimoire/guides/cli-reference.md
 */
export const cliCommands: readonly CliCommand[] = [
	{ command: 'alfredo', description: 'Abre o runtime com TUI interativa' },
	{ command: 'alfredo init', description: 'Bootstrap multi-projeto com ALFREDO.md e configuração' },
	{ command: 'alfredo sync', description: 'Sincroniza instruções entre projetos' },
	{ command: 'alfredo ci', description: 'CI local via act — sem consumir minutos GitHub' },
	{ command: 'alfredo doctor', description: 'Health check completo do workspace' },
	{ command: 'alfredo dashboard', description: 'Dashboard local com Incident e Audit Center' },
	{ command: 'alfredo learn', description: 'Gerencia Learn Cards institucionais' },
	{ command: 'alfredo db', description: 'Natural query sobre banco de dados' },
	{ command: 'alfredo qa', description: 'Testes E2E com Playwright' },
	{ command: 'alfredo memory', description: 'Gerencia memória observacional' },
] as const
