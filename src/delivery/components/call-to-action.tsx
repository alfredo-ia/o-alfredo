'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'

const spring = { type: 'spring' as const, stiffness: 300, damping: 24 }
const tapSpring = { type: 'spring' as const, stiffness: 400, damping: 17 }

const containerVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { ...spring, staggerChildren: 0.1 },
	},
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: spring },
}

const glowKeyframes = {
	boxShadow: ['0 0 0px rgba(97,255,202,0)', '0 0 20px rgba(97,255,202,0.15)', '0 0 0px rgba(97,255,202,0)'],
}

/**
 * CTA final — instalação + call to action. Inspiração rogo.ai/ohmyopenagent.
 */
export function CallToAction() {
	const prefersReduced = useReducedMotion()
	const noMotion = { duration: 0 }

	return (
		<section id="getting-started" className="relative py-32">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00a0df]/8 blur-[120px]" />
			</div>

			<div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={prefersReduced ? noMotion : undefined}
				>
					<motion.h2
						variants={itemVariants}
						transition={prefersReduced ? noMotion : undefined}
						className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
					>
						Pronto para orquestrar?
					</motion.h2>
					<motion.p
						variants={itemVariants}
						transition={prefersReduced ? noMotion : undefined}
						className="mb-10 text-lg text-muted-foreground"
					>
						Instale em segundos. Configure em minutos. Orquestre para sempre.
					</motion.p>

					{/* Install command — subtle glow pulse */}
					<motion.div
						variants={itemVariants}
						animate={prefersReduced ? undefined : glowKeyframes}
						transition={
							prefersReduced
								? noMotion
								: { boxShadow: { repeat: Number.POSITIVE_INFINITY, repeatType: 'loop' as const, duration: 3, ease: 'easeInOut' } }
						}
						className="mb-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-8 py-4 font-mono"
					>
						<span className="text-[#61ffca]">$</span>
						<code className="text-foreground">bun add -g alfredo</code>
					</motion.div>

					{/* Action buttons */}
					<motion.div variants={itemVariants} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<motion.a
							href="https://github.com/alfredo-ia/alfredo"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={prefersReduced ? undefined : { scale: 1.03 }}
							whileTap={prefersReduced ? undefined : { scale: 0.98 }}
							transition={prefersReduced ? noMotion : tapSpring}
							className="rounded-xl bg-[#00a0df] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#00a0df]/90 hover:shadow-lg hover:shadow-[#00a0df]/20"
						>
							Ver no GitHub
						</motion.a>
						<motion.a
							href="https://github.com/alfredo-ia/alfredo#readme"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={prefersReduced ? undefined : { scale: 1.03 }}
							whileTap={prefersReduced ? undefined : { scale: 0.98 }}
							transition={prefersReduced ? noMotion : tapSpring}
							className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-white/10"
						>
							Documentação
						</motion.a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
