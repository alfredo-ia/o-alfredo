/**
 * MASA Layer 0 — Domain Models
 *
 * Tipos puros do domínio. Zero imports de bibliotecas externas.
 * Dependency rule: nenhuma camada importa domain_models; domain_models não importa ninguém.
 */

// ─── Navigation ────────────────────────────────────────────────

export interface NavigationItem {
	readonly label: string
	readonly href: string
}

// ─── Hero ──────────────────────────────────────────────────────

export interface HeroContent {
	readonly headline: string
	readonly subheadline: string
	readonly description: string
	readonly primaryCta: CtaAction
	readonly secondaryCta?: CtaAction
}

export interface CtaAction {
	readonly label: string
	readonly href: string
}

// ─── Agents (Panteão) ──────────────────────────────────────────

export interface AgentProfile {
	readonly id: string
	readonly name: string
	readonly title: string
	readonly description: string
	readonly color: string
	readonly capabilities: readonly string[]
	readonly icon: string
}

// ─── Orchestration Flow ────────────────────────────────────────

export interface OrchestratorStep {
	readonly id: string
	readonly label: string
	readonly description: string
	readonly agent?: string
	readonly isGate?: boolean
}

export interface OrchestrationMode {
	readonly id: string
	readonly name: string
	readonly description: string
	readonly steps: readonly OrchestratorStep[]
}

// ─── Features ──────────────────────────────────────────────────

export interface Feature {
	readonly id: string
	readonly title: string
	readonly description: string
	readonly icon: string
	readonly category: FeatureCategory
}

export type FeatureCategory = 'orchestration' | 'memory' | 'guardrails' | 'cli' | 'integrations' | 'developer-experience'

// ─── Metrics ───────────────────────────────────────────────────

export interface Metric {
	readonly value: string
	readonly label: string
	readonly suffix?: string
}

// ─── Testimonials ──────────────────────────────────────────────

export interface Testimonial {
	readonly quote: string
	readonly author: string
	readonly role: string
	readonly avatar?: string
}

// ─── CLI Commands ──────────────────────────────────────────────

export interface CliCommand {
	readonly command: string
	readonly description: string
}

// ─── Footer ────────────────────────────────────────────────────

export interface FooterSection {
	readonly title: string
	readonly links: readonly FooterLink[]
}

export interface FooterLink {
	readonly label: string
	readonly href: string
	readonly external?: boolean
}

// ─── MCP Integration ───────────────────────────────────────────

export interface McpIntegration {
	readonly name: string
	readonly description: string
	readonly authType: 'oauth' | 'session' | 'local' | 'none'
}

// ─── Theme Colors (Paleta Canônica Alfredo) ────────────────────

export interface ThemeColor {
	readonly name: string
	readonly hex: string
	readonly usage: string
}
