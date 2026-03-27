'use client'

import type { McpIntegration } from '@domain_models/index'
import { mcpIntegrations } from '@engines/integrations'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { BarChart3, BookOpen, Brain, Bug, Eye, FileText, LayoutDashboard, MessageCircle, PenTool, Search, Ticket } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
	Vision: Eye,
	WebSearch: Search,
	WebReader: BookOpen,
	Context7: FileText,
	Figma: PenTool,
	'Chrome DevTools': Bug,
	Jira: Ticket,
	Jam: MessageCircle,
	Amplitude: BarChart3,
	Superset: LayoutDashboard,
	Memory: Brain,
}

const authColors: Record<McpIntegration['authType'], string> = {
	none: '#61ffca',
	local: '#00a0df',
	oauth: '#a277ff',
	session: '#ffca85',
}

const authLabels: Record<McpIntegration['authType'], string> = {
	none: 'Sem auth',
	local: 'Local',
	oauth: 'OAuth',
	session: 'Session',
}

/** Variants do container — controla stagger entre filhos. */
const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.05 } },
}

/** Variants de cada card — spring com acessibilidade. */
function cardVariants(reducedMotion: boolean): Variants {
	return {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 24 },
		},
	}
}

function IntegrationCard({ integration, reducedMotion }: { integration: McpIntegration; reducedMotion: boolean }) {
	const Icon = iconMap[integration.name]
	const badgeColor = authColors[integration.authType]

	return (
		<motion.div
			variants={cardVariants(reducedMotion)}
			className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]"
		>
			{/* Hover glow */}
			<div
				className="absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
				style={{ background: 'linear-gradient(135deg, #ffca8510, transparent 60%)' }}
			/>

			<div className="relative z-10">
				<div className="mb-3 flex items-center gap-3">
					<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ffca85]/10">
						{Icon && <Icon className="h-4 w-4 text-[#ffca85]" />}
					</div>
					<h3 className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">{integration.name}</h3>
					<span
						className="shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-medium"
						style={{
							color: badgeColor,
							borderColor: `${badgeColor}30`,
							backgroundColor: `${badgeColor}10`,
						}}
					>
						{authLabels[integration.authType]}
					</span>
				</div>

				<p className="text-sm leading-relaxed text-muted-foreground">{integration.description}</p>
			</div>
		</motion.div>
	)
}

/**
 * Seção de integrações MCP — grid de cards com badges de authType e ícones Lucide.
 */
export function Integrations() {
	const reducedMotion = useReducedMotion() ?? false

	return (
		<section id="integrations" className="relative py-32">
			{/* Background glow */}
			<div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#ffca85]/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl px-6">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={reducedMotion ? { duration: 0 } : undefined}
					className="mb-16 text-center"
				>
					<span className="mb-4 inline-block text-sm font-medium text-[#ffca85]">Integrações</span>
					<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Conectado ao seu stack.</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						11 servidores MCP prontos para uso. De analytics a design, do Jira ao browser — sem configuração manual.
					</p>
				</motion.div>

				{/* Integration grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				>
					{mcpIntegrations.map((integration) => (
						<IntegrationCard key={integration.name} integration={integration} reducedMotion={reducedMotion} />
					))}
				</motion.div>
			</div>
		</section>
	)
}
