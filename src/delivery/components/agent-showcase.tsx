'use client'

import type { AgentProfile } from '@domain_models/index'
import { agents } from '@engines/agents'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Crown, Database, GitBranch, Hammer, Scale, Search, Shield, Sparkles } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
	Crown,
	Sparkles,
	Hammer,
	Shield,
	Scale,
	GitBranch,
	Search,
	Database,
}

function AgentCard({ agent }: { agent: AgentProfile }) {
	const Icon = iconMap[agent.icon]
	const prefersReducedMotion = useReducedMotion()

	const spring = prefersReducedMotion ? { duration: 0 } : { type: 'spring' as const, stiffness: 300, damping: 24 }

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: spring },
	}

	return (
		<motion.div
			variants={itemVariants}
			whileHover={{ y: -4, transition: spring }}
			className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
		>
			{/* Glow accent */}
			<div
				className="absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
				style={{
					background: `linear-gradient(135deg, ${agent.color}10, transparent 60%)`,
				}}
			/>

			<div className="relative z-10">
				{/* Icon + Name */}
				<div className="mb-4 flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${agent.color}15` }}>
						{Icon && <Icon className="h-5 w-5" style={{ color: agent.color }} />}
					</div>
					<div>
						<h3 className="font-semibold text-foreground">{agent.name}</h3>
						<p className="text-xs" style={{ color: agent.color }}>
							{agent.title}
						</p>
					</div>
				</div>

				{/* Description */}
				<p className="mb-4 text-sm leading-relaxed text-muted-foreground">{agent.description}</p>

				{/* Capabilities */}
				<div className="flex flex-wrap gap-1.5">
					{agent.capabilities.map((cap) => (
						<span key={cap} className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted-foreground">
							{cap}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	)
}

/**
 * Showcase dos 8 agentes do Panteão — inspiração ohmyopenagent.com grid.
 */
export function AgentShowcase() {
	const prefersReducedMotion = useReducedMotion()

	const spring = prefersReducedMotion ? { duration: 0 } : { type: 'spring' as const, stiffness: 300, damping: 24 }

	const sectionVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: spring },
	}

	const containerVariants: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.06,
			},
		},
	}

	return (
		<section id="agents" className="relative py-32">
			{/* Background glow */}
			<div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#a277ff]/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl px-6">
				{/* Section header */}
				<motion.div
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<span className="mb-4 inline-block text-sm font-medium text-[#a277ff]">O Panteão</span>
					<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">8 agentes. Um propósito.</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Cada agente tem um papel claro, capabilities definidas e permissões explícitas. Sem sobreposição. Sem confusão de
						responsabilidade.
					</p>
				</motion.div>

				{/* Agent grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
				>
					{agents.map((agent) => (
						<AgentCard key={agent.id} agent={agent} />
					))}
				</motion.div>
			</div>
		</section>
	)
}
