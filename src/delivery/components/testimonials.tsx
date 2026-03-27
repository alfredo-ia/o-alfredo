'use client'

import { testimonials } from '@engines/testimonials'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

const spring = { type: 'spring' as const, stiffness: 300, damping: 24 }
const hoverSpring = { type: 'spring' as const, stiffness: 400, damping: 17 }

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: spring },
}

const gridVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: spring },
}

const quoteVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: spring },
}

/**
 * Seção de testimonials — cards com citação, autor e papel.
 */
export function Testimonials() {
	const prefersReduced = useReducedMotion()
	const noMotion = { duration: 0 }

	return (
		<section className="relative py-32">
			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={prefersReduced ? noMotion : undefined}
					className="mb-16 text-center"
				>
					<span className="mb-4 inline-block text-sm font-medium text-[#f694ff]">Comunidade</span>
					<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Quem usa, confia.</h2>
				</motion.div>

				<motion.div
					variants={gridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
				>
					{testimonials.map((t, i) => (
						<motion.div
							key={i}
							variants={cardVariants}
							whileHover={prefersReduced ? undefined : { y: -4 }}
							transition={prefersReduced ? noMotion : hoverSpring}
							className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
						>
							{/* Quote */}
							<motion.p
								variants={quoteVariants}
								transition={prefersReduced ? noMotion : undefined}
								className="mb-6 text-sm leading-relaxed text-muted-foreground"
							>
								&ldquo;{t.quote}&rdquo;
							</motion.p>

							{/* Author */}
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-muted-foreground">
									{t.author.charAt(0)}
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">{t.author}</p>
									<p className="text-xs text-muted-foreground">{t.role}</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
