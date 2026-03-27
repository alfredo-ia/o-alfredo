import type { McpIntegration } from '@domain_models/index'

/**
 * MCPs integrados ao Alfredo — extraídos do README.md do monorepo.
 */
export const mcpIntegrations: readonly McpIntegration[] = [
	{ name: 'Vision', description: 'Análise visual de imagens e screenshots', authType: 'none' },
	{ name: 'WebSearch', description: 'Busca web em tempo real', authType: 'none' },
	{ name: 'WebReader', description: 'Leitura e parsing de páginas web', authType: 'none' },
	{ name: 'Context7', description: 'Documentação técnica atualizada', authType: 'none' },
	{ name: 'Figma', description: 'Acesso a designs e componentes do Figma', authType: 'oauth' },
	{ name: 'Chrome DevTools', description: 'Debug direto no navegador via CDP', authType: 'local' },
	{ name: 'Jira', description: 'Issues e boards do Atlassian Jira', authType: 'oauth' },
	{ name: 'Jam', description: 'Bug reports colaborativos', authType: 'oauth' },
	{ name: 'Amplitude', description: 'Analytics e métricas de produto', authType: 'oauth' },
	{ name: 'Superset', description: 'Dashboards e queries SQL', authType: 'session' },
	{ name: 'Memory', description: 'Memória persistente entre sessões', authType: 'local' },
] as const
