/**
 * MASA Layer 1 — Engines
 *
 * Pure functions e lógica de negócio sem side-effects.
 * Dependency rule: pode importar domain_models. Sem I/O, sem React, sem fetch.
 */

export { agents, getAgentById } from './agents'
export { cliCommands } from './cli'
export { features, getFeaturesByCategory } from './features'
export { heroContent } from './hero'
export { mcpIntegrations } from './integrations'
export { metrics } from './metrics'
export { footerSections, navigationItems } from './navigation'
export { heraFlowSteps, orchestrationModes } from './orchestration'
export { testimonials } from './testimonials'
export { themeColors } from './theme'
