'use client'

import type { Feature } from '@domain_models/index'
import { features } from '@engines/features'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
	Brain,
	DatabaseZap,
	Globe,
	GraduationCap,
	Layers,
	LayoutDashboard,
	Lock,
	PlayCircle,
	Puzzle,
	ShieldCheck,
	Tags,
	Terminal,
	ToggleRight,
	Users,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
	Users,
	ToggleRight,
	Brain,
	GraduationCap,
	ShieldCheck,
	Lock,
	Terminal,
	PlayCircle,
	Puzzle,
	Globe,
	DatabaseZap,
	Layers,
	Tags,
	LayoutDashboard,
}

const categoryColors: Record<string, string> = {
	orchestration: '#00a0df',
	memory: '#a277ff',
	guardrails: '#ef4444',
	cli: '#61ffca',
	integrations: '#ffca85',
	'developer-experience': '#f694ff',
}

function FeatureCard({ feature }: { feature: Feature }) {
	const Icon = iconMap[feature.icon]
	const color = categoryColors[feature.category] ?? '#00a0df'
	const prefersReducedMotion = useReducedMotion()

	const spring = prefersReducedMotion ? { duration: 0 } : { type: 'spring' as const, stiffness: 300, damping: 24 }

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: spring },
	}

	return (
		<motion.div
			variants={itemVariants}
			whileHover={{ y: -4, transition: spring }}
			className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
		>
			<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}15` }}>
				{Icon && <Icon className="h-5 w-5" style={{ color }} />}
			</div>
			<h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
			<p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
		</motion.div>
	)
}

/**
 * Grid de features — inspiração rogo.ai feature cards.
 */
export function FeatureGrid() {
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
				staggerChildren: 0.04,
			},
		},
	}

	return (
		<section id="features" className="relative py-32">
			<div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#00a0df]/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<span className="mb-4 inline-block text-sm font-medium text-[#00a0df]">Features</span>
					<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Construído diferente.</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Não é um wrapper de LLM. É um sistema de orquestração completo com memória, guardrails, paralelização e CI integrados.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
				>
					{features.map((feature) => (
						<FeatureCard key={feature.id} feature={feature} />
					))}
				</motion.div>
			</div>
		</section>
	)
}
