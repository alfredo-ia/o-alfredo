'use client'

import { heroContent } from '@engines/hero'
import { metrics } from '@engines/metrics'
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

// ─── Animation config ───────────────────────────────────────────

const spring = { type: 'spring' as const, stiffness: 300, damping: 24 }
const noMotion = { duration: 0 }
const ctaSpring = { type: 'spring' as const, stiffness: 400, damping: 17 }

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12 },
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 },
}

// ─── AnimatedNumber ─────────────────────────────────────────────

function AnimatedNumber({ value, suffix, reducedMotion }: { value: number; suffix?: string; reducedMotion: boolean | null }) {
	const ref = useRef<HTMLSpanElement>(null)
	const isInView = useInView(ref, { once: true, margin: '-50px' })

	const springValue = useSpring(0, { stiffness: 80, damping: 30 })
	const display = useTransform(springValue, (v) => Math.round(v).toString())

	useEffect(() => {
		if (!isInView) return
		if (reducedMotion) {
			springValue.jump(value)
			return
		}
		springValue.set(value)
	}, [isInView, value, reducedMotion, springValue])

	return (
		<span ref={ref} className="inline-flex items-baseline">
			<motion.span>{display}</motion.span>
			{suffix && <span className="text-[#00a0df]">{suffix}</span>}
		</span>
	)
}

// ─── Hero ───────────────────────────────────────────────────────

/**
 * Hero section — inspiração rogo.ai: título enorme, gradiente sutil, métricas inline.
 * Estilo dark-first com glow azul Alfredo (#00a0df).
 */
export function Hero() {
	const reducedMotion = useReducedMotion()
	const sectionRef = useRef<HTMLElement>(null)

	const transition = reducedMotion ? noMotion : spring
	const ctaTransition = reducedMotion ? noMotion : ctaSpring

	// Parallax para background glow
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end start'],
	})
	const blueY = useTransform(scrollYProgress, [0, 1], [0, -50])
	const purpleY = useTransform(scrollYProgress, [0, 1], [0, 30])

	return (
		<section ref={sectionRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0">
				<motion.div
					style={{ y: reducedMotion ? 0 : blueY }}
					className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#00a0df]/10 blur-[120px]"
				/>
				<motion.div
					style={{ y: reducedMotion ? 0 : purpleY }}
					className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#a277ff]/8 blur-[100px]"
				/>
			</div>

			<motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 mx-auto max-w-5xl text-center">
				{/* Badge */}
				<motion.div
					variants={itemVariants}
					transition={transition}
					className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00a0df]/20 bg-[#00a0df]/5 px-4 py-1.5"
				>
					<span className="h-2 w-2 rounded-full bg-[#61ffca] animate-pulse" />
					<span className="text-sm text-[#00a0df]">Orquestrador de Desenvolvimento com IA</span>
				</motion.div>

				{/* Headline */}
				<motion.h1
					variants={itemVariants}
					transition={transition}
					className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-8xl"
				>
					<span className="whitespace-pre-line">{heroContent.headline}</span>
				</motion.h1>

				{/* Description */}
				<motion.p
					variants={itemVariants}
					transition={transition}
					className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
				>
					{heroContent.description}
				</motion.p>

				{/* CTAs */}
				<motion.div
					variants={itemVariants}
					transition={transition}
					className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
				>
					<motion.a
						href={heroContent.primaryCta.href}
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.98 }}
						transition={ctaTransition}
						className="rounded-xl bg-[#00a0df] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#00a0df]/90 hover:shadow-lg hover:shadow-[#00a0df]/20"
					>
						{heroContent.primaryCta.label}
					</motion.a>
					{heroContent.secondaryCta && (
						<motion.a
							href={heroContent.secondaryCta.href}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							transition={ctaTransition}
							className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-white/10"
						>
							{heroContent.secondaryCta.label}
						</motion.a>
					)}
				</motion.div>

				{/* Install command */}
				<motion.div
					variants={itemVariants}
					transition={transition}
					className="mt-12 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-sm text-muted-foreground"
				>
					<span className="text-[#61ffca]">$</span>
					<span>bun add -g alfredo</span>
				</motion.div>

				{/* Metrics bar */}
				<motion.div variants={itemVariants} transition={transition} className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
					{metrics.map((metric) => (
						<div key={metric.label} className="text-center">
							<div className="text-3xl font-bold text-foreground">
								<AnimatedNumber value={parseInt(metric.value, 10)} suffix={metric.suffix} reducedMotion={reducedMotion} />
							</div>
							<div className="mt-1 text-xs text-muted-foreground">{metric.label}</div>
						</div>
					))}
				</motion.div>
			</motion.div>
		</section>
	)
}
